import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateHobbyInput {
  @Field(() => String)
  name: string;
}

@InputType()
export class ListHobbyInput {
  @Field(() => String, { nullable: true })
  _id?: string;

  @Field(() => String, { nullable: true })
  name?: string;
}

@InputType()
export class UpdateHobbyInput {
  @Field(() => String)
  _id: string;

  @Field(() => String, { nullable: true })
  name?: string;
}
