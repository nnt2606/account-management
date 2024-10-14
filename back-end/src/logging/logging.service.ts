import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Logging } from './interface/logging.interface';

@Injectable()
export class LoggingService {
    constructor(
        @InjectModel('logging') private loggingModel: Model<Logging>
    ){ }

    async logging(userId: string, action: string ) {
        const log = new this.loggingModel({
            userId: userId,
            action: action
        })
        await log.save();
    }

    async getLogUser(id: string) {
        try{
            const log = await this.loggingModel.find({userId: new mongoose.Types.ObjectId(id)});
            return {
                status: HttpStatus.OK,
                message: "Success",
                data: log
            }
        }catch(e) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                message: e,
            }, HttpStatus.BAD_REQUEST);
        }
    }
}