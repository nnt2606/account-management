import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUser } from './dto/create-user.dto';
import { User } from './interface/user.inteface';
import { UpdateUser } from './dto/update-user.dto';
import { LoggingService } from 'src/logging/logging.service';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel('users') private userModel: Model<User>,
        private loggingService: LoggingService,
    ) { }

    async register(userDto: CreateUser) {
        console.log(userDto)
        try {
            // const existUser = this.userModel.findOne({email: userDto.email});
            // if (existUser) {
            //     throw new HttpException({
            //         status: HttpStatus.BAD_REQUEST,
            //         message: 'User already exists',
            //     }, HttpStatus.BAD_REQUEST);
            // }
            const newUser = new this.userModel(userDto );
            this.loggingService.logging(newUser.id, "Tạo tài khoản");
            return {
                status: HttpStatus.CREATED,
                message: 'Registration successful',
                data: await newUser.save()
            }
        } catch (e) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                message: e,
            }, HttpStatus.BAD_REQUEST);
        }
    }

    async getAllUser() {
        try {
            const users = await this.userModel.find().exec();
            return {
                status: HttpStatus.ACCEPTED,
                message: 'Success',
                data: users,
            }
        } catch (e) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                message: 'Failed!',
            }, HttpStatus.BAD_REQUEST);
        }
    }

    async getUserDetail(id: string) {
        try {
            const users = await this.userModel.findOne({id: id});
            return {
                status: HttpStatus.ACCEPTED,
                message: 'Success',
                data: users,
            }
        } catch (e) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                message: 'Failed!',
            }, HttpStatus.BAD_REQUEST);
        }
    }
    async updateUser(userDto: UpdateUser) {
        try {
            const user = await this.userModel.findByIdAndUpdate(userDto.id,
                { ...userDto }
            );
            this.loggingService.logging(user.id, "Cập nhập thông tin cá nhân!");
            return {
                status: HttpStatus.ACCEPTED,
                message: 'Update successful',
                data: user
            }
        } catch {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                message: 'Update failed!',
            }, HttpStatus.BAD_REQUEST);
        }
    }

    async deleteUser(id: string) {
        try {
            const user = await this.userModel.findByIdAndDelete(id);
            this.loggingService.logging(id, " Xóa tài khoản!");
            return {
                status: HttpStatus.ACCEPTED,
                message: 'Update successful'
            }
        } catch {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                message: 'Failed',
            }, HttpStatus.BAD_REQUEST);
        }
    }

    async getAccByEmail(email: string) {
        const user = await this.userModel.findOne({email});
        return user;
    }

    async getAccById(id: string) {
        const user = await this.userModel.findById(id);
        return user;
    }


}
