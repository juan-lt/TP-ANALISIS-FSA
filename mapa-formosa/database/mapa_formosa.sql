-- ============================================================
-- mapa_formosa.sql — Script completo para phpMyAdmin / XAMPP
-- Proyecto: Lo que quedó en los nombres
-- Dictadura cívico-militar en Formosa (1976–1983)
-- Importar en phpMyAdmin: Importar → seleccionar este archivo
-- ============================================================

-- Crear y seleccionar la base de datos
CREATE DATABASE IF NOT EXISTS `mapa_formosa`
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE `mapa_formosa`;

-- ============================================================
-- TABLA: categorias
-- ============================================================
DROP TABLE IF EXISTS `puntos`;
DROP TABLE IF EXISTS `categorias`;

CREATE TABLE `categorias` (
  `id`        INT           NOT NULL AUTO_INCREMENT,
  `nombre`    VARCHAR(50)   NOT NULL,
  `color_hex` VARCHAR(7)    NOT NULL COMMENT 'Color hexadecimal para el marcador en el mapa',
  `icono`     VARCHAR(30)   NOT NULL COMMENT 'Identificador del icono para JS',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- TABLA: puntos
-- ============================================================
CREATE TABLE `puntos` (
  `id`                INT            NOT NULL AUTO_INCREMENT,
  `categoria_id`      INT            NOT NULL,
  `ciudad`            VARCHAR(100)   NOT NULL,
  `fecha`             VARCHAR(100)   NOT NULL,
  `titulo_evento`     VARCHAR(200)   NOT NULL,
  `descripcion`       TEXT           NOT NULL,
  `cita_textual`      TEXT           NOT NULL,
  `cita_fuente`       VARCHAR(300)   NOT NULL,
  `fuente_completa`   TEXT           NOT NULL,
  `pregunta_reflexiva` TEXT          NOT NULL,
  `latitud`           DECIMAL(10,7)  NOT NULL COMMENT 'Coordenada GPS — latitud real',
  `longitud`          DECIMAL(10,7)  NOT NULL COMMENT 'Coordenada GPS — longitud real',
  `activo`            TINYINT(1)     NOT NULL DEFAULT 1 COMMENT '1 = visible en el mapa, 0 = oculto',
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_categoria` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- INSERT: categorias
-- ============================================================
INSERT INTO `categorias` (`id`, `nombre`, `color_hex`, `icono`) VALUES
(1, 'Acto patriótico',    '#C0392B', 'acto'),
(2, 'Cambio de nombre',   '#2980B9', 'nombre'),
(3, 'Operativo cultural', '#27AE60', 'operativo'),
(4, 'Homenaje militar',   '#8B6914', 'homenaje'),
(5, 'Represión directa',  '#6C3483', 'represion');

-- ============================================================
-- INSERT: puntos (9 puntos históricos con contenido completo)
-- ============================================================

-- Punto 1: Formosa Capital — Desfiles y Centenario
INSERT INTO `puntos` (
  `categoria_id`, `ciudad`, `fecha`, `titulo_evento`,
  `descripcion`, `cita_textual`, `cita_fuente`,
  `fuente_completa`, `pregunta_reflexiva`, `latitud`, `longitud`
) VALUES (
  1,
  'Formosa Capital',
  '9 de julio de 1976 · Junio–julio 1979',
  'Desfile del 160° Aniversario y Centenario de la Ciudad',
  'En 1976, para el 160° aniversario de la Declaración de Independencia, la dictadura organizó masivos desfiles militares en Formosa capital. Más de setecientos efectivos del Ejército, Gendarmería Nacional, Prefectura Naval, la Unidad Penitenciaria N° 10 y la Policía provincial desfilaron por las calles de la ciudad. Tres años después, en 1979, la dictadura aprovechó el Centenario de la Fundación de la ciudad para una celebración de semanas: festivales artísticos, homenajes a "familias pioneras", desfiles militares, campeonatos deportivos y cobertura de Canal 7 de Buenos Aires. Los militares se presentaban como herederos directos de los conquistadores del siglo XIX. Todo esto ocurría mientras el RIM 29 funcionaba como centro clandestino de detención.',
  'La reproductibilidad técnica brindada por la prensa escrita y los medios audiovisuales fue aprovechada por la intervención militar para la difusión de una conmemoración largamente esperada: el Centenario de la Fundación de la ciudad de Formosa.',
  'Núñez, J.M., Dictadura y transición, 2025, p. 79',
  'Núñez, J.M. «Dictadura y construcción del consenso», en Dictadura y transición, 2025. La Mañana, 9 de julio de 1976, p. 3; 29 de junio de 1979.',
  '¿Por qué una dictadura necesita tantos desfiles y celebraciones? ¿Qué diferencia hay entre un festejo espontáneo y uno organizado desde el Estado para construir consenso? ¿Quiénes no estaban en esa fiesta?',
  -26.1775000,
  -58.1781000
);

-- Punto 2: RIM 29 — Homenaje militar y CCD
INSERT INTO `puntos` (
  `categoria_id`, `ciudad`, `fecha`, `titulo_evento`,
  `descripcion`, `cita_textual`, `cita_fuente`,
  `fuente_completa`, `pregunta_reflexiva`, `latitud`, `longitud`
) VALUES (
  4,
  'RIM 29 — Formosa Capital',
  '5 de octubre de 1975 · 1976–1983',
  'Homenaje militar y Centro Clandestino de Detención',
  'El 5 de octubre de 1975, Montoneros atacó el Regimiento de Infantería de Monte 29. Un año después, la dictadura convirtió ese aniversario en una ceremonia ideológica: el cuartel fue declarado "lugar santo" por Monseñor Bonamin. Pero ese mismo cuartel funcionó como Centro Clandestino de Detención donde formoseños fueron secuestrados, torturados y desaparecidos. El gobernador Colombo — condenado en 2009 a 25 años de prisión — había sido jefe del RIM 29 entre 1965–1966. En Formosa hubo entre 35 y 69 desaparecidos según distintos registros. La señalización del RIM 29 como CCD recién se concretó en agosto de 2015, a pedido de la APDH Formosa.',
  'Dios habló al país, a América y al mundo a través de este regimiento. El 5 de octubre se enfrentaron el odio y el amor, representados por los bastardos que reniegan de su comunidad y por los benditos que siguen a Cristo.',
  'Monseñor Victorio Bonamin, La Mañana, 6 de octubre de 1976, p. 3',
  'Núñez, J.M., Dictadura y transición, 2025, p. 73; Alucín, G.Y., Los derechos humanos en Formosa, 2022; Leguizamón, M., Las caras de la dictadura, 2015.',
  '¿Cómo puede un mismo lugar ser presentado como heroico y funcionar al mismo tiempo como sitio de torturas y desapariciones? ¿Qué dice eso sobre cómo el poder construye su propia historia?',
  -26.1820000,
  -58.1650000
);

-- Punto 3: Barrio Namqom — Conflicto por el Lote 68
INSERT INTO `puntos` (
  `categoria_id`, `ciudad`, `fecha`, `titulo_evento`,
  `descripcion`, `cita_textual`, `cita_fuente`,
  `fuente_completa`, `pregunta_reflexiva`, `latitud`, `longitud`
) VALUES (
  5,
  'Barrio Namqom — Formosa Capital',
  'Marzo de 1976',
  'Conflicto por el Lote 68 y comunidad Qom',
  'En marzo de 1976, días antes del golpe de Estado, el gobierno instaló una antena de TV en el Lote 68, territorio de familias Qom del barrio Namqom. Una familia fue desalojada a la fuerza. Hubo heridos de ambos lados. El Subsecretario de Asuntos Aborígenes Víctor Hugo Musso respondió: "si quieren integración, tienen que moverse al compás de la sociedad y de sus necesidades." Las tres etnias de Formosa — Qom, Pilagá y Wichí — reclamaban simultáneamente atención médica, transporte, trabajo y reconocimiento territorial. La "integración" que el Estado dictatorial proponía significaba abandonar la identidad propia y adoptar el modo de vida dominante. Esta es la única fuente que recupera la perspectiva de un pueblo originario formoseño frente a la dictadura.',
  'Si los ocupantes de lote 68 quieren integración, tienen que moverse al compás de la sociedad y sus necesidades.',
  'Subsecretario de Asuntos Aborígenes Víctor Hugo Musso, La Mañana, 5 de marzo de 1976',
  'Torina, A., La comunidad de Namqom y los gobiernos militares en Formosa, 2014. La Mañana, 5 de marzo de 1976.',
  '¿Qué significa "integración" cuando la define solo quien tiene el poder? ¿Tiene derecho el Estado a decidir cómo debe vivir una comunidad con su propia identidad cultural y territorial?',
  -26.1550000,
  -58.1400000
);

-- Punto 4: Clorinda — Operativo Argentinidad
INSERT INTO `puntos` (
  `categoria_id`, `ciudad`, `fecha`, `titulo_evento`,
  `descripcion`, `cita_textual`, `cita_fuente`,
  `fuente_completa`, `pregunta_reflexiva`, `latitud`, `longitud`
) VALUES (
  3,
  'Clorinda',
  'Mayo de 1978 · Octubre de 1975',
  'Operativo Argentinidad en la frontera',
  'Clorinda, por su ubicación limítrofe con Paraguay y su gran población guaraní-hablante, fue considerada prioritaria para los operativos de "afianzamiento de la argentinidad". En mayo de 1978, el Operativo Argentinidad llegó con artistas como Carlos Di Fulvio, Aldo Monges y Luis Landriscina, combinados con entrega de útiles escolares, tocadiscos, mapas y marchas patrióticas. El bilingüismo guaraní-español era señalado como un "déficit cultural" a corregir. En octubre de 1975, la ruta 11 entre Formosa y Clorinda fue militarizada con tres controles de identificación. El Estado ya trataba la frontera como trinchera ideológica antes del golpe.',
  'La preocupación por la frontera —entendida como una epidermis estatal a proteger— se materializó especialmente en el terreno educativo.',
  'Núñez, J.M., Dictadura y transición, 2025, p. 75',
  'Núñez, J.M., Dictadura y transición, 2025, pp. 74–76; Alucín, G.Y., Los derechos humanos en Formosa, 2022. La Mañana, 16 de mayo de 1978; 10 de octubre de 1975.',
  '¿Hablar guaraní en Clorinda era un problema? ¿Para quién? ¿Qué pasa cuando el Estado le dice a una comunidad que su lengua y su cultura son un obstáculo para ser "argentino"?',
  -25.2833000,
  -57.7167000
);

-- Punto 5: Pirané — Plan de Acción Cívica
INSERT INTO `puntos` (
  `categoria_id`, `ciudad`, `fecha`, `titulo_evento`,
  `descripcion`, `cita_textual`, `cita_fuente`,
  `fuente_completa`, `pregunta_reflexiva`, `latitud`, `longitud`
) VALUES (
  1,
  'Pirané',
  '10 de julio de 1976 · Mayo de 1979',
  'Plan de Acción Cívica con el General Bussi',
  'En los actos del 160° aniversario de la Independencia en Pirané (1976), el comandante del Escuadrón 5 de Gendarmería trazó en su discurso una línea directa entre los "enemigos del pasado" y la "subversión" del presente. En mayo de 1979, la Escuela N° 97 del paraje José Hernández fue el escenario del lanzamiento del Plan de Acción Cívica de Gendarmería. Estuvieron el ministro de Educación Juan Llerena Amadeo y el general Antonio Domingo Bussi — director de Gendarmería y responsable de crímenes de lesa humanidad en Tucumán —, quien presentó a la escuela de frontera como trinchera de defensa nacional.',
  'Nuestras extensas zonas de frontera, más allá de la demarcación geopolítica, representan la trinchera de avanzada de un auténtico estilo de vida nacional.',
  'General Antonio Domingo Bussi, La Mañana, 20 de mayo de 1979, p. 9',
  'Núñez, J.M., Dictadura y transición, 2025, pp. 72–75. La Mañana, 10 de julio de 1976, p. 11; 20 de mayo de 1979, p. 9.',
  '¿Qué significa que un general responsable de crímenes de lesa humanidad dirija la política educativa de una provincia? ¿Qué le enseñaban a los chicos de Pirané y qué no podían aprender?',
  -25.7333000,
  -59.1000000
);

-- Punto 6: El Colorado — Operativo Argentinidad y Rhiner
INSERT INTO `puntos` (
  `categoria_id`, `ciudad`, `fecha`, `titulo_evento`,
  `descripcion`, `cita_textual`, `cita_fuente`,
  `fuente_completa`, `pregunta_reflexiva`, `latitud`, `longitud`
) VALUES (
  3,
  'El Colorado',
  'Mayo de 1978 · 1977–1983',
  'Operativo Argentinidad y el gobernador civil Rhiner',
  'El Colorado fue sede del Operativo Argentinidad de mayo de 1978. Pero tiene también otra conexión directa con la dictadura: Rodolfo Emilio Rhiner, gobernador civil de facto de Formosa entre 1981 y 1983, vivió en El Colorado como escribano y docente de la Escuela Provincial N° 1. Desde la Secretaría de Acción Social del gobernador Colombo (desde 1977), Rhiner organizó el consenso social en toda la provincia. Sus palabras: "Yo tenía seis direcciones que me permitían agarrar todo el territorio provincial." Fue designado gobernador por la Junta Militar. En democracia continuó como diputado provincial (1985–1989) y participó de la Convención Constituyente de 1991.',
  'Yo fui un elemento político muy importante en la provincia, esto tengan en cuenta, porque esto hace que después yo sea gobernador.',
  'Entrevista a Rodolfo Emilio Rhiner, realizada en El Colorado, noviembre 2014. En: Leguizamón, 2016, p. 84',
  'Núñez, J.M., Dictadura y transición, 2025, pp. 75–76; Leguizamón, M., De las botas a los votos, 2016. La Mañana, 16 de mayo de 1978.',
  '¿Qué pasa cuando figuras respetadas de una comunidad colaboran con un régimen que desaparece personas? ¿Es posible separar la "buena gestión" del contexto político en el que ocurre?',
  -26.3082000,
  -59.3687000
);

-- Punto 7: Laguna Blanca — Operativo Argentinidad en comunidades indígenas
INSERT INTO `puntos` (
  `categoria_id`, `ciudad`, `fecha`, `titulo_evento`,
  `descripcion`, `cita_textual`, `cita_fuente`,
  `fuente_completa`, `pregunta_reflexiva`, `latitud`, `longitud`
) VALUES (
  3,
  'Laguna Blanca',
  '1978–1979',
  'Operativo Argentinidad en comunidades indígenas',
  'Laguna Blanca concentra una presencia significativa de comunidades Qom y Pilagá. Para la dictadura, esto representaba un "déficit de argentinidad" doble: la frontera y la identidad cultural indígena. El Operativo Argentinidad llegó con espectáculos, útiles y marchas patrióticas. Un informe gubernamental de 1978–1979 sobre emisiones radiales en Formosa proponía "fortalecer actividades artístico-culturales capaces de enriquecer el Ser Nacional" para superar la "influencia cultural indígena". La "argentinidad" era una imposición, no una construcción compartida.',
  'En sus conclusiones, el informe presentaba observaciones y sugerencias para fortalecer la realización de actividades artístico-culturales capaces de enriquecer el "Ser Nacional".',
  'Núñez, J.M., Dictadura y transición, 2025, p. 78',
  'Núñez, J.M., Dictadura y transición, 2025, pp. 75–78. Estudio sobre emisiones radiales en Formosa, 1978–1979.',
  '¿Qué significa imponer una "identidad nacional" sobre comunidades que ya tienen identidad propia? ¿Puede hablarse de violencia cultural sin represión física directa?',
  -25.1333000,
  -58.0333000
);

-- Punto 8: Interior provincial — Decreto-Ley 3138/77
INSERT INTO `puntos` (
  `categoria_id`, `ciudad`, `fecha`, `titulo_evento`,
  `descripcion`, `cita_textual`, `cita_fuente`,
  `fuente_completa`, `pregunta_reflexiva`, `latitud`, `longitud`
) VALUES (
  2,
  'Interior provincial',
  '1977–1978 · hasta hoy',
  'Decreto-Ley 3138/77 — Cambio de nombres',
  'El Decreto-Ley 3138/77 habilitó el cambio de nombre de decenas de pueblos y parajes rurales de Formosa para homenajear a militares "caídos en la lucha contra la subversión". Una comisión de intelectuales e historiadores formoseños colaboró activamente. Muchos de esos nombres siguen vigentes hoy. El 5 de octubre fue convertido en topónimo: plazas, escuelas y parajes llevan esa fecha. La Ley provincial 1395/2002 estableció el "Día del Soldado". La Ley 1612/2014 creó el "Día del Héroe Formoseño". La dictadura sigue presente en la legislación y la cartografía de Formosa.',
  'La saga de este auténtico "culto a los caídos" se complementó con el cambio de nombre a decenas de pueblos y parajes rurales del interior provincial.',
  'Núñez, J.M., Dictadura y transición, 2025, p. 73',
  'Núñez, J.M., Dictadura y transición, 2025, pp. 73–74; Leguizamón, M., De las botas a los votos, 2016, p. 83. Decreto-Ley 3138/77; Resolución 1014/78.',
  'Cuando un pueblo cambia de nombre, ¿qué se pierde además del topónimo? ¿Qué pasa cuando los mapas cuentan solo la historia del poder? ¿Conocés algún paraje de Formosa cuyo nombre actual viene de la dictadura?',
  -24.8000000,
  -61.0000000
);

-- Punto 9: Formosa Capital — ULICAF reprimida
INSERT INTO `puntos` (
  `categoria_id`, `ciudad`, `fecha`, `titulo_evento`,
  `descripcion`, `cita_textual`, `cita_fuente`,
  `fuente_completa`, `pregunta_reflexiva`, `latitud`, `longitud`
) VALUES (
  5,
  'Formosa Capital',
  '1975–1976',
  'Represión a la ULICAF y organizaciones gremiales',
  'La ULICAF (Unión de Ligas Campesinas Formoseñas), creada en 1971, agrupaba a pequeños y medianos productores que reclamaban créditos, precios justos y tierras. Luego del 5 de octubre de 1975, la represión se aplicó contra sus miembros: detenidos, torturados y en algunos casos desaparecidos. También fueron reprimidos miembros del Centro de Empleados de Comercio, la Asociación Judicial de Formosa, centros de estudiantes y otros gremios. Para el régimen, reclamar tierras y derechos laborales era "accionar subversivo". El diario La Mañana apoyó editorialmente el golpe de 1976, describiendo la llegada de los militares como un "brusco despertar" necesario.',
  'Cuando los productores quieren unirse y organizarse para defender sus derechos, reciben como respuesta la represión e intimidación.',
  'ULICAF, declaración publicada en La Mañana, 5 de octubre de 1975',
  'Alucín, G.Y., Los derechos humanos en Formosa, 2022, pp. 293–297. La Mañana, 5 de octubre de 1975.',
  '¿Por qué pedir tierras y créditos era considerado "subversivo"? ¿Qué dice eso sobre quiénes eran los verdaderos enemigos del régimen? ¿Quién se beneficiaba con que los campesinos no se organizaran?',
  -26.1900000,
  -58.1900000
);

-- ============================================================
-- Vista útil para verificar la importación
-- ============================================================
SELECT
  p.id,
  c.nombre AS categoria,
  p.ciudad,
  p.titulo_evento,
  p.latitud,
  p.longitud,
  p.activo
FROM puntos p
JOIN categorias c ON p.categoria_id = c.id
ORDER BY p.id;
