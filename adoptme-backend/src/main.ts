
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { WinstonModule } from 'nest-winston';
import { createWinstonLogger } from './logger/winston.config';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './filters/http-exception.filter';

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
  const PORT = process.env.PORT || 3009;
  const app = await NestFactory.create(AppModule, {
    cors: true,
    logger: WinstonModule.createLogger(createWinstonLogger()),
  });
  app.use(cookieParser());

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());

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
}
bootstrap();
