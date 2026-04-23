import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Exercise } from './models/exercise.model';

@Injectable()
export class ExercisesService {
    constructor(
        @InjectModel(Exercise)
        private exerciseModel: typeof Exercise
    ) { }

    async findAll(): Promise<Exercise[]> {
        return this.exerciseModel.findAll();
    }

    async create(exercise: Partial<Exercise>): Promise<Exercise> {
        return this.exerciseModel.create(exercise);
    }

    async findById(id: number): Promise<Exercise | null> {
        return this.exerciseModel.findByPk(id);
    }
}
