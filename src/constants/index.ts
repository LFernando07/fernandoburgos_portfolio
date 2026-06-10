import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TEducation,
  TProject,
  TAditional,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  scrum,
  itz,
  // icatmor,
  sigecu,
  cbtis,
  amelie,
  linkedin,
  github,
  telefono,
  whatsapp,
  weather,
  demo,
  gastly,
  posamelie,
  translator,
  beecker,
  checkoutcore,
  angular,
  express,
  nest,
  postgres,
  django,
  azure,
  claude,
  portafolio_movil,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "Acerca De",
  },
  {
    id: "education",
    title: "Educación"
  },
  {
    id: "experience",
    title: "Experiencia",
  },
  {
    id: "work",
    title: "Proyectos"
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Gestión de Base de Datos",
    icon: backend,
  },
  {
    title: "Diseño de Interfaces",
    icon: creator,
  },
  {
    title: "Automatización RPA",
    icon: creator,
  },
  {
    title: "Inteligencia Artificial Generativa",
    icon: backend,
  },
  {
    title: "Cloud & DevOps (Azure)",
    icon: web,
  },
  {
    title: "Arquitectura de Software",
    icon: mobile,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular JS",
    icon: angular,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "NestJS",
    icon: nest,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Scrum",
    icon: scrum,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Azure DevOps",
    icon: azure,
  },
  {
    name: "Claude AI",
    icon: claude,
  },
];

const experiences: TExperience[] = [
  // {
  //   title: "Servicio Social",
  //   companyName: "ICATMOR Anenecuilco – Área de Recursos Materiales y Financieros",
  //   icon: icatmor,
  //   iconBg: "#383E56",
  //   date: "Enero – Junio 2020",
  //   points: [
  //     "Elaboración de más de 200 pólizas contables para cuentas institucionales usando Excel avanzado.",
  //     "Gestión de inventarios con un 100% de precisión en registros.",
  //     "Generación de balances mensuales para programas educativos.",
  //     "Optimización de procesos de auditoría logrando reducir tiempos en un 30%."
  //   ],
  // },
  {
    title: "Sistema de Gestión de Cursos",
    companyName: "Instituto Tecnológico de Zacatepec",
    icon: sigecu,
    iconBg: "#383E56",
    date: "Enero - Junio 2024",
    points: [
      "Apliacación académica para administración de cursos con autenticación segura y autorizada por roles.",
      "Incluye operaciones CRUD, integración de CV y Ficha Tecnica del docente.",
      "Optimización de procesos administrativos con reducción del 40% en tiempos de gestión.",
    ],
  },
  // {
  //   title: "Servicio Social - Área de Apoyo al Tecnológico",
  //   companyName: "Instituto Tecnológico de Zacatepec",
  //   icon: itz,
  //   iconBg: "#383E56",
  //   date: "Enero – Junio 2025",
  //   points: [
  //     "Administración de plataformas tecnológicas educativas utilizando Microsoft Teams.",
  //     "Implementación de una estructura organizacional para asesorías académicas.",
  //     "Conversión de documentos físicos a formato digital aplicando criterios de clasificación temática."
  //   ],
  // },
  {
    title: "Aplicación de Escritorio POS",
    companyName: " Heladería Amalie Miacatlán",
    icon: amelie,
    iconBg: "#383E56",
    date: "Agosto - Noviembre 2025",
    points: [
      "Desarrollé de manera colaborativa una aplicación de escritorio en Electrón con frontend y backend desacoplados.",
      "Implementé el módulo de autenticación y autorización basada en roles diferenciando acceso entre adiministrador y empleados.",
      "Desarrollé la gestión completa de usuarios, productos y categorías, permitiendo un control administrativo eficiente.",
      "Construí la interfaz del punto de venta (POS) con capacidad de escalar hacia la generación de tickets.",
      "Optimicé la creación de reportes semanales en PDF, utilizando plantillas automatizadas para su descarga o envío por correo.",
    ],
  },
  {
    title: "Automatización RPA — Udemy + Google Drive",
    companyName: "New York Beecker Consulting S.A. DE C.V. ",
    icon: beecker,
    iconBg: "#E3E6F1",
    date: "Enero - Junio 2026",
    points: [
      "Diseñe e implemente robot RPA con arquitectura doble REFramework que automatizo al 100% la descarga de facturas desde Udemy y su almacenamiento estructurado en Google Drive.",
      "Desarrolle 4 módulos independientes reduciendo tiempo estimado de mantenimiento futuro en 60% respecto a arquitectura monolítica.",
      "Implemente autenticación 2FA automática vía extracción de OTP desde Gmail, eliminando 100% la intervención manual en el proceso de Login.",
      "Identifiqué y resolví error critico de rutas en Edge que bloqueaba el flujo completo; validado sobre facturas reales de cuenta corporativa.",
    ],
  },
  {
    title: "Proyecto Genesis — Chatbot con IA + Plataforma Web",
    companyName: "New York Beecker Consulting S.A. DE C.V. ",
    icon: beecker,
    iconBg: "#D1D4E1",
    date: "Enero - Junio 2026",
    points: [
      "Lideré equipo Scrum (3 devs), distribuyendo tareas y logrando 100% de cumplimiento en sprints.",
      "Diseñé e implementé backend en Django + ORM, integrando asistente con Claude API + Batch, reduciendo consumo de tokens ~40%.",
      "Construí el frontend con React.js: módulos de autenticación, dashboard administrativo, gestión de usuarios/roles, vista de chatbot y manejo de errores.",
      "Administré servidor UAT y productivo en Azure, asegurando despliegues estables y disponibilidad continua.",
      "Gestione base de datos PostgreSQL en entorno local y productivo, incluyendo migraciones y consultas ORM optimizadas.",
      "Desarrollé prompts maestros y pipeline PDD, procesando +150 proyectos y generando JSON estructurados para poblar la Base de Datos.",
      "Clasifique +150 sistemas por proyecto apoyando la priorización del backlog y contemplando sus change requests.",
      "Configure repositorio Git con estrategia de branching por modulo.",
    ],
  },
];

const schools: TEducation[] = [
  {
    title: "Instituto Tecnológico de Zacatepec – Morelos",
    icon: itz,
    iconBg: "#383E56",
    degree: "Ingeniería en Sistemas Computacionales, Especialidad en Desarrollo de Aplicaciones Multiplataforma",
    dateRange: "Agosto 2021 - Junio 2026",
    subject: "Asignaturas clave:",
    achievements: [
      "Ingeniería de Software", "Bases de Datos", "Desarrollo Web", "Aplicaciones Móviles", "Desarrollo Multiplataforma con .NET"
    ],
  },
  {
    title: "Centro de Bachillerato Tecnológico Industrial y de Servicios No. 194 – Ayala, Morelos",
    icon: cbtis,
    iconBg: "#383E56",
    degree: "Carrera Técnica en Ofimática",
    dateRange: "2018 – 2021",
    subject: "Asignaturas clave:",
    achievements: [
      "Microsoft Office", "Administración de Recursos Humanos", "Técnicas de Archivo"
    ],
  }
]

const additional: TAditional = {
  name: "Información Adicional",
  languages: ["Español (Nativo)", "Inglés (B1)"],
  certifications: [
    {
      name: "UiPath Automation Developer Professional",
      certificateLink: "https://credentials.uipath.com/a8f5624e-f809-4598-9fdd-cc85df60c3b4",
    },
    {
      name: "Blue Prism: Foundations (SS&C)",
      certificateLink: "",
    },
    {
      name: "Automation Anywhere — Essentials Professional",
      certificateLink: "https://certificates.automationanywhere.com/5776c53a-a41a-4142-af5f-b7bd9b345676",
    },
    {
      name: "Scrum Fundamentals Certified",
      certificateLink: "https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-LuisFernandoBurgosPerea-1103341.pdf",
    },
    {
      name: "Introduction to MCP",
      certificateLink: "https://verify.skilljar.com/c/a95635hei2gg",
    },
    {
      name: "MCP: Advanced Topics",
      certificateLink: "https://verify.skilljar.com/c/6c6eeqcywyzb",
    },
    {
      name: "Claude Code in Action",
      certificateLink: "https://verify.skilljar.com/c/9y7x9emrsrpf",
    },
    {
      name: "Educathon de IA",
      certificateLink: "",
    }
  ],
  softSkills: [
    "Proactividad",
    "Trabajo en equipo",
    "Comunicación efectiva",
    "Pensamiento analítico",
    "Liderazgo",
    "Adaptabilidad",
    "Resolución de problemas"
  ],
  availability: "Reubicación y flexibilidad horaria"
};


const socials = [
  {
    name: "linkedIn",
    icon: linkedin,
    bgText: "#1d1836",
    ref: "https://www.linkedin.com/in/luis-fernando-burgos-perea-406196382/",
  },
  {
    name: "Github",
    icon: github,
    bgText: "#44444E",
    ref: "https://github.com/LFernando07/",
  },
  {
    name: "Telefono",
    icon: telefono,
    bgText: "#0D1164",
    ref: "tel:+527352330176"
  },
  {
    name: "Whatsapp",
    icon: whatsapp,
    bgText: "#8FA31E",
    ref: "https://api.whatsapp.com/send?phone=7352330176"
  }

]


const projects: TProject[] = [
  {
    name: "Weather Wrapper App",
    description:
      "Aplicación web que permite consultar el clima de cualquier lugar utilizando la API de Visual Crossing. El servicio muestra  información de temperatura, sensación térmica, ubicación, viento, humedad, condición y visibilidad.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux-ToolKit",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "Redis",
        color: "orange-text-gradient",
      },
    ],
    image: weather,
    sourceCodeLink: "https://github.com/LFernando07/Weather_Wrapper_App",
    sourceDemoLink: "https://weather-wrapper-app.vercel.app/",
    sourceDemoIcon: demo,
    demo: true,
  },
  {
    name: "Translate-Google-Clone-AI",
    description: "Aplicación web que permite traducir texto entre varios idiomas utilizando la API de OpenAI. La aplicación ofrece una interfaz sencilla y fácil de usar, similar a la de Google Translate con las funciones de copiar texto y oir la traducción.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "openAI",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "orange-text-gradient",
      },
    ],
    image: translator,
    sourceCodeLink: "https://github.com/LFernando07/translate-google-clone-ai",
    sourceDemoLink: "https://translate-google-clone-ai.vercel.app/",
    sourceDemoIcon: demo,
    demo: true,
  },
  {
    name: "Gastly App",
    description:
      "Aplicación web para el control y manejo de gastos personales, permitiendo registrar, filtrar, visualizar los gastos apartir de una tabla y de graficas (barra, metricas y de pastel) de forma sencilla y rápida.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "prisma",
        color: "orange-text-gradient",
      },
    ],
    image: gastly,
    sourceCodeLink: "https://github.com/LFernando07/Expense-Tracker",
  },
  {
    name: "POS Heladería Amelie",
    description: "Sistema Punto de Venta de escritorio para la gestión integral de una heladería, permitiendo administrar productos, categorías, sabores, ventas y usuarios de manera rápida y eficiente.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sqlite",
        color: "green-text-gradient",
      },
      {
        name: "electron",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
    ],
    image: posamelie,
    sourceCodeLink: "https://github.com/LFernando07/pos-heladeria-amalie",
  },
  {
    name: "CheckoutCore Microservices",
    description:
      "Sistema backend basado en arquitectura de microservicios orientada a eventos para gestionar el flujo completo de una compra: creación de órdenes, procesamiento de pagos y notificación al usuario, de forma desacoplada, escalable y resiliente.",
    tags: [
      {
        name: "NestJS",
        color: "blue-text-gradient",
      },
      {
        name: "RabbitMQ",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
      {
        name: "Docker",
        color: "orange-text-gradient",
      },
    ],
    image: checkoutcore,
    sourceCodeLink: "https://github.com/LFernando07/checkoutcore-microservices",
  },
  {
    name: "Portafolio Movil",
    description:
      "Aplicación móvil nativa multiplataforma para la visualización de mi perfil profesional, trayectoria y certificaciones, diseñada detalladamente con una interfaz moderna, animaciones interactivas de alto rendimiento y conectividad en tiempo real.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Expo",
        color: "green-text-gradient",
      },
      {
        name: "EmailJs",
        color: "pink-text-gradient",
      },
      {
        name: "Typescript",
        color: "orange-text-gradient",
      },
    ],
    image: portafolio_movil,
    sourceCodeLink: "https://github.com/LFernando07/fernandoburgos-portfolio-movil",
  },
]

export { services, technologies, experiences, schools, additional, projects, socials };
