import { PassportSerializer } from "@nestjs/passport";

import { UsersService } from "src/users/users.service";
import { User } from "src/users/interface/user.inteface";
import { Injectable } from "@nestjs/common";

@Injectable()
export class SessionSerializer extends PassportSerializer{
    constructor(
        private readonly userService: UsersService,
    ){
        super();
    }

    serializeUser(user: any, done: Function) {
        console.log("serialize user! \n"+user.id);
        done(null, user.id);
    }


    async deserializeUser(id: string, done: Function) {
        console.log("deserialize user! \n"+id);
        const userDb = await this.userService.getUserById(id);
        return userDb ? done(null, id) : done(null, null)
    }

}