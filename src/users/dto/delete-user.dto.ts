import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class deleteUserDto {

    @ApiProperty({ example: '2', description: 'Уникальный идентификатор пользователя' })
    @IsNumber({}, { message: 'Должно быть числом!' })
    readonly userId: number;

    @ApiProperty({ example: 'Хочу завести нового пользователя.', description: 'Причина удаления пользователя.' })
    @IsString({ message: 'Должно быть строкой!' })
    readonly reason: string;
}