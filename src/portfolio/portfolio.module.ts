import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { Image } from 'src/image/image.model';
import { ImageModule } from 'src/image/image.module';
import { PortfoliosImage } from 'src/image/portfolio-image.model';
import { User } from 'src/users/users.model';
import { PortfolioController } from './portfolio.controller';
import { Portfolio } from './portfolio.model';
import { PortfolioService } from './portfolio.service';
import { UserPortfolios } from './user-portfolio.model';

@Module({
  controllers: [PortfolioController],
  providers: [PortfolioService],
  imports: [
    SequelizeModule.forFeature([Portfolio, User, UserPortfolios, Image, PortfoliosImage]),
    ImageModule,
    forwardRef(() => AuthModule),
  ],
  exports: [
    PortfolioService
  ]
})
export class PortfolioModule { }
