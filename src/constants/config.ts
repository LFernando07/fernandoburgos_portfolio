type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    education: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Fernando Burgos — Portafolio Digital",
    fullName: "Luis Fernando Burgos Perea",
    email: "fernando.burgos.perea@outlook.com",
  },
  hero: {
    name: "Fernando Burgos",
    p: ["Ingeniero en Sistemas Computacionales", "Full-Stack Developer + IA Generativa "],
  },
  contact: {
    p: "Envia correo",
    h2: "Contactame.",
    form: {
      name: {
        span: "Nombre Completo",
        placeholder: "¿Cuál es tu nombre?",
      },
      email: { span: "Correo electrónico", placeholder: "Escribe tu correo electrónico" },
      message: {
        span: "Mensaje",
        placeholder: "¿Qué quieres decir?",
      },
    },
  },
  sections: {
    about: {
      p: "Introducción",
      h2: "Descripción General.",
      content: `"Ingeniero en Sistemas Computacionales con experiencia práctica en desarrollo full-stack, automatización de procesos (RPA) e integración de inteligencia artificial generativa. Lidere equipo de desarrollo en entorno productivo, entregando una plataforma web completa con backend Django, frontend React y agente IA integrado bajo presupuesto y metodología Scrum. Cuento con certificaciones activas en UiPath, Blue Prism y Automation Anywhere, además de dominio de APIs de Claude Anthropic y despliegue en Azure. Me adapto rápidamente a nuevas tecnologías, comunicación efectiva con equipos multidisciplinarios y orientación a resultados medibles."`,
    },
    experience: {
      p: "Lo que he hecho hasta ahora",
      h2: "Experiencia laboral."
    },
    education: {
      p: "Camino escolar",
      h2: "Educación - Adicionales",
    },
    works: {
      p: "Mi Trabajo",
      h2: "Proyectos.",
      content: `Los siguientes proyectos reflejan mi trayectoria y experiencia profesional como Ingeniero en Sistemas. Cada proyecto incluye una breve descripción y enlace a su repositorio, evidenciando mi capacidad para desarrollar soluciones reales, trabajar con tecnologías modernas y gestionar proyectos de principio a fin`,
    },
  },
};
