import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from 'passport-local';
import { AuthService } from "../auth.service";
import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class LocalStrategty extends PassportStrategy(Strategy) {
    constructor(
        private readonly authService: AuthService
    ){
        super({usernameField: 'email'});
    }

    async validate(email: string, password: string) {
        console.log("Validate!")
        const user = await this.authService.validateUser(email, password);
        if(!user) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                message: 'Login failed',
            }, HttpStatus.BAD_REQUEST);
        }
        return {
            status: HttpStatus.OK,
            message: 'Login success',
            data: user
        }
    }
}