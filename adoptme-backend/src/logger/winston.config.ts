import { WinstonModule, WinstonModuleOptions, utilities } from 'nest-winston';
import * as winston from 'winston';

export function createWinstonLogger(): WinstonModuleOptions {
  return {
    levels: winston.config.npm.levels,
    format: winston.format.combine(
      winston.format.timestamp(),
      utilities.format.nestLike('MyApp', {
        prettyPrint: true,
      }),
    ),
    transports: [
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.timestamp(),
          utilities.format.nestLike('MyApp', {
            prettyPrint: true,
          }),
        ),
      }),
      // Puedes añadir más transportes aquí, por ejemplo, para guardar logs en un archivo
      // new winston.transports.File({ filename: 'error.log', level: 'error' }),
      // new winston.transports.File({ filename: 'combined.log' }),
    ],
  };
}
