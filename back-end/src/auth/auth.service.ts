import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        // private sessionSerive: SessionService,
        private usersService: UsersService,
    
    ){}

    async sinIn(email: string, password: string) {
       
    }

    async validateUser(email:string, password:string) {
        const user = await this.usersService.getUserByEmail(email);
        if(user && user.password === password) {
            // console.log(user);
            return user;
        }
        return null;
    }
}
