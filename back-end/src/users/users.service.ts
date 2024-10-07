import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUser } from './dto/create-user.dto';
import { User } from './interface/user.inteface';
import { UserLogin } from './dto/user-login.dto';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';


@Injectable()
export class UsersService {
    constructor(
        @InjectModel('users') private userModel: Model<User>
    ){}

    async register(userDto: CreateUser) {
        const newUser = new this.userModel(userDto);
        return newUser.save();
    }

    async getAllUser() {
        const users = await this.userModel.find().exec();
        return users;
    }

    async getUserByEmail(email: string){
        const user = await this.userModel.findOne({email: email});
        return user;
    }

}