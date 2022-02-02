import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class banUserDto {
    @ApiProperty({ example: '2', description: 'ID пользователя, которого баним' })
    @IsNumber({}, { message: 'Должно быть числом!' })
    readonly userId: number;

    @ApiProperty({ example: 'Хулиганство', description: 'Причина бана' })
    @IsString({ message: 'Должно быть строкой!' })
    readonly banReason: string;
}