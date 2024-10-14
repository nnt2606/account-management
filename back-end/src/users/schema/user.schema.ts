import mongoose, { HydratedDocument, ObjectId } from "mongoose";


export const UserSchema = new mongoose.Schema({
    email: {type: String, required: true},
    img: {type: String},
    password: {type: String, required: true},
    name: {type: String, required: true},
    phone: {type: String},
    account_type: {type: String},
    nationality: {type: String},
    language: {type: String},
    role: {type: String},
    date: {type: Date, default: new Date()},
    status: {type: Boolean, default: false},
}, {
    toJSON:{
        transform: function(doc, ret) {
            delete ret.password;
            return ret;
        }
    }
})
