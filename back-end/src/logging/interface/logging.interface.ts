import { Document } from "mongoose";

export interface Logging extends Document {
    id: string,
    userId: string,
    action: string,
    type: string,
    time: string,
}