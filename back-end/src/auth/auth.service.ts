import {
    forwardRef,
    Inject,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private jwtService: JwtService,
    ) { }

    async signIn(email: string, pass: string): Promise<{ access_token: string}> {
        const user = await this.userService.findOneByEmail(email);
        if (user?.password !== pass) {
            throw new UnauthorizedException();
        }

        const payload = {sub: user?.id, role: user?.role};
        const access_token = await this.jwtService.signAsync(payload);
        this.userService.updateToken(user?.id, access_token);
        return {
            access_token: access_token
        }
    }
}
