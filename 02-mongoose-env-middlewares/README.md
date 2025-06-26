# Backend API - Mongoose, Middlewares y Railway Deploy

Este proyecto es un backend desarrollado con NestJS, Mongoose y middlewares personalizados, preparado para despliegue profesional en Railway.

## Características principales
- API RESTful para gestión de clientes y mascotas.
- Conexión a MongoDB Atlas mediante variables de entorno.
- Middlewares personalizados (logger, cookies, etc).
- Documentación interactiva con Swagger (`/api`).
- Listo para despliegue en Railway con Docker.
- Estructura profesional de ramas: `main` (producción) y `dev` (desarrollo).

## Instalación y uso local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Programador-N/prueba-deploy-one.git
   cd prueba-deploy-one/practicaIntegradora/02-mongoose-env-middlewares
   ```
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Configura las variables de entorno en `.env`:
   ```env
   MONGO_URL=tu_url_de_mongodb
   PORT=8080
   ```
4. Compila y ejecuta en modo producción:
   ```bash
   npm run build
   npm run start:prod
   ```
5. Accede a la documentación Swagger en:
   - [http://localhost:8080/api](http://localhost:8080/api)

## Despliegue en Railway

1. Sube tu código a GitHub.
2. En Railway, crea un nuevo proyecto y conecta tu repositorio.
3. Configura las variables de entorno (`MONGO_URL`, `PORT`).
4. Railway detectará el Dockerfile y hará el deploy automáticamente.
5. Accede al dominio generado por Railway para consumir la API.

## Estructura de ramas recomendada
- `main`: Rama de producción.
- `dev`: Rama de desarrollo y pruebas.

## Endpoints principales
- `/api/clientes`: Gestión de clientes.
- `/api/pets`: Gestión de mascotas.

## Contribuciones
1. Haz un fork del repositorio.
2. Crea una rama desde `dev`.
3. Haz tus cambios y abre un Pull Request hacia `dev`.

---

**¡Listo para escalar y desplegar en la nube!**
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
