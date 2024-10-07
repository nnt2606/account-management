import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SessionService } from 'src/session/session.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private sessionSerive: SessionService,
        private usersService: UsersService,
    ){}

    async sinIn(email: string, password: string) {
        const user = await this.usersService.getUserByEmail(email);
        if(user?.password !== password) {
            throw new UnauthorizedException();
        }
        const payload = {email: email, sub: user.id};
        const sessionToken = this.jwtService.sign(payload);

        await this.sessionSerive.createOrUpdateSession(user.id, sessionToken);

        return {
            access_token: sessionToken,
        }
    }
}
