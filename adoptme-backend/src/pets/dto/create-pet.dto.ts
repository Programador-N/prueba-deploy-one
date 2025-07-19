import { IsInt, IsString } from "class-validator"
import { ApiProperty } from '@nestjs/swagger';

export class CreatePetDto {

    @ApiProperty({ description: 'El nombre de la mascota', example: 'Firulais' })
    @IsString({
        message:`nombre es requerido, y de tipo string`
    })
    nombre: string

    @ApiProperty({ description: 'La edad de la mascota', example: 3 })
    @IsInt()
    edad: number
}
