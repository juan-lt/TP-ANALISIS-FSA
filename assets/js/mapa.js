// ============================================================
// mapa.js — Lógica del mapa interactivo
// Proyecto: Lo que quedó en los nombres
// ============================================================

// ── Estado global ── //
const estado = {
  filtroActual: 'todos',
  visitados: new Set(),
  puntoActivo: null,
  marcadores: {}
};

// ── Mapa Leaflet ── //
let map;

// ── Inicialización principal ── //
document.addEventListener('DOMContentLoaded', function () {
  inicializarMapa();
  crearTodosLosMarcadores();
  inicializarFiltros();
  actualizarContador();
});

// Inicializa el mapa centrado en Formosa con OpenStreetMap
function inicializarMapa() {
  const FORMOSA_CENTER = [-25.1, -59.5];
  const zoomInicial = window.innerWidth < 768 ? 7 : 8;

  map = L.map('map-container', {
    center: FORMOSA_CENTER,
    zoom: zoomInicial,
    zoomControl: true
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18
  }).addTo(map);

  // Ajusta el mapa si cambia el tamaño de ventana
  window.addEventListener('resize', function () {
    map.invalidateSize();
  });
}

// Crea los marcadores circulares para todos los puntos
function crearTodosLosMarcadores() {
  PUNTOS_MAPA.forEach(function (punto) {
    const marcador = crearMarcador(punto);
    estado.marcadores[punto.id] = marcador;
    marcador.addTo(map);
  });
}

// Crea un marcador individual con color de categoría
function crearMarcador(punto) {
  const color = COLORES_CATEGORIA[punto.categoriaId];
  const radio = window.innerWidth < 768 ? 14 : 10;

  const marcador = L.circleMarker([punto.latitud, punto.longitud], {
    radius: radio,
    fillColor: color,
    color: '#ffffff',
    weight: 2.5,
    opacity: 1,
    fillOpacity: 0.9
  });

  // Tooltip al hacer hover
  marcador.bindTooltip(
    '<strong>' + punto.ciudad + '</strong><br><small>' + punto.fecha + '</small>',
    { direction: 'top', offset: [0, -12] }
  );

  // Clic: abre el panel lateral
  marcador.on('click', function () {
    abrirPanel(punto.id);
  });

  return marcador;
}

// ── Panel lateral ── //

// Abre el panel con los datos del punto seleccionado
function abrirPanel(id) {
  const punto = PUNTOS_MAPA.find(function (p) { return p.id === id; });
  if (!punto) return;

  estado.puntoActivo = id;

  const color = COLORES_CATEGORIA[punto.categoriaId];
  const nombreCat = NOMBRES_CATEGORIA[punto.categoriaId];

  // Construir HTML del contenido
  const html = `
    <span class="categoria-chip" style="background-color: ${color};">${nombreCat}</span>
    <h2 class="panel-ciudad">${punto.ciudad}</h2>
    <p class="panel-fecha">${punto.fecha}</p>
    <p class="panel-titulo-evento">${punto.tituloEvento}</p>
    <p class="panel-descripcion">${punto.descripcion}</p>
    <div class="panel-cita">
      <blockquote>«${punto.citaTextual}»</blockquote>
      <cite>— ${punto.citaFuente}</cite>
    </div>
    <div class="panel-fuente">
      <strong>Fuentes</strong>
      ${punto.fuenteCompleta}
    </div>
    <div class="panel-pregunta">
      <span class="panel-pregunta-label">🤔 Para pensar</span>
      <p>${punto.preguntaReflexiva}</p>
    </div>
    <button class="btn-cerrar-panel" onclick="cerrarPanel()">Cerrar ×</button>
  `;

  const contenido = document.getElementById('panel-contenido');
  const vacio = document.getElementById('panel-vacio');
  const panel = document.getElementById('panel-lateral');

  contenido.innerHTML = html;
  contenido.classList.add('visible');
  vacio.style.display = 'none';

  // En mobile: mostrar como bottom sheet
  if (window.innerWidth < 768) {
    panel.classList.add('visible');
  }

  // Marcar como visitado
  marcarVisitado(id);
  actualizarContador();
  verificarCompletado();
}

// Cierra el panel lateral
function cerrarPanel() {
  const contenido = document.getElementById('panel-contenido');
  const vacio = document.getElementById('panel-vacio');
  const panel = document.getElementById('panel-lateral');

  contenido.classList.remove('visible');
  contenido.innerHTML = '';
  vacio.style.display = 'flex';

  // En mobile: ocultar bottom sheet
  if (window.innerWidth < 768) {
    panel.classList.remove('visible');
  }

  estado.puntoActivo = null;
}

// ── Marcadores visitados ── //

function marcarVisitado(id) {
  if (estado.visitados.has(id)) return;
  estado.visitados.add(id);

  const marcador = estado.marcadores[id];
  if (marcador) {
    marcador.setStyle({
      fillOpacity: 0.3,
      opacity: 0.4,
      dashArray: '5'
    });
  }
}

// ── Filtros por categoría ── //

function inicializarFiltros() {
  const botones = document.querySelectorAll('.filtro-btn');
  botones.forEach(function (btn) {
    btn.addEventListener('click', function () {
      // Actualizar clase activa
      botones.forEach(function (b) { b.classList.remove('activo'); });
      btn.classList.add('activo');

      const cat = btn.getAttribute('data-cat');
      aplicarFiltro(cat);
    });
  });

  // Activar "todos" por defecto
  const btnTodos = document.querySelector('.filtro-btn[data-cat="todos"]');
  if (btnTodos) btnTodos.classList.add('activo');
}

function aplicarFiltro(categoriaId) {
  estado.filtroActual = categoriaId;

  PUNTOS_MAPA.forEach(function (punto) {
    const marcador = estado.marcadores[punto.id];
    if (!marcador) return;

    if (categoriaId === 'todos' || punto.categoriaId === parseInt(categoriaId)) {
      marcador.addTo(map);
    } else {
      marcador.remove();
    }
  });

  actualizarContador();
}

// ── Contador de explorados ── //

function actualizarContador() {
  const el = document.getElementById('contador-texto');
  if (el) {
    el.innerHTML = 'Explorados: <strong>' + estado.visitados.size + '</strong> / 9';
  }
}

// ── Modal de conclusión ── //

function verificarCompletado() {
  if (estado.visitados.size === PUNTOS_MAPA.length) {
    // Pequeño delay para que se vea el último punto antes del modal
    setTimeout(mostrarModal, 800);
  }
}

function mostrarModal() {
  const overlay = document.getElementById('modal-overlay');
  if (overlay) {
    overlay.classList.add('visible');
  }
}

function cerrarModal() {
  const overlay = document.getElementById('modal-overlay');
  if (overlay) {
    overlay.classList.remove('visible');
  }
}

// Cerrar modal al hacer clic en el overlay
document.addEventListener('DOMContentLoaded', function () {
  const overlay = document.getElementById('modal-overlay');
  if (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) {
        cerrarModal();
      }
    });
  }
});
