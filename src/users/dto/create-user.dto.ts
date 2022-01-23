import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {

    @ApiProperty({ example: 'user@gmail.com', description: 'Почтовый адресс' })
    @IsString({ message: 'Должно быть строкой!' })
    // @IsEmail({ message: 'Некорректный email.' })
    @IsEmail({}, { message: 'Некорректный email!' })
    readonly email: string;

    @ApiProperty({ example: '123456', description: 'Пароль пользователя' })
    @IsString({ message: 'Должно быть строкой!' })
    @Length(4, 16, { message: 'Пароль должен иметь не менее 4 знаков и не более 16 знаков.' })
    readonly password: string;
}