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
  }
];
