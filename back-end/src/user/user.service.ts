import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import {User} from './schema/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from "./dto/create-user.dto";


@Injectable()
export class UserService { 
    constructor(
        @InjectModel(User.name) 
        private userModel: Model<User>
) {}

    async create(userDto: CreateUserDto) {
        const user = await this.userModel.create(userDto);
        return user;
    }

    async findAll() {
        return this.userModel.find().exec();
    }

    async findOneById(id: string) {
        const user =  this.userModel.findOne({_id: id}).exec();
        if(!user) {
            throw new NotFoundException("Not found user!");
        }
        return user;
    }

    async findOneByEmail(email:string) {
        return this.userModel.findOne({email: email}).exec();
    }

    async delete(id: string) {
        const deleteUser = await this.userModel
        .findByIdAndDelete({_id: id})
        .exec();
        return deleteUser;
    }

    async updateToken(id: string, token: string) {
        const user = this.findOneById(id);
        (await user).token = token;
        (await user).save();
    }
}