import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { TrainingsService } from './trainings.service';
import { TrainingDto } from './dto/training.dto';

@Controller('trainings')
export class TrainingsController {
    constructor(private trainingsService: TrainingsService) { }

    @Get(':id')
    async findById(@Param('id') id: number) {
        return this.trainingsService.findOne(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() createTrainingDto: TrainingDto) {
        return this.trainingsService.create(1, createTrainingDto)
    }
}
