# 3D Portfolio

![demo](.github/README_ASSETS/3d-portfolio.png)


## 🌐 Live Demo

Explora la demostración en vivo del proyecto:
[reactjs18-3d-portfolio](https://fernando-portafolio.vercel.app/)

## 📝 Descripción

**3D Portfolio** es un sitio web de portafolios bien diseñado y totalmente funcional, creado con React.js y Three.js. Es un sitio web totalmente responsivo que funciona bien en todos los dispositivos.

<details><summary><b>Estructura del Proyecto</b></summary>

```bash
reactjs18-3d-portfolio/
├── src/
├   ├── App.tsx
├   ├── globals.css
├   ├── main.tsx
├   ├── vite.env.d.ts
├   ├── components/
├   ├   ├── atoms/
├   ├   ├   └── Header.tsx
├   ├   ├── canvas/
├   ├   ├   ├── Ball.tsx
├   ├   ├   ├── Computers.tsx
├   ├   ├   ├── Earth.tsx
├   ├   ├   ├── Stars.tsx
├   ├   ├   └── index.ts
├   ├   ├── layout/
├   ├   ├   ├── Loader.tsx
├   ├   ├   └── Navbar.tsx
├   ├   ├── sections/
├   ├   ├   ├── About.tsx
├   ├   ├   ├── AditionalInfo.tsx
├   ├   ├   ├── Contact.tsx
├   ├   ├   ├── Education.tsx
├   ├   ├   ├── Experience.tsx
├   ├   ├   ├── Hero.tsx
├   ├   ├   ├── Works.tsx
├   ├   ├   ├── Social.tsx
├   ├   ├   └── Tech.tsx
├   ├   └── index.ts
├   ├── constants/
├   ├   ├── config.ts
├   ├   ├── styles.ts
├   ├   └── index.ts
├   ├── hooks/
├   ├   ├── SectionWrapper.tsx
├   ├   └── index.ts
├   ├── utils/
├   ├   └── motion.ts
├   ├── types/
├   ├   └── index.d.ts
├   └── assets/
├       ├── company/
├       ├   └── [[...]].{svg,png}
├       ├── tech/
├       ├   └── [[...]].{svg,png}
├       ├── [[...]].{svg,png}
├       └── index.ts
├── public/
├   ├── desktop_pc
├   ├   ├── textures/[[...]].png
├   ├   ├── license.txt
├   ├   ├── scene.bin
├   ├   └── scene.gltf
├   ├── planet
├   ├   ├── textures/[[...]].png
├   ├   ├── license.txt
├   ├   ├── scene.bin
├   ├   └── scene.gltf
├   └── logo.png
├── .env
├── .eslintignore
├── .eslintrc.cjs
├── .gitignore
├── .prettierignore
├── .prettierrc.cjs
├── index.html
├── LICENSE
├── README.md
├── package.json
├── postcss.config.cjs
├── tailwind.config.cjs
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.js
```

</details>


## ✨ Tecnologias Usadas

<details><summary><b>3D Portfolio</b> Se construye utilizando las siguientes tecnologías:</summary>

- [TypeScript](https://www.typescriptlang.org/): TypeScript es un superconjunto de JavaScript tipado que se compila a JavaScript simple.
- [Vite](https://vitejs.dev/): Vite es una herramienta de desarrollo que busca proporcionar una experiencia de desarrollo más rápida y eficiente para proyectos web modernos.
- [React.js](https://reactjs.org/): React es una biblioteca de JavaScript front-end gratuita y de código abierto para crear interfaces de usuario o componentes de interfaz de usuario.
- [Three.js](https://threejs.org/): Three.js es una biblioteca de JavaScript multiplataforma y una interfaz de programación de aplicaciones que se utiliza para crear y mostrar gráficos de computadora 3D animados en un navegador web mediante WebGL.
- [Framer Motion](https://www.framer.com/motion/): Framer Motion es una biblioteca de movimiento lista para producción para React.
- [Tailwind CSS](https://tailwindcss.com/): Tailwind CSS es un framework CSS orientado a la utilidad para crear rápidamente interfaces de usuario personalizadas.
- [ESLint](https://eslint.org/): ESLint es una herramienta de análisis de código estático para identificar patrones problemáticos en código JavaScript.
- [Prettier](https://prettier.io/): Prettier es un formateador de código con criterio.
- [Vercel](https://vercel.com/): Vercel es una plataforma en la nube para desarrolladores frontend que proporciona los frameworks, flujos de trabajo e infraestructura necesarios para crear una web más rápida y personalizada.

</details><br/>

[![Tecnologias Usadas](https://skillicons.dev/icons?i=ts,vite,react,threejs,tailwind,vercel)](https://skillicons.dev)

## 🧰 Para comenzar

Para poner en marcha este proyecto en su entorno de desarrollo, siga estas instrucciones paso a paso.

### 📋 Prerequisitos

Para instalar y ejecutar este proyecto localmente, necesitará tener lo siguiente instalado en su máquina local.

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/get-npm)
- [Git](https://git-scm.com/downloads)

### ⚙️ Instalación e inciar en local

**Step 0:**

Note :bangbang: la aplicación usa EmailJS para enviar correos electrónicos desde el lado del cliente, 
por lo tanto, debes crear una cuenta de EmailJS [aquí](https://emailjs.com/) y configurar las variables de entorno

**Step 1:**

Descargue o clone este repositorio utilizando el siguiente enlace:

```bash
git clone https://github.com/ladunjexa/reactjs18-3d-portfolio.git
```

**Step 2:**

Ejecute el siguiente comando en el directorio raíz del repositorio descargado para instalar las dependencias:

```bash
npm install
```

**Step 3:**

Ejecute el siguiente comando para ejecutar el servidor de desarrollo localmente:

```bash
npm run dev
```

**Step 4:**

Abra [http://localhost:5173](http://localhost:5173) con su navegador para ver el resultado.

### 📜 Scripts

Todos los scripts se definen en el archivo `package.json`. A continuación, se muestra una lista completa de todos los scripts:

| Script             | Action                                                      |
| :----------------- | :---------------------------------------------------------- |
| `npm install`      | Instala dependencias                                        |
| `npm run dev`      | Inicia el servidor de desarrollo local en `localhost:5137`  |
| `npm run build`    | Construye tu sitio de producción en `./dist/`               |
| `npm run preview`  | Inicia un servidor web estático local                       |
| `npm run lint`     | Ejecuta ESLint                                              |
| `npm run ts:check` | Realiza la comprobación de tipos                            |

## 🔒 Variables de entorno

Las variables de entorno [^3] se pueden usar para la configuración. Deben configurarse antes de ejecutar la aplicación.

> Las variables de entorno [https://en.wikipedia.org/wiki/Environment_variable] son ​​variables que se configuran en el sistema operativo o shell, y que suelen usarse para configurar programas.

**React.js 18 3D Portfolio** usa [EmailJS](https://www.emailjs.com/) como servicio externo. Debe crear una cuenta y obtener las credenciales necesarias para ejecutar la aplicación.

Cree un archivo `.env` en el directorio raíz del proyecto y agregue las siguientes variables de entorno:

```env
VITE_EMAILJS_SERVICE_ID=<VITE_EMAILJS_SERVICE_ID>
VITE_EMAILJS_TEMPLATE_ID=<VITE_EMAILJS_TEMPLATE_ID>
VITE_EMAIL_JS_ACCESS_TOKEN=<VITE_EMAIL_JS_ACCESS_TOKEN>
```

## 🚀 Despliegue

#### Despliegue a producción (manual)

Puede crear una compilación de producción optimizada con el siguiente comando:

```bash
npm run build
```

#### Despliegue en Vercel (recomendado)

La forma más sencilla de implementar esta aplicación Next.js es usar el
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fladunjexa%2Freactjs18-3d-portfolio)

#### Depliegue en Netlify

También puedes implementar esta aplicación Next.js con [Netlify](https://www.netlify.com/).

[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ladunjexa/reactjs18-3d-portfolio)

Consulta la [documentación de implementación de Next.js](https://nextjs.org/docs/deployment) para obtener más detalles.

## 🔧 Contribuciones

[![Contribuidores](https://contrib.rocks/image?repo=ladunjexa/reactjs18-3d-portfolio)](https://github.com/ladunjexa/reactjs18-3d-portfolio/graphs/contributors)

Las contribuciones son lo que hace de la comunidad de código abierto un lugar increíble para aprender, inspirarse y crear. Cualquier contribución que realices es **muy apreciada**.

Para corregir un error o mejorar un módulo existente, sigue estos pasos:

1. Bifurca el repositorio
2. Crea una nueva rama (`git checkout -b improve-feature`)
3. Realiza los cambios necesarios en los archivos
4. Confirma los cambios (`git commit -am 'Improve feature'`)
5. Sube el repositorio a la rama (`git push origin improve-feature`)
6. Crea una solicitud de extracción 🎉

### 📩 Error/Solicitud de función

Si encuentra un error (un módulo que no ejecuta su función), abra una incidencia
[aquí](https://github.com/ladunjexa/reactjs18-3d-portfolio/issues/new) incluyendo el título y una descripción clara.

Si desea solicitar una nueva función, puede hacerlo abriendo una incidencia
[aquí](https://github.com/ladunjexa/reactjs18-3d-portfolio/issues/new). Incluya ejemplos de consultas y sus resultados.


## 📋 License

**Three.js 3D Portfolio** es un software de código abierto
[licenciado como MIT](https://opensource.org/license/mit/) y de uso gratuito. Consulta
[LICENCIA](https://github.com/ladunjexa/reactjs18-3d-portfolio/blob/main/LICENSE) para obtener más información.
