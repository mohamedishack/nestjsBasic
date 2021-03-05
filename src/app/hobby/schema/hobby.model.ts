import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Hobby {
  _id?: string;

  @Prop()
  name: string;
}

export type HobbyDocument = Hobby & Document;

export const HobbySchema = SchemaFactory.createForClass(Hobby);
