// src/data/investigacion.ts
interface Investigacion {
  description: string;
  institution?: string;
  year: string;
}

export const investigacionData: Investigacion[] = [
  {
    description: "Proyecto GeoTi: Programa de consultoría privada. Programa de Capacitación en lenguaje de programación Python.",
    institution: "Consultoría Privada",
    year: "2024-Presente",
  },
  {
    description: "Formulación y participación de Proyecto Fortalecimiento Tecnológico de los Sistema de Prevención y Alerta Temprana de los Incendios de Interfaz de la ciudad de San Martín de los Andes.",
    institution: "COFECYT, AUSMA, UNCO, Municipalidad SMA",
    year: "2018",
  },
  {
    description: "Formulación de Proyecto intercátedra “Cálculo del Índice Meteorológico de Peligro de Incendios FWI de origen Canadiense para la localidad de San Martín de los Andes.”",
    institution: "Cátedra de Climatología y Silvicultura 1, AUSMA-UNCo",
    year: "2017",
  },
  {
    description: "Formulación y ejecución de Proyecto: Metodología para cuantificar material leñoso en Plantaciones de Pino Ponderosa.",
    institution: "Comunidad Mapuche Vera, UNCo AUSMA, SAF Ministerio de Agroindustria",
    year: "2016",
  },
  {
    description: "Formulación y ejecución de Trabajo Final “Evaluación del Peligro de Incendios de Interfaz Urbano-Forestal en Viviendas Rurales del Paraje Trompul”.",
    institution: "AUSMA Universidad Nacional del Comahue, Lof Mapuche Curruhuinca",
    year: "2016",
  },
  {
    description: "Formulación y ejecución de Proyecto de Vinculación e Innovación Tecnológica “Jorge A. Sábato”. Fortalecimiento Tecnológico para la Agricultura Familiar.",
    institution: "SAF, Ministerio de Agroindustria y UNCo",
    year: "2015",
  },
  {
    description: "Asistente en Plan Integral de Capacitación: “Relaciones Laborales en la Administración Pública Nacional”.",
    institution: "Administración de Parques Nacionales",
    year: "2015",
  },
  {
    description: "Formulación y ejecución de proyecto de Extensión: “El Bosque nos habla”.",
    institution: "UNCo. Programa de Voluntariado Universitario",
    year: "2015",
  },
  {
    description: "Asistencia a jornadas de capacitación y tareas de campo para el control del biocontrolador Deladenussiricidicola B.",
    institution: "Servicio Nacional de Sanidad y Calidad Agroalimentaria (SENASA)",
    year: "2014",
  },
  {
    description: "Participación de Proyecto de Conservación de la Biodiversidad en Paisajes Productivos Forestales.",
    institution: "GEF TF 090118. Ministerio de Agricultura, Ganadería y Pesca de la Nación",
    year: "2014",
  },
  {
    description: "Integrante de proyecto de extensión universitario: “Barrio Bosque y Universidad”.",
    institution: "UNCo. Programa de Voluntariado Universitario",
    year: "2014",
  },
  {
    description: "Participación en Proyecto PIA 10092 “Herramientas para zonificar la calidad de sitio de pino ponderosa”.",
    year: "2014",
  },
];
