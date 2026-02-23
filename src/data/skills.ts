// src/data/skills.ts
interface SkillSubItem {
  name: string;
  description?: string;
}

interface SkillCategory {
  category: string;
  items: (string | SkillSubItem)[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "AWS",
    items: [
      { name: "S3", description: "Almacenamiento y gestión de datos con S3 (buckets, políticas, versionamiento)." },
      { name: "Lambda", description: "Implementación de funciones serverless con Lambda para procesamiento escalable." },
      { name: "EC2", description: "Despliegue y administración de instancias virtuales en EC2 (Linux/Windows)." },
      { name: "QuickSight", description: "Análisis y visualización de datos con QuickSight (dashboards interactivos)." },
      { name: "Glue", description: "Procesamiento ETL con Glue (crawlers, jobs y transformaciones de datos)." },
      { name: "VPC", description: "Configuración de redes privadas con VPC (subnets, security groups, NAT Gateway)." },
      { name: "Athena", description: "Consultas SQL en datos de S3 con Athena (optimización de costos)." },
      { name: "RDS, DynamoDB", description: "Gestión de bases de datos relacionales y no relacionales." },
      { name: "Amazon Bedrock", description: "Implementación de modelos de generative AI (LLMs como Claude, Llama 2)." },
    ],
  },
  {
    category: "Python",
    items: [
      "Desarrollo de aplicaciones y scripts eficientes para automatización, análisis de datos y backend.",
      "Dominio de librerías como Pandas, NumPy, Matplotlib y Scikit-learn para ciencia de datos y machine learning.",
      "Experiencia en frameworks web (Django, Flask) y creación de APIs RESTful.",
      "Manipulación de bases de datos (SQL y NoSQL) y optimización de procesos ETL.",
      "Implementación de algoritmos y estructuras de datos para resolver problemas complejos.",
      "Conocimiento de buenas prácticas (PEP 8, principios SOLID) y desarrollo de código limpio y escalable.",
      "Desarrollo avanzado: Pandas, NumPy, Scikit-learn, Django, Flask. Automatización de procesos, integración de APIs, pipelines de datos.",
    ],
  },
  {
    category: "CRM",
    items: [
      "Implementación, configuración y personalización de plataformas CRM como Zoho CRM y HubSpot.",
      "Diseño y automatización de flujos de trabajo (workflows) para mejorar la eficiencia.",
      "Creación y gestión de pipelines de ventas, segmentación de clientes y seguimiento de métricas clave (KPI).",
      "Desarrollo de informes y dashboards personalizados para el análisis del rendimiento comercial.",
      "Integración de herramientas CRM con otros sistemas empresariales.",
      "Capacitación y soporte a equipos comerciales en el uso efectivo de las plataformas CRM.",
      "Gestión de bases de datos de clientes, asegurando la calidad, actualización y segmentación.",
    ],
  },
  {
    category: "n8n",
    items: [
      "Automatización de flujos de trabajo (workflows) con integración de APIs (REST, Webhooks) y servicios empresariales.",
      "Uso avanzado de nodos personalizados y expresiones JavaScript para manipulación y transformación de datos.",
      "Configuración de triggers, condiciones y acciones para optimizar procesos y reducir tareas manuales.",
      "Sincronización de datos entre plataformas (CRM, ERP, bases de datos) y notificaciones en tiempo real.",
      "Monitorización y logging de flujos para garantizar trazabilidad y escalabilidad.",
      "Automatización de flujos de trabajo complejos con n8n y desarrollo backends robustos con Supabase, conectando APIs, bases de datos y lógica de negocio para optimizar operaciones.",
    ],
  },
  {
    category: "WordPress",
    items: [
      "Configuración y gestión de sitios web (instalación, mantenimiento, actualización).",
      "Optimización de rendimiento (caching, CDN, optimización de bases de datos).",
      "Integración de APIs y herramientas externas (CRM, pasarelas de pago).",
      "Implementación de medidas de seguridad (SSL, firewalls, backups).",
      "Creación de contenido dinámico con Advanced Custom Fields (ACF).",
      "SEO técnico y uso de plugins como Yoast SEO.",
    ],
  },
  {
    category: "IA Generativa",
    items: [
      "Uso de modelos como GPT, DALL·E y Stable Diffusion para generación de contenido.",
      "Fine-tuning de modelos pre entrenados para casos de uso específicos.",
      "Integración de APIs (OpenAI, Hugging Face) en aplicaciones y flujos de trabajo.",
      "Automatización de procesos creativos mediante prompt engineering.",
      "Generación de texto, imágenes y diseños personalizados.",
    ],
  },
  {
    category: "Sistemas de Información Geográfica (SIG)",
    items: [
      "Experiencia en el uso de QGIS y ArcGIS para análisis espacial, creación de mapas y gestión de datos geográficos.",
      "Geoprocesamiento y análisis de datos espaciales utilizando bibliotecas de Python como Geopandas y Shapely.",
      "Manipulación de capas vectoriales y raster, geocodificación y cálculo de métricas espaciales.",
      "Automatización de flujos de trabajo SIG mediante scripts en Python.",
      "Creación de visualizaciones y mapas temáticos para presentación de resultados.",
      "Integración de datos espaciales con otras fuentes de información para análisis avanzados.",
    ],
  },
  {
    category: "Digital Marketing",
    items: [
      "Publicidad digital Meta Ads (Facebook, Linkedin, Instagram). Campañas de busqueda con Google Ads, Campañas de Display, Campañas de streaming, e-commerce.",
      "Google Tag Manager. Seguimiento, Rastreo de eventos, Implementación del Pixel de Meta. Triggers. Contenedor (código GTM).",
      "Linkedin Inssight Tag. Etiquetas de Linkedin.",
      "CRM y Herramientas de Automatización de Marketing (HubSpot, Salesforce, Mailchimp).",
      "Herramientas de Chatbots y Live Chat (Intercom, Drift, Zendesk).",
    ],
  },
  {
    category: "Bases de Datos",
    items: [
      "Relacionales: Diseño, gestión y optimización de bases de datos en MySQL y PostgreSQL.",
      "No relacionales: Experiencia en bases de datos documentales como MongoDB y en tiempo real con Firebase.",
      "Big Data: Procesamiento y análisis de grandes volúmenes de datos con Hadoop y Spark.",
      "Optimización de consultas, índices y esquemas para mejorar el rendimiento.",
      "Integración de bases de datos con aplicaciones y sistemas empresariales.",
      "Conocimiento en replicación, sharding y técnicas de escalabilidad.",
    ],
  },
  {
    category: "Meta Business Suite (Meta Business Manager)",
    items: [
      "Gestión integral de cuentas publicitarias, páginas de Facebook e Instagram.",
      "Creación, segmentación y optimización de campañas publicitarias (tráfico, conversiones, engagement).",
      "Análisis de métricas (KPIs) y generación de informes para medir ROI y ajustar estrategias.",
      "Configuración de Facebook Pixel y eventos para seguimiento de conversiones.",
      "Implementación de estrategias de remarketing y audiencias personalizadas.",
      "Manejo de catálogos de productos y publicidad dinámica para e-commerce.",
      "Resolución de incidencias y cumplimiento de políticas de publicidad de Meta.",
    ],
  },
  {
    category: "Habilidades en Ciberseguridad",
    items: [
      "Conceptos clave: Confidencialidad, Integridad, Disponibilidad (CIA), Gestión de riesgos.",
      "Amenazas comunes: Malware, phishing, DDoS, exploits.",
      "Herramientas: Nessus, Wireshark, Nmap, Metasploit, Burp Suite.",
      "Criptografía básica: Cifrado (AES, RSA), firmas digitales.",
      "Monitoreo: SIEM (Splunk, ELK Stack), análisis de logs.",
      "Scripting: Python, Bash, PowerShell para automatización.",
    ],
  },
];
