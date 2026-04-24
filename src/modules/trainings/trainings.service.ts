import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Training } from './models/training.model';
import { TrainingExercise } from './models/training-exercise.model';
import { Sequelize } from 'sequelize-typescript';
import { TrainingDto } from './dto/training.dto';
import { EXCEPTION_MESSAGES } from '@/common/const';
import { Exercise } from '../exercises/models/exercise.model';
import { User } from '../users/models/user.model';
import { FindAndCountAll } from '@/types';

@Injectable()
export class TrainingsService {
  constructor(
    @InjectModel(Training)
    private trainingModel: typeof Training,
    @InjectModel(TrainingExercise)
    private trainingExerciseModel: typeof TrainingExercise,
    private sequelize: Sequelize,
  ) {}

  async create(userId: number, dto: TrainingDto): Promise<Training | null> {
    const transaction = await this.sequelize.transaction();

    try {
      const createdTraining = await this.trainingModel.create(
        {
          userId: userId,
          ...dto,
        },
        { transaction },
      );

      if (dto.exercises && dto.exercises.length > 0) {
        const trainingExercises = dto.exercises.map((ex) => ({
          trainingId: createdTraining.id,
          ...ex,
        }));

        await this.trainingExerciseModel.bulkCreate(trainingExercises, {
          transaction,
        });

        await transaction.commit();

        return this.trainingModel.findOne({
          where: { id: createdTraining.id },
          include: [
            {
              model: User,
            },
            {
              model: Exercise,
              through: { attributes: ['sets', 'reps'], as: 'details' },
            },
          ],
        });
      }
    } catch (error) {
      await transaction.rollback();
      throw new InternalServerErrorException(
        EXCEPTION_MESSAGES.CREATE_TRAINING_FAILED,
      );
    }

    return null;
  }

  async findOne(id: number): Promise<Training | null> {
    return this.trainingModel.findByPk(id, {
      include: [
        {
          model: User,
        },
        {
          model: Exercise,
          through: { attributes: ['sets', 'reps'], as: 'details' },
        },
      ],
    });
  }

  async findAll(): Promise<FindAndCountAll<Training>> {
    return this.trainingModel.findAndCountAll({
      include: [
        {
          model: User,
        },
        {
          model: Exercise,
          through: { attributes: ['sets', 'reps'], as: 'details' },
        },
      ],
    });
  }
}
