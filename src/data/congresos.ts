// src/data/congresos.ts
interface Congreso {
  type: "Expositor" | "Asistente";
  description: string;
  institution?: string;
  year: string;
}

export const congresosData: Congreso[] = [
  {
    type: "Expositor",
    description: "Gestión de Riesgos Ante Incendios Forestales.",
    institution: "Fundación Red Atlas",
    year: "2020",
  },
  {
    type: "Expositor",
    description: "Taller de Integración Conceptual de la carrera Técnico Forestal.",
    institution: "AUSMA, UNCO",
    year: "2019",
  },
  {
    type: "Expositor",
    description: "Congreso Internacional de Áreas Protegidas. Cuba. Ponencia: Programa de recuperación y manejo del Bosque Nativo Chapelco.",
    year: "2019",
  },
  {
    type: "Asistente",
    description: "Primer Taller de lanzamiento de la Metodología de Evaluación de Oportunidades de Restauración del Paisaje Forestal (ROAM).",
    year: "2019",
  },
  {
    type: "Asistente",
    description: "Seminario Binacional de Incendios Forestales en el Fin del Mundo.",
    institution: "CIEFAP, UNPSJB, Esquel",
    year: "2018",
  },
  {
    type: "Expositor",
    description: "Eco Fuego 2 en las Jornadas Forestales de Patagonia. Ponencia: Evaluación del Riesgo de Incendio de Interfaz urbano-forestal a nivel Predial.",
    institution: "Esquel",
    year: "2016",
  },
  {
    type: "Asistente",
    description: "Tercer Encuentro Nacional de Técnicos “Programa de Evaluación de Peligro de Incendios y Alerta Temprana”.",
    institution: "Servicio Nacional Manejo del Fuego, Jujuy",
    year: "2016",
  },
  {
    type: "Asistente",
    description: "Primer Taller sobre Incendios Forestales en Bosque Nativo y Áreas de Interfaz Urbano-Rural.",
    institution: "CIEFAP",
    year: "2015",
  },
  {
    type: "Asistente",
    description: "Seminario “Introducción a la Bioingeniería en Suelos”.",
    institution: "Asentamiento Universitario San Martín de los Andes, UNCo",
    year: "2014",
  },
  {
    type: "Expositor",
    description: "Cuarto Congreso Forestal Argentino y Latinoamericano Iguazú. Ponencia: Inserción de Estudiantes de la Carrera Técnico Universitario Forestal en una problemática socio-ambiental.",
    year: "2013",
  },
  {
    type: "Asistente",
    description: "Congreso Nacional de Estudiantes de Agronomía y carrera Afines.",
    institution: "Universidad Nacional de Córdoba",
    year: "2012",
  },
];
