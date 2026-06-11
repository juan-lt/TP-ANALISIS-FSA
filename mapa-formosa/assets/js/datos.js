// ============================================================
// datos.js — Todos los datos históricos del mapa (9 puntos)
// Proyecto: Lo que quedó en los nombres
// Fuentes: Núñez (2025), Leguizamón (2015, 2016), Torina (2014), Alucín (2022)
// ============================================================

const COLORES_CATEGORIA = {
  1: '#C0392B',  // Acto patriótico
  2: '#2980B9',  // Cambio de nombre
  3: '#27AE60',  // Operativo cultural
  4: '#8B6914',  // Homenaje militar
  5: '#6C3483'   // Represión directa
};

const NOMBRES_CATEGORIA = {
  1: 'Acto patriótico',
  2: 'Cambio de nombre',
  3: 'Operativo cultural',
  4: 'Homenaje militar',
  5: 'Represión directa'
};

const ICONOS_CATEGORIA = {
  1: '🔴',
  2: '🔵',
  3: '🟢',
  4: '🟤',
  5: '🟣'
};

const PUNTOS_MAPA = [
  {
    id: 1,
    categoriaId: 1,
    ciudad: "Formosa Capital",
    fecha: "9 de julio de 1976 · Junio–julio 1979",
    tituloEvento: "Desfile del 160° Aniversario y Centenario de la Ciudad",
    descripcion: `En 1976, para el 160° aniversario de la Declaración de Independencia, la dictadura organizó masivos desfiles militares en Formosa capital. Más de setecientos efectivos del Ejército, Gendarmería Nacional, Prefectura Naval, la Unidad Penitenciaria N° 10 y la Policía provincial desfilaron por las calles de la ciudad. Tres años después, en 1979, la dictadura aprovechó el Centenario de la Fundación de la ciudad para una celebración de semanas: festivales artísticos, homenajes a "familias pioneras", desfiles militares, campeonatos deportivos y cobertura de Canal 7 de Buenos Aires. Los militares se presentaban como herederos directos de los conquistadores del siglo XIX. Todo esto ocurría mientras el RIM 29 funcionaba como centro clandestino de detención.`,
    citaTextual: `La reproductibilidad técnica brindada por la prensa escrita y los medios audiovisuales fue aprovechada por la intervención militar para la difusión de una conmemoración largamente esperada: el Centenario de la Fundación de la ciudad de Formosa.`,
    citaFuente: `Núñez, J.M., Dictadura y transición, 2025, p. 79`,
    fuenteCompleta: `Núñez, J.M. «Dictadura y construcción del consenso», en Dictadura y transición, 2025. La Mañana, 9 de julio de 1976, p. 3; 29 de junio de 1979.`,
    preguntaReflexiva: `¿Por qué una dictadura necesita tantos desfiles y celebraciones? ¿Qué diferencia hay entre un festejo espontáneo y uno organizado desde el Estado para construir consenso? ¿Quiénes no estaban en esa fiesta?`,
    latitud: -26.1775,
    longitud: -58.1781
  },
  {
    id: 2,
    categoriaId: 4,
    ciudad: "RIM 29 — Formosa Capital",
    fecha: "5 de octubre de 1975 · 1976–1983",
    tituloEvento: "Homenaje militar y Centro Clandestino de Detención",
    descripcion: `El 5 de octubre de 1975, Montoneros atacó el Regimiento de Infantería de Monte 29. Un año después, la dictadura convirtió ese aniversario en una ceremonia ideológica: el cuartel fue declarado "lugar santo" por Monseñor Bonamin. Pero ese mismo cuartel funcionó como Centro Clandestino de Detención donde formoseños fueron secuestrados, torturados y desaparecidos. El gobernador Colombo — condenado en 2009 a 25 años de prisión — había sido jefe del RIM 29 entre 1965–1966. En Formosa hubo entre 35 y 69 desaparecidos según distintos registros. La señalización del RIM 29 como CCD recién se concretó en agosto de 2015, a pedido de la APDH Formosa.`,
    citaTextual: `Dios habló al país, a América y al mundo a través de este regimiento. El 5 de octubre se enfrentaron el odio y el amor, representados por los bastardos que reniegan de su comunidad y por los benditos que siguen a Cristo.`,
    citaFuente: `Monseñor Victorio Bonamin, La Mañana, 6 de octubre de 1976, p. 3`,
    fuenteCompleta: `Núñez, J.M., Dictadura y transición, 2025, p. 73; Alucín, G.Y., Los derechos humanos en Formosa, 2022; Leguizamón, M., Las caras de la dictadura, 2015.`,
    preguntaReflexiva: `¿Cómo puede un mismo lugar ser presentado como heroico y funcionar al mismo tiempo como sitio de torturas y desapariciones? ¿Qué dice eso sobre cómo el poder construye su propia historia?`,
    latitud: -26.1820,
    longitud: -58.1650
  },
  {
    id: 3,
    categoriaId: 5,
    ciudad: "Barrio Namqom — Formosa Capital",
    fecha: "Marzo de 1976",
    tituloEvento: "Conflicto por el Lote 68 y comunidad Qom",
    descripcion: `En marzo de 1976, días antes del golpe de Estado, el gobierno instaló una antena de TV en el Lote 68, territorio de familias Qom del barrio Namqom. Una familia fue desalojada a la fuerza. Hubo heridos de ambos lados. El Subsecretario de Asuntos Aborígenes Víctor Hugo Musso respondió: "si quieren integración, tienen que moverse al compás de la sociedad y de sus necesidades." Las tres etnias de Formosa — Qom, Pilagá y Wichí — reclamaban simultáneamente atención médica, transporte, trabajo y reconocimiento territorial. La "integración" que el Estado dictatorial proponía significaba abandonar la identidad propia y adoptar el modo de vida dominante. Esta es la única fuente que recupera la perspectiva de un pueblo originario formoseño frente a la dictadura.`,
    citaTextual: `Si los ocupantes de lote 68 quieren integración, tienen que moverse al compás de la sociedad y sus necesidades.`,
    citaFuente: `Subsecretario de Asuntos Aborígenes Víctor Hugo Musso, La Mañana, 5 de marzo de 1976`,
    fuenteCompleta: `Torina, A., La comunidad de Namqom y los gobiernos militares en Formosa, 2014. La Mañana, 5 de marzo de 1976.`,
    preguntaReflexiva: `¿Qué significa "integración" cuando la define solo quien tiene el poder? ¿Tiene derecho el Estado a decidir cómo debe vivir una comunidad con su propia identidad cultural y territorial?`,
    latitud: -26.1550,
    longitud: -58.1400
  },
  {
    id: 4,
    categoriaId: 3,
    ciudad: "Clorinda",
    fecha: "Mayo de 1978 · Octubre de 1975",
    tituloEvento: "Operativo Argentinidad en la frontera",
    descripcion: `Clorinda, por su ubicación limítrofe con Paraguay y su gran población guaraní-hablante, fue considerada prioritaria para los operativos de "afianzamiento de la argentinidad". En mayo de 1978, el Operativo Argentinidad llegó con artistas como Carlos Di Fulvio, Aldo Monges y Luis Landriscina, combinados con entrega de útiles escolares, tocadiscos, mapas y marchas patrióticas. El bilingüismo guaraní-español era señalado como un "déficit cultural" a corregir. En octubre de 1975, la ruta 11 entre Formosa y Clorinda fue militarizada con tres controles de identificación. El Estado ya trataba la frontera como trinchera ideológica antes del golpe.`,
    citaTextual: `La preocupación por la frontera —entendida como una epidermis estatal a proteger— se materializó especialmente en el terreno educativo.`,
    citaFuente: `Núñez, J.M., Dictadura y transición, 2025, p. 75`,
    fuenteCompleta: `Núñez, J.M., Dictadura y transición, 2025, pp. 74–76; Alucín, G.Y., Los derechos humanos en Formosa, 2022. La Mañana, 16 de mayo de 1978; 10 de octubre de 1975.`,
    preguntaReflexiva: `¿Hablar guaraní en Clorinda era un problema? ¿Para quién? ¿Qué pasa cuando el Estado le dice a una comunidad que su lengua y su cultura son un obstáculo para ser "argentino"?`,
    latitud: -25.2833,
    longitud: -57.7167
  },
  {
    id: 5,
    categoriaId: 1,
    ciudad: "Pirané",
    fecha: "10 de julio de 1976 · Mayo de 1979",
    tituloEvento: "Plan de Acción Cívica con el General Bussi",
    descripcion: `En los actos del 160° aniversario de la Independencia en Pirané (1976), el comandante del Escuadrón 5 de Gendarmería trazó en su discurso una línea directa entre los "enemigos del pasado" y la "subversión" del presente. En mayo de 1979, la Escuela N° 97 del paraje José Hernández fue el escenario del lanzamiento del Plan de Acción Cívica de Gendarmería. Estuvieron el ministro de Educación Juan Llerena Amadeo y el general Antonio Domingo Bussi — director de Gendarmería y responsable de crímenes de lesa humanidad en Tucumán —, quien presentó a la escuela de frontera como trinchera de defensa nacional.`,
    citaTextual: `Nuestras extensas zonas de frontera, más allá de la demarcación geopolítica, representan la trinchera de avanzada de un auténtico estilo de vida nacional.`,
    citaFuente: `General Antonio Domingo Bussi, La Mañana, 20 de mayo de 1979, p. 9`,
    fuenteCompleta: `Núñez, J.M., Dictadura y transición, 2025, pp. 72–75. La Mañana, 10 de julio de 1976, p. 11; 20 de mayo de 1979, p. 9.`,
    preguntaReflexiva: `¿Qué significa que un general responsable de crímenes de lesa humanidad dirija la política educativa de una provincia? ¿Qué le enseñaban a los chicos de Pirané y qué no podían aprender?`,
    latitud: -25.7333,
    longitud: -59.1000
  },
  {
    id: 6,
    categoriaId: 3,
    ciudad: "El Colorado",
    fecha: "Mayo de 1978 · 1977–1983",
    tituloEvento: "Operativo Argentinidad y el gobernador civil Rhiner",
    descripcion: `El Colorado fue sede del Operativo Argentinidad de mayo de 1978. Pero tiene también otra conexión directa con la dictadura: Rodolfo Emilio Rhiner, gobernador civil de facto de Formosa entre 1981 y 1983, vivió en El Colorado como escribano y docente de la Escuela Provincial N° 1. Desde la Secretaría de Acción Social del gobernador Colombo (desde 1977), Rhiner organizó el consenso social en toda la provincia. Sus palabras: "Yo tenía seis direcciones que me permitían agarrar todo el territorio provincial." Fue designado gobernador por la Junta Militar. En democracia continuó como diputado provincial (1985–1989) y participó de la Convención Constituyente de 1991.`,
    citaTextual: `Yo fui un elemento político muy importante en la provincia, esto tengan en cuenta, porque esto hace que después yo sea gobernador.`,
    citaFuente: `Entrevista a Rodolfo Emilio Rhiner, realizada en El Colorado, noviembre 2014. En: Leguizamón, 2016, p. 84`,
    fuenteCompleta: `Núñez, J.M., Dictadura y transición, 2025, pp. 75–76; Leguizamón, M., De las botas a los votos, 2016. La Mañana, 16 de mayo de 1978.`,
    preguntaReflexiva: `¿Qué pasa cuando figuras respetadas de una comunidad colaboran con un régimen que desaparece personas? ¿Es posible separar la "buena gestión" del contexto político en el que ocurre?`,
    latitud: -26.3082,
    longitud: -59.3687
  },
  {
    id: 7,
    categoriaId: 3,
    ciudad: "Laguna Blanca",
    fecha: "1978–1979",
    tituloEvento: "Operativo Argentinidad en comunidades indígenas",
    descripcion: `Laguna Blanca concentra una presencia significativa de comunidades Qom y Pilagá. Para la dictadura, esto representaba un "déficit de argentinidad" doble: la frontera y la identidad cultural indígena. El Operativo Argentinidad llegó con espectáculos, útiles y marchas patrióticas. Un informe gubernamental de 1978–1979 sobre emisiones radiales en Formosa proponía "fortalecer actividades artístico-culturales capaces de enriquecer el Ser Nacional" para superar la "influencia cultural indígena". La "argentinidad" era una imposición, no una construcción compartida.`,
    citaTextual: `En sus conclusiones, el informe presentaba observaciones y sugerencias para fortalecer la realización de actividades artístico-culturales capaces de enriquecer el "Ser Nacional".`,
    citaFuente: `Núñez, J.M., Dictadura y transición, 2025, p. 78`,
    fuenteCompleta: `Núñez, J.M., Dictadura y transición, 2025, pp. 75–78. Estudio sobre emisiones radiales en Formosa, 1978–1979.`,
    preguntaReflexiva: `¿Qué significa imponer una "identidad nacional" sobre comunidades que ya tienen identidad propia? ¿Puede hablarse de violencia cultural sin represión física directa?`,
    latitud: -25.1333,
    longitud: -58.0333
  },
  {
    id: 8,
    categoriaId: 2,
    ciudad: "Interior provincial",
    fecha: "1977–1978 · hasta hoy",
    tituloEvento: "Decreto-Ley 3138/77 — Cambio de nombres",
    descripcion: `El Decreto-Ley 3138/77 habilitó el cambio de nombre de decenas de pueblos y parajes rurales de Formosa para homenajear a militares "caídos en la lucha contra la subversión". Una comisión de intelectuales e historiadores formoseños colaboró activamente. Muchos de esos nombres siguen vigentes hoy. El 5 de octubre fue convertido en topónimo: plazas, escuelas y parajes llevan esa fecha. La Ley provincial 1395/2002 estableció el "Día del Soldado". La Ley 1612/2014 creó el "Día del Héroe Formoseño". La dictadura sigue presente en la legislación y la cartografía de Formosa.`,
    citaTextual: `La saga de este auténtico "culto a los caídos" se complementó con el cambio de nombre a decenas de pueblos y parajes rurales del interior provincial.`,
    citaFuente: `Núñez, J.M., Dictadura y transición, 2025, p. 73`,
    fuenteCompleta: `Núñez, J.M., Dictadura y transición, 2025, pp. 73–74; Leguizamón, M., De las botas a los votos, 2016, p. 83. Decreto-Ley 3138/77; Resolución 1014/78.`,
    preguntaReflexiva: `Cuando un pueblo cambia de nombre, ¿qué se pierde además del topónimo? ¿Qué pasa cuando los mapas cuentan solo la historia del poder? ¿Conocés algún paraje de Formosa cuyo nombre actual viene de la dictadura?`,
    latitud: -24.8000,
    longitud: -61.0000
  },
  {
    id: 9,
    categoriaId: 5,
    ciudad: "Formosa Capital",
    fecha: "1975–1976",
    tituloEvento: "Represión a la ULICAF y organizaciones gremiales",
    descripcion: `La ULICAF (Unión de Ligas Campesinas Formoseñas), creada en 1971, agrupaba a pequeños y medianos productores que reclamaban créditos, precios justos y tierras. Luego del 5 de octubre de 1975, la represión se aplicó contra sus miembros: detenidos, torturados y en algunos casos desaparecidos. También fueron reprimidos miembros del Centro de Empleados de Comercio, la Asociación Judicial de Formosa, centros de estudiantes y otros gremios. Para el régimen, reclamar tierras y derechos laborales era "accionar subversivo". El diario La Mañana apoyó editorialmente el golpe de 1976, describiendo la llegada de los militares como un "brusco despertar" necesario.`,
    citaTextual: `Cuando los productores quieren unirse y organizarse para defender sus derechos, reciben como respuesta la represión e intimidación.`,
    citaFuente: `ULICAF, declaración publicada en La Mañana, 5 de octubre de 1975`,
    fuenteCompleta: `Alucín, G.Y., Los derechos humanos en Formosa, 2022, pp. 293–297. La Mañana, 5 de octubre de 1975.`,
    preguntaReflexiva: `¿Por qué pedir tierras y créditos era considerado "subversivo"? ¿Qué dice eso sobre quiénes eran los verdaderos enemigos del régimen? ¿Quién se beneficiaba con que los campesinos no se organizaran?`,
    latitud: -26.1900,
    longitud: -58.1900
  }
];
