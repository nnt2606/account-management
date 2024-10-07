import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, ObjectId } from "mongoose";


export const UserSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    session:{type: String}
}, {
    toJSON:{
        transform: function(doc, ret) {
            delete ret.password;
            return ret;
        }
    }
})
