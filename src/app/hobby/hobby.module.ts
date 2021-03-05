import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HobbyService } from './hobby.service';
import { HobbyResolver } from './hobby.resolver';
import { Hobby, HobbySchema } from './schema/hobby.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Hobby.name, schema: HobbySchema }]),
  ],
  providers: [HobbyService, HobbyResolver],
})
export class HobbyModule {}
