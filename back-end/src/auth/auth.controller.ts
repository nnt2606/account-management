import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, UseGuards, Session } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { AuthenticatedGuard, LocalAuthGuard } from './utils/LocalGuard';

@Controller('auth')
export class AuthController {
    constructor(private authSerive: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    signIn(@Body() email: string, password: string) {
        // return this.authSerive.sinIn(req.email, req.password);
    }

    // @UseGuards(AuthenticatedGuard)
    @Get('')
    async getSession(@Session() session: Record<string, any>) {
        console.log(session);
        console.log(session.passport);
        session.authenticated = true;
        return session;
    }

    @UseGuards(AuthenticatedGuard)
    @Get('status')
    async getStatus(@Req() req: Request) {
        return req.user;
    }
}
