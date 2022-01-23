import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";
import { ROLES_KEY } from "./role-auth.decorator";

@Injectable()
export class RolesGuard implements CanActivate {

    constructor(private jwtService: JwtService,
        private reflector: Reflector) {

    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        try {
            const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
                context.getHandler(),
                context.getClass(),
                // чтобы рефлектор понимал, какие данные ему необходимо доставать 
            ]);
            if (!requiredRoles) {
                return true;
            }
            const req = context.switchToHttp().getRequest();
            const authHeader = req.headers.authorization;
            const bearer = authHeader.split(' ')[0];
            const token = authHeader.split(' ')[1];

            if (bearer !== 'Bearer' || !token) {
                throw new UnauthorizedException({ message: "Пользователь не авторизован!" });
            }

            const user = this.jwtService.verify(token);
            req.user = user;
            // return true;
            return user.role.some((role: { value: string; }) => requiredRoles.includes(role.value)); //после того как мы jwt-токен декодировали, мы обращаемя к ролям, внутри которые внутри этого токена лежали, и с помощью функции some проверяем, есть ли у пользователя такая роль, которая необходима для этого эндпоинта

        } catch (e) {
            console.log(`error`, e)
            throw new HttpException("Нет доступа!", HttpStatus.FORBIDDEN);
        }
    }

}