import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Training } from "./training.model";
import { Exercise } from "@/modules/exercises/models/exercise.model";

@Table
export class TrainingExercise extends Model {
    @ForeignKey(() => Training)
    @Column
    declare trainingId: number;

    @ForeignKey(() => Exercise)
    @Column
    declare exerciseId: number;

    @Column
    declare sets: number;

    @Column
    declare reps: number;
}