import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEmail, IsString } from "class-validator";

export class UserDto {
    @ApiProperty()
    @IsString()
    firstName: string;

    @ApiProperty()
    @IsString()
    lastName: string;

    @ApiProperty({ default: 'test@example.com', uniqueItems: true })
    @IsEmail()
    email: string;

    @ApiProperty({ default: true })
    @IsBoolean()
    isActive?: boolean;
}