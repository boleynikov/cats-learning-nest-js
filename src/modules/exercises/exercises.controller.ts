import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { ExerciseDto } from './dto/exercise.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('exercises')
export class ExercisesController {
  constructor(private exercisesService: ExercisesService) {}

  @Get()
  @ApiOperation({ summary: 'Отримати список всіх вправ'})
  async findAll() {
    return this.exercisesService.findAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Створити нову вправу'})
  async create(@Body() exercise: ExerciseDto) {
    return this.exercisesService.create(exercise);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Оновити інформацію про вправу'})
  async update(@Param('id', ParseIntPipe) id: number, @Body() exercise: ExerciseDto) {
    return this.exercisesService.update(id, exercise);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Отримати інформацію про вправу'})
  async findById(@Param('id', ParseIntPipe) id: number) {
    return this.exercisesService.findById(id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Видалити вправу'})
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.exercisesService.remove(id);
  }
}
