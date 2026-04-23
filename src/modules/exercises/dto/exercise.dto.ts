import { IsEnum, IsString } from "class-validator";
import { MuscleGroup } from "../models/muscleGroup.enum";
import { ApiProperty } from "@nestjs/swagger";

export class ExerciseDto {
    @ApiProperty()
    @IsString()
    title: string;

    @ApiProperty()
    @IsString()
    description: string;

    @ApiProperty({ enum: MuscleGroup })
    @IsEnum(MuscleGroup)
    muscleGroup: MuscleGroup;
}