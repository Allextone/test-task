import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { PortfoliosImage } from 'src/image/portfolio-image.model';
import { Portfolio } from 'src/portfolio/portfolio.model';
import { PortfolioModule } from 'src/portfolio/portfolio.module';
import { UserPortfolios } from 'src/portfolio/user-portfolio.model';
import { Role } from 'src/roles/roles.model';
import { RolesModule } from 'src/roles/roles.module';
import { UserRoles } from 'src/roles/user-roles.model';
import { UsersController } from './users.controller';
import { User } from './users.model';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Role, Portfolio, UserRoles, UserPortfolios]),
    RolesModule,
    PortfolioModule,
    forwardRef(() => AuthModule),
  ],
  exports: [
    UsersService,
  ]
})
export class UsersModule { }
