import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @ApiOperation({ summary: 'Логин' })
    @ApiResponse({ status: 200 })
    @Post('/login')
    login(@Body() userDto: CreateUserDto) {
        return this.authService.login(userDto);
    }

    @ApiOperation({ summary: 'Регистрация' })
    @Post('/signup')
    registration(@Body() userDto: CreateUserDto) {
        return this.authService.registration(userDto);
    }

    // @Post('/logout') // логаут делаем через удаление токена из 'bearer token'
    // logout(@Body() userDto: CreateUserDto) {
    //     return this.authService.logout(userDto);
    // }
}
