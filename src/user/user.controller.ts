import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateResult } from 'typeorm';

@Controller('users')
export class UserController {

    constructor (
        private userService:UserService,

    ) {}

    @UseGuards(AuthGuard)
    @Get()
    findAll():Promise<User[]> {
        return this.userService.findAll();
    }

    @UseGuards(AuthGuard)
    @Get(':id')
    findOne(
        @Param('id') id: string
    ):Promise<User> {
        return this.userService.findOne(+id);
    }

    @UseGuards(AuthGuard)
    @Post()
    create(
        @Body() createUserDto:CreateUserDto
    ):Promise<User> {
        return this.userService.create(createUserDto);
    }

    @UseGuards(AuthGuard)
    @Put(':id')
    update(
        @Param('id') id: string,
        @Body() updateUserDto:UpdateUserDto
    ) {
        return this.userService.update(+id, updateUserDto);
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    delete(
        @Param('id') id: string,
    ) {
        return this.userService.delete(+id);
    }
}
