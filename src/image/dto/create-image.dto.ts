import { IsString } from "class-validator";

export class CreateImageDto {
    @IsString({ message: 'Должно быть строкой!' })
    readonly name: string;

    @IsString({ message: 'Должно быть строкой!' })
    readonly description: string;

    @IsString({ message: 'Должно быть строкой!' })
    readonly image: string;

    // @IsString({ message: 'Должно быть строкой!' })
    // readonly comments: string;
}