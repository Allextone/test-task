import { IsNumber, IsString } from "class-validator";

export class CreateImageDto {
    @IsString({ message: 'Должно быть строкой!' })
    readonly name: string;

    @IsString({ message: 'Должно быть строкой!' })
    readonly description: string;

    @IsNumber({}, { message: 'Должно быть числом!' })
    readonly userId: number;

    @IsNumber({}, { message: 'Должно быть числом!' })
    readonly portfolioId: number;

    // @IsString({ message: 'Должно быть строкой!' })
    // readonly image: string;

    // @IsString({ message: 'Должно быть строкой!' })
    // readonly comments: string;
}