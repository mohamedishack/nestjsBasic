import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Types } from 'mongoose';
import { CreateHobbyInput, ListHobbyInput, UpdateHobbyInput } from './dto/hobby.inputs';
import { HobbyRes } from './dto/hobby.res';

import { HobbyService } from './hobby.service';

@Resolver(() => HobbyRes)
export class HobbyResolver {
  constructor(private hobbyService: HobbyService) {}

  // @Query(() => Hobby)
  // async hobby(@Args('_id', { type: () => String }) _id: string) {
  //   return this.hobbyService.getById(_id);
  // }

  @Query(() => [HobbyRes])
  async hobbies(@Args('filters', { nullable: true }) filters?: ListHobbyInput) {
    return this.hobbyService.list(filters);
  }

  @Mutation(() => HobbyRes)
  async createHobby(@Args('payload') payload: CreateHobbyInput) {
    return this.hobbyService.create(payload);
  }

  @Mutation(() => HobbyRes)
  async updateHobby(@Args('payload') payload: UpdateHobbyInput) {
    return this.hobbyService.update(payload);
  }

  @Mutation(() => HobbyRes)
  async deleteHobby(@Args('_id', { type: () => String }) _id: string) {
    return this.hobbyService.delete(_id);
  }
}
