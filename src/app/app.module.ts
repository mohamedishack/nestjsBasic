import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { PersonModule } from './person/person.module';
import { HobbyModule } from './hobby/hobby.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/test'),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: true,
      debug: false,
    }),
    PersonModule,
    HobbyModule,
  ]
})
export class AppModule {}
