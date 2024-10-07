import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {UserSession} from './inteface/Session.interface';

@Injectable()
export class SessionService {
    constructor(
        @InjectModel('session') private sessionModel: Model<UserSession>
    ){}

    async getSession(userId: string){
        const sessions = await this.sessionModel.find({userId: userId}).exec();
        return sessions;
    }

    async createOrUpdateSession(userId: string, sessionToken: string) {
        await this.sessionModel.deleteMany({userId: userId});
        const newSession = new this.sessionModel({
            userId,
            sessionToken,
        });
        return newSession.save();
    }

    async validateSession(userId: string, sessionToken: string){
        const session = await this.sessionModel.findOne({userId: userId});
        if(session.sessionToken === sessionToken) return true;
        return false;
    }

    async invalidateSession(userId: string) {
        return this.sessionModel.deleteMany({userId: userId});
    }
}
