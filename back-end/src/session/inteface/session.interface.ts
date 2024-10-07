import { Document } from 'mongoose';

export interface UserSession extends Document {
    id: string;
    sessionToken: string;
    deviceInfo: string;
    loginTime: Date;
}