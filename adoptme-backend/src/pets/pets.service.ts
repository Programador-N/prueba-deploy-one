import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { Model } from 'mongoose';
import { Pet } from './schema/pets.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PetsService {
  constructor(@InjectModel(Pet.name) private petsModelo: Model<Pet>){}

  async create(createPetDto: CreatePetDto) {
    try {
      let nuevaPet = await this.petsModelo.create(createPetDto);
      return nuevaPet;
    } catch (error) {
      throw new BadRequestException(`Error: ${error.message}`);
    }
  }

  findAll() {
    return this.petsModelo.find().lean();
  }

  findOne(id: string) {
    return this.petsModelo.findById(id).lean();
  }

  update(id: string, updatePetDto: UpdatePetDto) {
    return this.petsModelo.findByIdAndUpdate(id, updatePetDto, { new: true }).lean();
  }

  remove(id: string) {
    return this.petsModelo.findByIdAndDelete(id).lean();
  }
}
