import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async create(@Body() userDto: CreateUserDto) {
        await this.userService.create(userDto);
    }

    @Get()
    async findAll() {
        return this.userService.findAll();
    }

    @Get(':email')
    async findOne(@Param('email') email: string) {
        return this.userService.findOneByEmail(email);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.userService.delete(id);
    }
}