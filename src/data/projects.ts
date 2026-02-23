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
  }
];
