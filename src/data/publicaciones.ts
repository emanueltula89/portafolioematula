// src/data/publicaciones.ts
interface Publicacion {
  title: string;
  venue: string;
  year: string;
  link?: string;
}

export const publicacionesData: Publicacion[] = [
  {
    title: "Implementación de un Agente de Inteligencia Artificial Experimental enfocado en la Prognosis del Incendio Forestal de Valle Magdalena en el Parque Nacional Lanín, Neuquén, Argentina.",
    venue: "Publicación Independiente",
    year: "2024",
    link: "https://drive.google.com/file/d/17oeAqyQoyzHt2goZPiztjBYrH4XCFLL8/view?usp=sharing",
  },
  {
    title: "Análisis Fuego de Interfase Valparaíso 2024. 'Barrio de Botania y la Defensa contra Incendios'.",
    venue: "Revista Incendios y Riesgos Naturales",
    year: "2024",
    link: "https://revistarirn.org/revista",
  },
  {
    title: "Incendio Forestal en la interfaz Urbano-Forestal de Golondrinas. Chubut. Argentina.",
    venue: "Revista Incendios y Riesgos Naturales",
    year: "2021",
    link: "https://revistarirn.org/wp-content/uploads/2021/09/RIyRN_Septiembre2021_n04hq.pdf",
  },
  {
    title: "Incendio de Interfaz Urbano-Forestal Los radales 2018. San Martín de los Andes.",
    venue: "Curso Internacional en Protección Contra Incendios Forestales. CONAF. Chile",
    year: "2019",
  },
  {
    title: "Programa de recuperación y manejo del Bosque Nativo Chapelco.",
    venue: "Congreso Internacional de Áreas Protegidas. Cuba",
    year: "2019",
  },
  {
    title: "Evaluación del peligro de incendios de interfase en viviendas rurales del Paraje Trompul.",
    venue: "Ecofuego 2. Esquel",
    year: "2016",
  },
  {
    title: "Metodología para la cuantificación de material leñoso en plantaciones forestales.",
    venue: "Jornadas Forestales Patagónicas 2016. Esquel",
    year: "2016",
  },
  {
    title: "Inserción de Estudiantes de la Carrera Técnico Universitario Forestal en una problemática socio-ambiental de San Martín de los Andes, Provincia del Neuquén.",
    venue: "Cuarto Congreso Forestal Argentino y Latinoamericano Iguazú",
    year: "2013",
  },
];
