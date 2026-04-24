import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Exercise } from './models/exercise.model';
import { FindAndCountAll } from '@/types';

@Injectable()
export class ExercisesService {
  constructor(
    @InjectModel(Exercise)
    private exerciseModel: typeof Exercise,
  ) {}

  async findAll(): Promise<FindAndCountAll<Exercise>> {
    return this.exerciseModel.findAndCountAll();
  }

  async create(exercise: Partial<Exercise>): Promise<Exercise> {
    return this.exerciseModel.create(exercise);
  }

  async update(id: number, exercise: Partial<Exercise>): Promise<Exercise> {
    const [_, updatedExercise] = await this.exerciseModel.update(exercise, {
      where: { id },
      returning: true,
    });
    return updatedExercise[0];
  }

  async findById(id: number): Promise<Exercise | null> {
    return this.exerciseModel.findByPk(id);
  }

  async remove(id: number): Promise<number> {
    return this.exerciseModel.destroy({ where: { id } });
  }
}
