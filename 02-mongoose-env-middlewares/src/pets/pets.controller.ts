import { Controller, Get } from '@nestjs/common';

@Controller('api/pets')
export class PetsController {
  @Get()
  findAll() {
    return [
      { id: 1, nombre: 'Firulais', tipo: 'Perro' },
      { id: 2, nombre: 'Michi', tipo: 'Gato' }
    ];
  }
}
