// src/data/experience.ts
interface Responsibility {
  description: string;
}

interface Experience {
  company: string;
  position: string;
  dates: string;
  responsibilities: Responsibility[];
  platform?: string;
}

export const experienceData: Experience[] = [
  {
    company: "NEURAL-SEC GLOBAL",
    position: "Fundador y Consultor Principal de Ciberseguridad",
    dates: "2026 - Presente",
    responsibilities: [
      { description: "Especialista en hacking ético y protección de datos corporativos." },
      { description: "Realización de auditorías de seguridad (Red Teaming, Web3 Smart Contracts, OSINT)." },
      { description: "Implementación de arquitecturas de seguridad Zero Trust y protocolos de cifrado." },
      { description: "Servicios de respuesta a incidentes y análisis forense." },
    ],
    platform: "https://neuralseguridad.onrender.com/"
  },
  {
    company: "Ministerio de Seguridad de Neuquén, Dirección Provincial de Fauna",
    position: "Director de Tecnología e Innovación",
    dates: "Diciembre 2025 - Actualidad",
    responsibilities: [
      { description: "Proyectos de modernización y digitalización avanzada." },
      { description: "Gestión de plataforma de Sistema de Pesca y Caza." },
      { description: "Diseño de proyecto Fauna Lab: Proyecto de monitoreo de animales con IA, incluyendo implementación de red de cámaras y centro de monitoreo." },
      { description: "Implementación de Red de Cámaras y Centro de Monitoreo." },
      { description: "Programación en Python." },
      { description: "Gestión de bases de datos." },
      { description: "Elaboración de dashboard." },
      { description: "Ciberseguridad." },
    ],
    platform: "https://plataforma-fauna-lab.vercel.app/"
  },
  {
    company: "Revista Internacional Incendios y Riesgos Naturales. España.",
    position: "Redactor y revisor de contenidos",
    dates: "2024-2025",
    responsibilities: [],
    platform: "https://revistarirn.org/"
  },
  {
    company: "Ministerio de Turismo de Neuquén",
    position: "Director Técnico en Dirección Provincial de Áreas Protegidas, Fauna y CEAN.",
    dates: "2023-2025",
    responsibilities: [
      { description: "Gestión de Datos Geoespaciales para la toma de decisiones" },
      { description: "Liderazgo técnico, impulsando iniciativas tecnológicas y brindando asesoramiento especializado" },
      { description: "Proyecto Centro de Monitoreo Tecnológico de Fauna Silvestre y Ambiente" },
    ],
    platform: "https://cazaypesca.neuquen.gob.ar/"
  },
  {
    company: "Fundación Tierras Patagónicas",
    position: "Coordinador de Proyectos",
    dates: "2021-2024",
    responsibilities: [
      { description: "Implementación de soluciones SIG para la gestión integral de recursos." },
      { description: "Creación de aplicaciones web para la visualización de datos geoespaciales." },
      { description: "Coordinación de proyectos clave alineados con la misión de la fundación." },
      { description: "Ejecución del Proyecto de Creación de la Brigada Operativa de Incendios Forestales." },
    ],
  },
  {
    company: "Municipalidad de San Martín de los Andes",
    position: "Director General de Conservación Urbana y Ambiente | Asesor Técnico en Protección Civil y Gestión de Riesgos",
    dates: "2018 - 2023",
    responsibilities: [
      { description: "Diseño e implementación de SIG para optimizar la gestión de recursos municipales." },
      { description: "Desarrollo de aplicaciones web interactivas para visualización de datos geoespaciales." },
      { description: "Gestión y seguridad de bases de datos para protección civil y gestión de riesgos." },
      { description: "Proyectos estratégicos como Procoda, Geomovilidad y la Central de Emergencia 911." },
      { description: "Implementación de metodologías para evaluación y mitigación de riesgos ambientales y urbanos." },
    ]
  },
  {
    company: "Universidad Nacional del Comahue. AUSMA.",
    position: "Ayudante de Cátedra, Coordinador de Proyectos, Consejero",
    dates: "2016-2021",
    responsibilities: [
      { description: "Ayudante de Cátedra en Asignatura Climatología (Técnico Universitario Forestal y Espacios Verdes)." },
      { description: "Coordinador de Proyectos de extensión." },
      { description: "Integrante del Consejo de Claustro del AUSMA." },
    ]
  },
  {
    company: "Centro de Investigación y Extensión Forestal Andino Patagónico (CIEFAP)",
    position: "Técnico",
    dates: "2018",
    responsibilities: [
      { description: "Coordinación del proyecto de fortalecimiento tecnológico aplicado al manejo forestal de plantaciones de coníferas." },
      { description: "Implementación de tecnologías y metodologías innovadoras para mejorar las prácticas de manejo." },
    ]
  },
  {
    company: "Ministerio de Agricultura, Ganadería y Pesca de Nación",
    position: "Técnico",
    dates: "2016-2018",
    responsibilities: [
      { description: "Implementación de SIG para la gestión eficiente de recursos agrícolas, forestales y productivos." },
      { description: "Coordinación de proyectos para asegurar su alineación con los objetivos nacionales." },
    ]
  },
  {
    company: "Ministerio de Desarrollo Territorial, Dirección de Bosques",
    position: "Técnico",
    dates: "2015",
    responsibilities: [
      { description: "Realización de inventarios forestales para la evaluación, monitoreo y gestión sostenible." },
      { description: "Implementación de herramientas SIG para la gestión, análisis y visualización de datos forestales." },
    ]
  }
];
