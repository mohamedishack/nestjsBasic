import { Field, InputType } from '@nestjs/graphql';
import { Types } from 'mongoose';

@InputType()
export class CreatePersonInput {
  @Field(() => String)
  name: string;

  @Field(() => [String])
  hobbies: string[];
}

@InputType()
export class ListPersonInput {
  @Field(() => String, { nullable: true })
  _id?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => [String], { nullable: true })
  hobbies?: string[];
}

@InputType()
export class UpdatePersonInput {
  @Field(() => String)
  _id: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => [String], { nullable: true })
  hobbies?: string[];
}
