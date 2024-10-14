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
        console.log("serialize user! \n"+user.data.id);
        done(null, user.data.id);
    }


    async deserializeUser(id: string, done: Function) {
        console.log("deserialize user! \n"+id);
        const userDb = await this.userService.getAccById(id);
        return userDb ? done(null, id) : done(null, null)
    }

}