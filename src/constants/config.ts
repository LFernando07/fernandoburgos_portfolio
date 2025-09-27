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
    p: ["Ingeniero en Sistemas Computacionales", "Desarrollo Multiplataforma"],
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
      content: `"Estudiante de Ingeniería en Sistemas Computacionales con formación
       en Desarrollo de Aplicaciones Multiplataforma. Manejo de Java, Python, C#, 
       JavaScript y experiencia en desarrollo de aplicaciones web utilizando Node.js, 
       ExpressJS y React. 
       Manejo de bases de datos relacionales y no relacionales (MySQL, PostgreSQL, MongoDB) 
       y certificación en metodologías ágiles (Scrum). Me apasiona crear soluciones web modernas, 
       rápidas y escalables."`,
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
      h2: "Projectos.",
      content: `Los siguientes proyectos muestran mis habilidades y experiencia a través de ejemplos académicos y reales de mi trabajo. Cada proyecto se describe brevemente con enlaces a repositorios de código. Esto refleja mi capacidad para resolver problemas complejos, trabajar con diferentes tecnologías y gestionar proyectos eficazmente.`,
    },
  },
};
