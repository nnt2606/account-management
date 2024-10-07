import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateUser } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { AuthenticatedGuard } from 'src/auth/utils/LocalGuard';

@Controller('users')
export class UsersController {
    constructor(
        private userService: UsersService
    ) {}

    @Post('/register')
    register(@Body() newUser: CreateUser) {
        return this.userService.register(newUser);
    }

    @UseGuards(AuthenticatedGuard)
    @Get()
    getAllUser() {
        return this.userService.getAllUser();
    }
}
