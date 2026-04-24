import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { TrainingStatus } from './trainingStatus.enum';
import { User } from '@/modules/users/models/user.model';
import { Exercise } from '@/modules/exercises/models/exercise.model';
import { TrainingExercise } from './training-exercise.model';

@Table
export class Training extends Model {
  @Column
  declare title: string;

  @Column(DataType.DATE)
  declare date: Date;

  @Column({
    type: DataType.ENUM(...Object.values(TrainingStatus)),
    defaultValue: TrainingStatus.PLANNED,
  })
  declare status: TrainingStatus;

  @ForeignKey(() => User)
  @Column
  declare userId: number;

  @BelongsTo(() => User)
  user: User;

  @BelongsToMany(() => Exercise, () => TrainingExercise)
  exercises: Exercise[];
}
