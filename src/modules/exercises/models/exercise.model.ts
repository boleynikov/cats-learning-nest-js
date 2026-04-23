import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { MuscleGroup } from "./muscleGroup.enum";
import { Training } from "@/modules/trainings/models/training.model";
import { TrainingExercise } from "@/modules/trainings/models/training-exercise.model";

@Table
export class Exercise extends Model {
    @Column
    declare title: string;

    @Column
    declare description: string;

    @Column(DataType.ENUM(...Object.values(MuscleGroup)))
    muscleGroup: MuscleGroup;

    @BelongsToMany(() => Training, () => TrainingExercise)
    trainings: Training[];
}