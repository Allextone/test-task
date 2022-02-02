import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreatePortfolioDto {
    @ApiProperty({ example: 'Отпуск 2022', description: 'Название портфолио' })
    @IsString({ message: 'Должно быть строкой!' })
    readonly name: string;
    
    @ApiProperty({ example: 'Фотки с отпуска в Дубаи', description: 'Описание портфолио' })
    @IsString({ message: 'Должно быть строкой!' })
    readonly description: string;
}