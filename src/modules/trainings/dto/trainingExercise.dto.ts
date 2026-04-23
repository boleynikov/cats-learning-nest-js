import { ApiProperty } from "@nestjs/swagger";
import { IsInt, Min } from "class-validator";

export class TrainingExerciseDto {
    @ApiProperty({ description: 'Exercise ID', example: 1 })
    @IsInt()
    exerciseId: number;

    @ApiProperty({ description: 'Number of sets', example: 4 })
    @IsInt()
    @Min(1)
    sets: number;

    @ApiProperty({ description: 'Number of repetitions', example: 12 })
    @IsInt()
    @Min(1)
    reps: number;
    
}