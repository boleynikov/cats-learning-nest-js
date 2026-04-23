import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { ExerciseDto } from './dto/exercise.dto';

@Controller('exercises')
export class ExercisesController {
    constructor(private exercisesService: ExercisesService) { }

    @Get()
    async findAll() {
        return this.exercisesService.findAll();
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() exercise: ExerciseDto) {
        return this.exercisesService.create(exercise);
    }

    @Get(':id')
    async findById(@Param('id') id: number) {
        return this.exercisesService.findById(id);
    }
}
