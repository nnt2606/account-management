import { Body, Controller, Delete, Get, Post, Put, Req, UseGuards } from '@nestjs/common';
import { CreateUser } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { AuthenticatedGuard } from 'src/auth/utils/LocalGuard';
import { UpdateUser } from './dto/update-user.dto';
import { Response, response } from 'express';

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
    @Post('/getAll')
    getAllUser() {
        return this.userService.getAllUser();
    }

    @UseGuards(AuthenticatedGuard)
    @Post('/update')
    update(@Body() userDto: UpdateUser) {
        return this.userService.updateUser(userDto);
    }

    @UseGuards(AuthenticatedGuard)
    @Post('/delete')
    delete(@Body() id: string) {
        return this.userService.deleteUser(id);
    }

    @UseGuards(AuthenticatedGuard)
    @Post('/user-detail')
    detailUser(@Body() id: string) {
        return this.userService.getUserDetail(id);
    }
}
