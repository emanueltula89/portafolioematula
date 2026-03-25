// src/data/projects.ts
interface Project {
  name: string;
  description: string;
  link?: string;
  github?: string;
  buttonText?: string;
}

export const projectsData: Project[] = [
  {
    name: "Fauna Connect Web 3",
    description: "Implementación pionera de tecnología Blockchain sobre la red Ethereum para la tokenización de incentivos de conservación ambiental. Diseño de Smart Contracts para recompensar acciones de preservación de fauna silvestre.",
    link: "https://faunaconnect.onrender.com/",
    buttonText: "Visitar Proyecto"
  },
  {
    name: "Monitor Inteligente de Información para SMA",
    description: "Plataforma avanzada de monitoreo en tiempo real impulsada por Inteligencia Artificial para la gestión y análisis de datos en San Martín de los Andes. Optimización de procesos mediante el procesamiento inteligente de información en vivo.",
    link: "https://monitor-ia-sma.onrender.com/",
    buttonText: "Visitar Proyecto"
  },
  {
    name: "Plataforma Monitoreo ANP Costero Villa Traful",
    description: "Plataforma Reserva Urbana Costera Villa Traful. Proyecto de digitalización y monitoreo para la gestión ambiental y el análisis de información en tiempo real.",
    link: "https://plataforma-traful-area-costero.onrender.com/",
    buttonText: "Visitar Proyecto"
  },
  {
    name: "Monitoreo Geospacial Inteligente de la Provincia de Neuquén",
    description: "Plataforma avanzada de monitoreo geoespacial inteligente para la Provincia de Neuquén, integrando datos en tiempo real para la gestión territorial y ambiental.",
    link: "https://geospacialnqn-f.onrender.com/",
    buttonText: "Visitar Proyecto"
  }
];
