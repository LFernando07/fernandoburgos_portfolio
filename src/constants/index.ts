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
  carrent,
  jobit,
  tripguide,
  scrum,
  itz,
  icatmor,
  sigecu,
  cbtis
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
    "Responsive Web Design (freeCodeCamp)"
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


const projects: TProject[] = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
]

export { services, technologies, experiences, schools, additional, projects };
