import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
// import { FilesModule } from 'src/files/files.module';
import { User } from 'src/users/users.model';
import { PortfolioController } from './portfolio.controller';
import { Portfolio } from './portfolio.model';
import { PortfolioService } from './portfolio.service';
import { UserPortfolios } from './user-portfolio.model';

@Module({
  controllers: [PortfolioController],
  providers: [PortfolioService],
  imports: [
    SequelizeModule.forFeature([User, Portfolio, UserPortfolios]),
    // FilesModule
  ],
  exports: [
    PortfolioService
  ]
})
export class PortfolioModule { }
