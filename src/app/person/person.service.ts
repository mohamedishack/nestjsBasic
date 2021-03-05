import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Hobby } from '../hobby/schema/hobby.model';
import { ListPersonInput } from './dto/person.inputs';
import { Person, PersonDocument } from './schema/person.model';


@Injectable()
export class PersonService {
  constructor(
    @InjectModel(Person.name) private personModel: Model<PersonDocument>,
  ) {}

  create(payload:Person ) {
    const createdPerson = new this.personModel(payload);
    return createdPerson.save();
  }

  getById(_id: string) {
    return this.personModel.findById(_id).exec();
  }

  list(filters: ListPersonInput) {
    // return this.personModel.find(filters)
    // .populate({ path: 'hobbies', model: Hobby.name })
    
    // this.findByHobbyId()
    return this.personModel.find({ ...filters }).exec();
  }

  async findByHobbyId(){
    const person=await this.personModel.find({hobbies:{"$in":["6041c77276ac0c2a2e736b46"]}})
    console.log(person);
    
  }

  update(payload: Partial<Person>) {
    return this.personModel
      .findByIdAndUpdate(payload._id, payload, { new: true })
      .exec();
  }

  delete(_id:string) {
    return this.personModel.findByIdAndDelete(_id).exec();
  }
}
