import { IsString } from "class-validator";

export class DeletePortfolioDto {
    @IsString({ message: 'Должно быть числом!' })
    readonly portfolioId: number;

    @IsString({ message: 'Должно быть строкой!' })
    readonly deleteReason: string;
}