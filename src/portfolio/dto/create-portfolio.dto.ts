import { IsString } from "class-validator";

export class CreatePortfolioDto {
    @IsString({ message: 'Должно быть строкой!' })
    readonly name: string;

    @IsString({ message: 'Должно быть строкой!' })
    readonly description: string;

    // @IsString({ message: 'Должно быть строкой!' })
    // readonly images: string;
}