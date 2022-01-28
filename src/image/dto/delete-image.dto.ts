import { IsString } from "class-validator";

export class DeleteImageDto {
    @IsString({ message: 'Должно быть числом!' })
    readonly imageId: number;

    @IsString({ message: 'Должно быть строкой!' })
    readonly deleteReason: string;
}