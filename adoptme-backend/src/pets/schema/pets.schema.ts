import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type petDocument = HydratedDocument<Pet>;

@Schema({
    timestamps:true,
})
export class Pet {
  @Prop()
  nombre: string;

  @Prop()
  edad: number;
}

export const PetSchema = SchemaFactory.createForClass(Pet);
