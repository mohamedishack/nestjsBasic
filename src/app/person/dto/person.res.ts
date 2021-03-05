import { Field, ObjectType } from '@nestjs/graphql';
import { HobbyRes } from '../../hobby/dto/hobby.res';

@ObjectType()
export class PersonRes {
  @Field(() => String)
  _id?: string;

  @Field(() => String)
  name: string;

  @Field(() => [HobbyRes])
  hobbies: string[] ;
}
