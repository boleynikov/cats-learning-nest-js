import { Body, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post } from '@nestjs/common';
import { TrainingsService } from './trainings.service';
import { TrainingDto } from './dto/training.dto';

@Controller('trainings')
export class TrainingsController {
    constructor(private trainingsService: TrainingsService) { }

    @Get()
    async findAll() {
        return this.trainingsService.findAll();
    }

    @Get(':id')
    async findById(@Param('id', ParseIntPipe) id: number) {
        return this.trainingsService.findOne(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() createTrainingDto: TrainingDto) {
        return this.trainingsService.create(1, createTrainingDto)
    }
}
