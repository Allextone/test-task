import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class addRoleDto {
    @ApiProperty({ example: '1', description: 'ID пользователя, которому выдать роль' })
    @IsNumber({}, { message: 'Должно быть числом!' })
    readonly userId: number;

    @ApiProperty({ example: 'ADMIN', description: 'Название роли' })
    @IsString({ message: 'Должно быть строкой!' })
    readonly value: string;
}