import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [
    forwardRef(() => UsersModule),
    JwtModule.register({
      //47:55 остановился на написании формы регистрации по jwt токену , форма юзера и роли описана
      secret: process.env.PRIVATEE_KEY || 'SECRET',
      signOptions: {
        expiresIn: '1h'
      }
    })
  ],
  exports: [
    AuthService,
    JwtModule,
  ]
})
export class AuthModule { }
