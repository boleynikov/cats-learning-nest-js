import { IsArray, IsDateString, IsEnum, IsString, ValidateNested } from "class-validator";
import { TrainingStatus } from "../models/trainingStatus.enum";
import { TrainingExerciseDto } from "./trainingExercise.dto";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class TrainingDto {
    @ApiProperty({ description: 'Training title', example: 'Morning Workout' })
    @IsString()
    title: string;

    @ApiProperty({ description: 'Training date', example: '2023-10-15T08:00:00.000Z' })
    @IsDateString()
    date: Date;

    @ApiProperty({ description: 'Training status', example: TrainingStatus.PLANNED })
    @IsEnum(TrainingStatus)
    status: TrainingStatus;

    @ApiProperty({ description: 'List of exercises', type: [TrainingExerciseDto] })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => TrainingExerciseDto)
    exercises: TrainingExerciseDto[];
}