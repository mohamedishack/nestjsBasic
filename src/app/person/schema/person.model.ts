import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Person {
  _id?: string;

  @Prop()
  name: string;

  @Prop({ type: [String] })
  hobbies: string[] ;
}

export type PersonDocument = Person & Document;

export const PersonSchema = SchemaFactory.createForClass(Person);
