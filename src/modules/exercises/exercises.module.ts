import { Module } from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { ExercisesController } from './exercises.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Exercise } from './models/exercise.model';

@Module({
    imports: [SequelizeModule.forFeature([Exercise])],
    controllers: [ExercisesController],
    providers: [ExercisesService],
    exports: [ExercisesService],
})
export class ExercisesModule { }
