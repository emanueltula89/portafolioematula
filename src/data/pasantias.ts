// src/data/pasantias.ts
interface Pasantia {
  description: string;
  institution: string;
  year: string;
}

export const pasantiasData: Pasantia[] = [
  {
    description: "Práctica Internacional en Central Tecnológica de Despacho y Coordinación de medios aéreos. Tecnología aplicada, simulación y coordinación.",
    institution: "CONAF. CHILE",
    year: "2024",
  },
  {
    description: "Práctica Internacional en Central Tecnológica de Emergencia y Seguridad 1-1-2. Dirección de Emergencias. Despacho de llamadas (M112), Sala ECAF (Agentes Forestales), Sala CECOP (Bomberos), Dispositivo de Extinción y Multiemergencia.",
    institution: "1-1-2 Madrid. España",
    year: "2023",
  },
  {
    description: "Pasante en Secretaria de Agricultura Familiar Delegación Sur. Asistencia técnica, formulación y ejecución de proyectos, capacitaciones, talleres y reuniones.",
    institution: "Ministerio de Agroindustria",
    year: "2016",
  },
  {
    description: "Pasantía en actividades de campo del Inventario Forestal de Bosque nativo de la Provincia del Neuquén.",
    institution: "Dirección General de Recursos Forestales, Ministerio de Desarrollo Territorial",
    year: "2015",
  },
  {
    description: "Pasantía en Área Protegida Municipal los Radales: Poda y Apeo de árboles exóticos, operación de chipeadora, relevamiento de vegetación, diseño de Plan de Reforestación.",
    institution: "Municipalidad de San Martín de los Andes",
    year: "2014",
  },
  {
    description: "Pasantía en técnicas de laboratorio de suelos, enmarcadas en el proyecto “Relaciones entre la biota del suelo y la cobertura vegetal en la Reserva Provincial La Payunia”.",
    institution: "GIEFAS, INIBIOMA, CONICET, AUSMA",
    year: "2014",
  },
];
