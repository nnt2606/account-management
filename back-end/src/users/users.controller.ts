import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUser } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { UserLogin } from './dto/user-login.dto';

@Controller('users')
export class UsersController {
    constructor(
        private userService: UsersService
    ) {}

    @Post('/register')
    register(@Body() newUser: CreateUser) {
        return this.userService.register(newUser);
    }

    @Get()
    getAllUser() {
        return this.userService.getAllUser();
    }
}
