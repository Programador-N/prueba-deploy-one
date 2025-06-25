# Despliegue en Railway.app

## Pasos para desplegar

1. **Configura las variables de entorno en Railway:**
   - `MONGO_URL`: URL de tu base de datos MongoDB Atlas.
   - `PORT`: Puerto de escucha (opcional, por defecto 3009).

2. **Verifica el script de inicio:**
   - El comando de inicio para producción es: `npm run start:prod`

3. **Dockerfile incluido:**
   - El proyecto ya incluye un `Dockerfile` listo para Railway.

4. **Despliegue:**
   - Sube el repositorio a GitHub.
   - En Railway, crea un nuevo proyecto y conecta tu repositorio.
   - Railway detectará el Dockerfile y construirá la imagen automáticamente.
   - Configura las variables de entorno en Railway.
   - Railway expondrá el dominio para tu backend.

5. **Ramas y entornos:**
   - Crea ramas `development`, `QualityAssurance` y `main` en tu repo.
   - En Railway, crea entornos para cada rama y configura variables de entorno y base de datos distintas.

## Pruebas locales

```bash
npm install
npm run build
npm run start:prod
```

Accede a `http://localhost:3009` (o el puerto que definas).
