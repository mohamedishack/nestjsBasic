import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HobbyRes {
  @Field(() => String)
  _id?: string;

  @Field(() => String)
  name: string;
}
