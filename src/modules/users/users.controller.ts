import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get()
    async findAll() {
        return this.usersService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: string) {
        return this.usersService.findOne(+id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() createUserDto: UserDto) {
        return this.usersService.create(createUserDto);
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: string, @Body() updateUserDto: UserDto) {
        const [numberOfAffectedRows, updatedUser] = await this.usersService.update(+id, updateUserDto);
        console.log('affected rows: ', numberOfAffectedRows);
        
        return updatedUser;
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async remove(@Param('id', ParseIntPipe) id: string) {
        await this.usersService.remove(+id);
    }
}
