import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from "bcryptjs";
import { User } from 'src/users/users.model';

@Injectable()
export class AuthService {

    constructor(private userService: UsersService,
        private jwtService: JwtService) { }

    async login(userDto: CreateUserDto) {
        const user = await this.validateUser(userDto);
        return this.generateToken(user);
    }

    private async validateUser(userDto: CreateUserDto) {
        const user = await this.userService.getUserByEmail(userDto.email);
        const passwordEquels = await bcrypt.compare(userDto.password, user.password);
        if (user && passwordEquels) {
            return user;
        }
        throw new UnauthorizedException({ message: "Некоректный email или password!" });

    }

    async registration(userDto: CreateUserDto) {
        const candidate = await this.userService.getUserByEmail(userDto.email);
        if (candidate) {
            throw new HttpException("Пользователь с таким email существует!", HttpStatus.BAD_REQUEST);
        }
        const hashPassword = await bcrypt.hash(userDto.password, 5); //{ пароль , соль}
        const user = await this.userService.createUser({ ...userDto, password: hashPassword });
        return this.generateToken(user);
    }

    private async generateToken(user: User) {
        const payload = { email: user.email, id: user.id, role: user.roles };
        return {
            token: this.jwtService.sign(payload)
        }
    }

    // async logout() {
    //     const user = await this.jwtService.verify(token);
    //     if (!user) {

    //     }
    // }

    // private async deleteToken(user: User) {
    //     const tokenVarify = await this.jwtService.verify(token);
    //     if (!tokenVarify) {
    //         throw new HttpException("Пользователь не залогинен!", HttpStatus.BAD_REQUEST)
    //     }
    //     return
    // }
}
