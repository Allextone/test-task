import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class DeletePortfolioDto {
    @ApiProperty({ example: '1', description: 'ID портфолио, которое будем удалять' })
    @IsNumber({}, { message: 'Должно быть числом!' })
    readonly portfolioId: number;
    
    @ApiProperty({ example: 'Старый', description: 'Причина удаления портфолио' })
    @IsString({ message: 'Должно быть строкой!' })
    readonly deleteReason: string;
}