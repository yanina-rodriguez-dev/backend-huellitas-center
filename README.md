# Backend Huellitas Center - Veterinaria

![Huellitas Center Logo]()

## Descripción
Este es el backend de la aplicación web de Huellitas Center, una veterinaria virtual que ofrece servicios de atención médica para mascotas. El backend está construido con React, Node.js, Express y MongoDB.

## Características
- API RESTful para gestionar la información de la veterinaria y los turnos de los pacientes.
- Conexión a una base de datos MongoDB para almacenar y recuperar datos.
- Implementación de autenticación y autorización utilizando JSON Web Tokens (JWT).
- Integración con el frontend de la veterinaria para proporcionar una experiencia completa al usuario.

## Tecnologías utilizadas
- Node.js
- Express.js
- MongoDB
- JSON Web Tokens (JWT)
- React

## Metodología Ágil - Scrum
Este proyecto se ha desarrollado siguiendo la metodología ágil de Scrum, una forma de trabajo colaborativa y flexible que permite abordar proyectos de desarrollo de software de manera iterativa e incremental.

### Roles en el equipo Scrum

- **Scrum Master**: [Rodriguez Yanina](https://github.com/yanina-rodriguez-dev) - Encargado de garantizar que el equipo Scrum siga la metodología y eliminar obstáculos que puedan afectar la productividad.
- **Equipo de Desarrollo**: 
> [Maximiliano Vega](https://github.com/maxivega0)  <br>
> [Ana Santillan](https://github.com/Ana-Santillan)<br>
>[Azul D Paul](https://github.com/AzulDP) <br>
>[Federico Rueda](https://github.com/federl94)<br>
>[Rodriguez Yanina](https://github.com/yanina-rodriguez-dev)

### Reuniones Scrum
Durante el desarrollo del proyecto, se llevaron a cabo las siguientes reuniones de Scrum de forma regular:

- **Sprint Planning**: Al inicio de cada sprint, se llevó a cabo una reunión de planificación para definir los objetivos y seleccionar las tareas a abordar en el sprint.
- **Daily**: Todos los días, el equipo se reunía brevemente para compartir el progreso del trabajo y discutir cualquier obstáculo o impedimento.
- **Sprint Review**: Al final de cada sprint, se realizó una reunión de revisión para demostrar las funcionalidades implementadas y recibir feedback.
- **Sprint Retrospective**: También al final de  se llevó a cabo una retrospectiva para analizar el proceso y realizar mejoras para el siguiente proyecto.

### Tablero Trello
Para mantener un seguimiento visual del progreso del proyecto y las tareas pendientes, se utilizó un tablero trello que mostraba el flujo de trabajo del equipo.

### Adaptación y Flexibilidad
La metodología ágil de Scrum nos permitió adaptarnos a los cambios de requisitos y prioridades a medida que avanzaba el proyecto. Esto nos proporcionó la flexibilidad necesaria para agregar valor de manera continua y asegurar el exito del proyecto.

## Despliegue
Este backend ha sido deployado en dos plataformas de alojamiento web:

### Vercel
La versión de producción de este backend está deployada en Vercel, una plataforma de alojamiento web que ofrece despliegues rápidos y sencillos para aplicaciones de React y Node.js.

Puedes acceder a la versión deployada en Vercel en el siguiente enlace: [Enlace a Vercel](https://direccionVercel)

### Netlify
También hemos realizado pruebas con el despliegue de este backend en Netlify, una plataforma de alojamiento web popular para proyectos de frontend y backend.

Puedes acceder a la versión deployada en Netlify en el siguiente enlace: [Enlace a Netlify](https://netlify.app)

## Instalación
1. Clona este repositorio en tu máquina local:

git clone https://github.com/yanina-rodriguez-dev/backend-huellitas-center.git


2. Accede al directorio del proyecto:

-  cd backend-huellitas-center


3. Instala las dependencias:

- npm install


4. Configuración de variables de entorno:
 Crea un archivo `.env` en la raíz del proyecto y define las siguientes variables:

- PORT=4000
- MONGODB_URI=URL_de_tu_base_de_datos_MongoDB
- JWT_SECRET=secreto_generar_los_JSON_Web_Tokens.

- Reemplaza `URL_de_tu_base_de_datos_MongoDB` con la URL de tu base de datos MongoDB y `secreto_para_generar_los_JSON_Web_Tokens` con una cadena de texto secreta para la generación de los JWT.

5. Inicia el servidor:

npm start


6. El servidor estará disponible en `http://localhost:4000`.

## Contribuciones
Si deseas contribuir a este proyecto, ¡eres bienvenido! Por favor, crea un Pull Request con tus cambios y asegúrate de seguir las guías de estilo del proyecto.

## Autores

- [Rodriguez Yanina](https://github.com/yanina-rodriguez-dev)
- [Ana Santillan](https://github.com/Ana-Santillan)
- [Maximiliano Vega](https://github.com/maxivega0)
- [Federico Rueda](https://github.com/federl94)
- [Azul D Paul](https://github.com/AzulDP)


## Licencia


