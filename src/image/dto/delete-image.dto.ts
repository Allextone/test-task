import { IsNumber, IsString } from "class-validator";

export class DeleteImageDto {
    @IsNumber({}, { message: 'Должно быть числом!' })
    readonly imageId: number;

    @IsString({ message: 'Должно быть строкой!' })
    readonly deleteReason: string;
}