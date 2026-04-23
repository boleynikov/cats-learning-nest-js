import { Training } from "@/modules/trainings/models/training.model";
import { Column, HasMany, Model, Table } from "sequelize-typescript";

@Table
export class User extends Model {
    @Column
    firstName: string;

    @Column
    lastName: string;

    @Column({ unique: true })
    email: string;

    @Column({ defaultValue: true })
    isActive: boolean;

    @HasMany(() => Training)
    trainings: Training[];
}
