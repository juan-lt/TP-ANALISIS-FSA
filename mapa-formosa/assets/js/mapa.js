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

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> © <a href="https://carto.com/">CARTO</a>',
    maxZoom: 19
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

// Crea un marcador DivIcon con pulso animado
function crearMarcador(punto) {
  const color = COLORES_CATEGORIA[punto.categoriaId];

  const icono = L.divIcon({
    className: '',
    html: '<div class="marker-pulse" id="marker-div-' + punto.id + '" style="' +
      'width: 18px;' +
      'height: 18px;' +
      'border-radius: 50%;' +
      'background: ' + color + ';' +
      'border: 2px solid rgba(255,255,255,0.5);' +
      'cursor: pointer;' +
    '"></div>',
    iconSize: [18, 18],
    iconAnchor: [9, 9]
  });

  const marcador = L.marker([punto.latitud, punto.longitud], { icon: icono });

  marcador.bindTooltip(
    '<strong>' + punto.ciudad + '</strong><br><small>' + punto.fecha + '</small>',
    { direction: 'top', offset: [0, -12] }
  );

  marcador.on('click', function () {
    abrirPanel(punto.id);
  });

  return marcador;
}

// ── Efecto máquina de escribir ── //
function typewriterEffect(element, text, speed) {
  speed = speed || 40;
  element.textContent = '';
  var i = 0;
  var timer = setInterval(function () {
    if (i < text.length) {
      element.textContent += text[i];
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

// ── Panel lateral ── //

// Abre el panel con los datos del punto seleccionado
function abrirPanel(id) {
  const punto = PUNTOS_MAPA.find(function (p) { return p.id === id; });
  if (!punto) return;

  estado.puntoActivo = id;

  const color = COLORES_CATEGORIA[punto.categoriaId];
  const nombreCat = NOMBRES_CATEGORIA[punto.categoriaId];

  // Construir HTML estilo expediente/dossier clasificado
  const idPadded = String(punto.id).padStart(3, '0');
  const html = `
    <div class="expediente-header">
      <div class="expediente-top-row">
        <span class="expediente-label">EXPEDIENTE</span>
        <span class="expediente-id">CASO-${idPadded}</span>
      </div>
      <div class="expediente-clasificacion-row">
        <span class="categoria-chip" style="background-color: ${color};">${nombreCat}</span>
        <span class="expediente-desclasificado">DESCLASIFICADO</span>
      </div>
    </div>

    <div class="expediente-ficha">
      <div class="ficha-fila">
        <span class="ficha-key">LOCALIZACIÓN</span>
        <span class="ficha-sep">:</span>
        <span class="ficha-val">${punto.ciudad}</span>
      </div>
      <div class="ficha-fila">
        <span class="ficha-key">PERÍODO</span>
        <span class="ficha-sep">:</span>
        <span class="ficha-val">${punto.fecha}</span>
      </div>
      <div class="ficha-fila ficha-fila--full">
        <span class="ficha-key">HECHO</span>
        <span class="ficha-sep">:</span>
        <span class="ficha-val ficha-val--evento" id="panel-titulo-evento"></span>
      </div>
    </div>

    <div class="expediente-divider"><span>DESCRIPCIÓN DEL CASO</span></div>

    <p class="panel-descripcion">${punto.descripcion}</p>

    <div class="panel-cita">
      <div class="cita-etiqueta">[ REGISTRO TEXTUAL ]</div>
      <blockquote>«${punto.citaTextual}»</blockquote>
      <cite>— ${punto.citaFuente}</cite>
    </div>

    <div class="panel-fuente">
      <strong>FUENTES DOCUMENTALES</strong>
      ${punto.fuenteCompleta}
    </div>

    <div class="panel-pregunta">
      <span class="panel-pregunta-label">// ANÁLISIS CRÍTICO</span>
      <p>${punto.preguntaReflexiva}</p>
    </div>

    <button class="btn-cerrar-panel" onclick="cerrarPanel()">[ CERRAR EXPEDIENTE ]</button>
  `;

  const contenido = document.getElementById('panel-contenido');
  const vacio = document.getElementById('panel-vacio');
  const panel = document.getElementById('panel-lateral');

  contenido.innerHTML = html;
  contenido.classList.add('visible');
  vacio.style.display = 'none';

  // Efecto máquina de escribir en el título del evento
  typewriterEffect(document.getElementById('panel-titulo-evento'), punto.tituloEvento);

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

  // Con DivIcon se accede al div interno para aplicar la clase CSS
  const divEl = document.getElementById('marker-div-' + id);
  if (divEl) {
    divEl.classList.remove('marker-pulse');
    divEl.classList.add('marker-visitado');
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
