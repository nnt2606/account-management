import { Schema } from "mongoose";
import mongoose from "mongoose";

export const SessionSchema = new Schema({
    userId: {type: mongoose.Types.ObjectId, required: true},
    sessionToken: {type: String, required: true},
    deviceInfo: {type: String},
    loginTime: {type: Date, default: Date.now},
});