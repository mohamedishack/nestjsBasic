import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CreatePersonInput, ListPersonInput, UpdatePersonInput } from './dto/person.inputs';
import { PersonRes } from './dto/person.res';
import { PersonService } from './person.service';

@Resolver(() => PersonRes)
export class PersonResolver {
  constructor(private personService: PersonService) {}

  @Query(() => PersonRes)
  async person(@Args('_id', { type: () => String }) _id: string) {
    return this.personService.getById(_id);
  }

  @Query(() => [PersonRes])
  async persons(
    @Args('filters', { nullable: true }) filters?: ListPersonInput,
  ) {
    return this.personService.list(filters);
  }

  @Mutation(() => PersonRes)
  async createPerson(@Args('payload') payload: CreatePersonInput) {
    return this.personService.create(payload);
  }

  @Mutation(() => PersonRes)
  async updatePerson(@Args('payload') payload: UpdatePersonInput) {
    return this.personService.update(payload);
  }

  @Mutation(() => PersonRes)
  async deletePerson(@Args('_id', { type: () => String }) _id: string) {
    return this.personService.delete(_id);
  }

  // @ResolveField()
  // async hobbies(
  //   @Parent() person: PersonDocument,
  //   @Args('populate') populate: boolean,
  // ) {
  //   if (populate)
  //     await person
  //       .populate({ path: 'hobbies', model: Hobby.name })
  //       .execPopulate();
  //   return person.hobbies;
  // }
}
