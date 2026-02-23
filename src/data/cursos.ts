// src/data/cursos.ts
interface Curso {
  description: string;
  institution?: string;
  year?: string;
}

export const cursosData: Curso[] = [
  {
    description: "Diplomatura en Gestión Integral del Riesgo de Desastres y Adaptación al Cambio Climático para el Desarrollo.",
    institution: "Universidad Catolica de Cordoba",
    year: "2020",
  },
  {
    description: "Curso Internacional ¨ Gestión en Protección contra Incendios Forestales¨.",
    institution: "Corporación Nacional Forestal. CONAF. Agencia de Cooperación Internacional AGCIDD y JICA. Santiago de Chile",
    year: "2019",
  },
  {
    description: "Curso de estadística aplicado al Manejo Forestal.",
    institution: "Cátedra de Dasometría. AUSMA. UNCO",
    year: "2019",
  },
  {
    description: "Curso Sistema de Información Geográfico y uso de Software Qgis aplicados a la Gestión de riesgos de Incendios de Interfaz.",
    institution: "AUSMA. UNCO. Municipalidad de S.M de los Andes",
    year: "2018",
  },
  {
    description: "Curso Evaluación del Riesgo de Caída de árboles en áreas recreativas.",
    institution: "AUSMA-Universidad Nacional del Comahue",
    year: "2016",
  },
  {
    description: "Curso Introducción y aspectos básicos de QGIS aplicados al manejo de recursos forestales.",
    institution: "Ministerio de Agroindustria de Nación, Dirección General de recursos forestales de Neuquén, AUSMA-UNCO",
    year: "2016",
  },
  {
    description: "Curso Planificación de Inventarios Forestales, uso y Herramientas aplicadas.",
    institution: "Asentamiento Universitario San Martín de los Andes. UNCo",
    year: "2016",
  },
  {
    description: "Curso Certificación CERFOAR-PEDC de Gestión Forestal Sostenible para MiPYMEs Forestales.",
    institution: "CERFOAR. Ministerio de Agricultura, Ganadería y Pesca",
    year: "2015",
  },
  {
    description: "Curso Certificación CERFOAR-PEFC de Cadena de Custodia para MIPYMes Foresto-Industriales.",
    institution: "CERFOAR. Ministerio de Agricultura, Ganadería y Pesca de Nación",
    year: "2015",
  },
  {
    description: "Curso Comercialización I. Programa: Jóvenes emprendedores rurales. Duración: 18 horas.",
    institution: "Ministerio de Agricultura, Ganadería y Pesca de Nación",
    year: "2015",
  },
  {
    description: "Curso Inventario Forestal. Aplicación de herramientas informáticas de Estadísticas y SIG.",
    institution: "Asentamiento Universitario San Martín de los Andes. UNCo",
    year: "2015",
  },
  {
    description: "Curso especialización en Sistemas Silvopastoriles. INTA. Duración: 54 hs.",
    institution: "Asentamiento Universitario San Martín de los andes. UNCo",
    year: "2014",
  },
];
