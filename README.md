# Sistema de gestión académica

Aplicación en desarrollo para apoyar la gestión académica del colegio de mi familia.

## Sobre el proyecto

La idea nació de una necesidad personal: quería crear un sistema que pudiera ayudar a organizar la información y los procesos académicos del colegio de mi familia. Al mismo tiempo, vi la oportunidad de aprender y practicar las tecnologías que estoy estudiando.

Este proyecto es también parte de mi proceso de formación. Todavía está en construcción y no cuenta con todas las características que me gustaría implementar. Iré agregando y mejorando funcionalidades a medida que avance y adquiera nuevos conocimientos. ¡Las sugerencias y comentarios respetuosos son bienvenidos!

## Repositorios

El proyecto está dividido en dos repositorios:

- Frontend: este repositorio, desarrollado con React y Vite.
- Backend: [evangelistax/school-backend](https://github.com/evangelistax/school-backend), desarrollado con Node.js y Express.

## Tecnologías

### Frontend

- React
- Vite
- React Router
- Zustand
- Tailwind CSS

### Backend

- Node.js
- Express
- MySQL (`mysql2`)
- Zod

## Requisitos

- Node.js y npm instalados.
- Git, si quieres clonar los repositorios.

## Cómo ejecutar el proyecto

El frontend y el backend se ejecutan por separado. Abre una terminal para cada uno.

### 1. Clonar los repositorios

```bash
git clone https://github.com/evangelistax/school.git
git clone https://github.com/evangelistax/school-backend.git
```

### 2. Iniciar el frontend

```bash
cd school
npm install
npm run dev
```

Vite mostrará en la terminal la dirección local donde puedes abrir la aplicación.

### 3. Iniciar el backend

En otra terminal, desde la carpeta del backend:

```bash
cd school-backend
npm install
npm run dev
```

El backend y la base de datos pueden necesitar configuración adicional para funcionar juntos. Revisa el código y la configuración del repositorio del backend para conocer los detalles disponibles.

## Scripts del frontend

- `npm run dev`: inicia el servidor de desarrollo.
- `npm run build`: genera la versión de producción.
- `npm run preview`: permite previsualizar la compilación.
- `npm run lint`: ejecuta ESLint.

## Estado

El sistema está en desarrollo y algunas partes pueden estar incompletas o cambiar con el tiempo. Este README también podrá actualizarse conforme el proyecto crezca.

## Contribuciones y comentarios

Como estoy aprendiendo, agradezco sugerencias, ideas y reportes de problemas que me ayuden a mejorar el proyecto. Puedes abrir un issue en el repositorio correspondiente.

## Nota personal

Este proyecto representa un esfuerzo personal, un desafío de aprendizaje y una forma de poner en práctica lo que estoy estudiando. Me ayuda a mejorar profesionalmente mientras construyo algo útil para mi familia.
