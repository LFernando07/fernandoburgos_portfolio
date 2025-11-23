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
  icatmor,
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
  translator
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
    title: "Gestión de Base de Datos",
    icon: backend,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Diseño de Interfaces",
    icon: creator,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "scrum",
    icon: scrum,
  }
];

const experiences: TExperience[] = [
  {
    title: "Servicio Social",
    companyName: "ICATMOR Anenecuilco – Área de Recursos Materiales y Financieros",
    icon: icatmor,
    iconBg: "#383E56",
    date: "Enero – Junio 2020",
    points: [
      "Elaboración de más de 200 pólizas contables para cuentas institucionales usando Excel avanzado.",
      "Gestión de inventarios con un 100% de precisión en registros.",
      "Generación de balances mensuales para programas educativos.",
      "Optimización de procesos de auditoría logrando reducir tiempos en un 30%."
    ],
  },
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
  {
    title: "Servicio Social - Área de Apoyo al Tecnológico",
    companyName: "Instituto Tecnológico de Zacatepec",
    icon: itz,
    iconBg: "#383E56",
    date: "Enero – Junio 2025",
    points: [
      "Administración de plataformas tecnológicas educativas utilizando Microsoft Teams.",
      "Implementación de una estructura organizacional para asesorías académicas.",
      "Conversión de documentos físicos a formato digital aplicando criterios de clasificación temática."
    ],
  },
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
];

const schools: TEducation[] = [
  {
    title: "Instituto Tecnológico de Zacatepec – Morelos",
    icon: itz,
    iconBg: "#383E56",
    degree: "Ingeniería en Sistemas Computacionales, Especialidad en Desarrollo de Aplicaciones Multiplataforma",
    dateRange: "Agosto 2021 - Presente",
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
  languages: ["Inglés (B1)"],
  certifications: [
    "Scrum Fundamentals Certified",
    "Responsive Web Design (freeCodeCamp)",
    "Educathon de IA | Jornada Universitaria (IBM)",
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
  }
]

export { services, technologies, experiences, schools, additional, projects, socials };
