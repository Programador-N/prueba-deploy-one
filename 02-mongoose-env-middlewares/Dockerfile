# Dockerfile para NestJS + Railway
FROM node:20-alpine

# Crear directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias (solo producción, sin devDependencies)
RUN npm install --omit=dev

# Copiar el resto del código fuente
COPY . .

# Compilar TypeScript
RUN npm run build

# Exponer el puerto (usa variable de entorno o 3009 por defecto)
EXPOSE ${PORT:-3009}

# Comando de inicio
CMD ["npm", "run", "start:prod"]
