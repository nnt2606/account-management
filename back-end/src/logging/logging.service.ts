import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
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
            const log = await this.loggingModel.findOne({userId: id});
            return {
                status: HttpStatus.ACCEPTED,
                message: "Success",
                data: log
            }
        }catch {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                message: 'Failed!',
            }, HttpStatus.BAD_REQUEST);
        }
        

    }
}