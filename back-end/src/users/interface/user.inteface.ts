import { Document } from 'mongoose';

export interface User extends Document {
    id: string;
    name: string;
    email: string;
    password: string;
    img: String;
    phone: String;
    account_type: String;
    nationality: String;
    language: String;
    status: boolean;
    role: string;

}