import mongoose from "mongoose";

export const loggingSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    action: {type: String, required: true},
    type: {type: String, default :'User management'},
    time: {type: Date, default: new Date()}
})