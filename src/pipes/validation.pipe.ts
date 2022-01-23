import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { ValidationException } from "src/exception/validation.exception";


@Injectable()
//пайпы имееют два основных предназначения
//1. как-то преобразовывать входные данные : string -> number 
//2. валидация входных данных
export class ValidationPipe implements PipeTransform<any> {
    async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
        // throw new Error("Method not implemented.");
        const obj = plainToClass(metadata.metatype, value);
        const errors = await validate(obj);

        if (errors.length) {
            // console.log(errors)
            let messages = errors.map(err => {
                return `${err.property} - ${Object.values(err.constraints).join(', ')}` //err.property - название поля, которое не прошло валидацию
            })
            throw new ValidationException(messages);
        }
        return value;
    }
    //написал авторизацию, выдача ролей, выдача бана, 1:14:10 видос, следующая тема пайпы и валидация
}