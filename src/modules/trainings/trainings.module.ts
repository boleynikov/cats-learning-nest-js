import { Module } from '@nestjs/common';
import { TrainingsController } from './trainings.controller';
import { TrainingsService } from './trainings.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Training } from './models/training.model';
import { TrainingExercise } from './models/training-exercise.model';

@Module({
    imports: [SequelizeModule.forFeature([Training, TrainingExercise])],
    controllers: [TrainingsController],
    providers: [TrainingsService],
    exports: [TrainingsService]
})
export class TrainingsModule { }
