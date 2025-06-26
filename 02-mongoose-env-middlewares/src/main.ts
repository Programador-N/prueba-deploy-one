
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const conn=async()=>{
  await mongoose.connect(process.env.MONGO_URL!)
  const modeloHeroes=mongoose.model(
    "heroes", 
    new mongoose.Schema(
      {
        name: String, 
        alias: String
      }, 
      {
        timestamps:true
      }
    )
  )

  let heroes=await modeloHeroes.find()
  console.log(heroes)
}
// conn()

async function bootstrap() {
  const PORT = process.env.PORT || 8080;
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(cookieParser());
  // Servir archivos estáticos desde ./src/public
  const express = (await import('express')).default;
  app.use(express.static("./src/public"));

  // Configuración de Swagger para producción y desarrollo
  const config = new DocumentBuilder()
    .setTitle('API Clientes')
    .setDescription('Documentación de la API para gestión de clientes y endpoints relacionados')
    .setVersion('1.0')
    .addTag('clientes')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(PORT);
  Logger.log(`Server online on port ${PORT}`, `Main App`);
}
bootstrap();
