import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Portfolio } from 'src/portfolio/portfolio.model';
import { User } from 'src/users/users.model';
import { FilesModule } from 'src/files/files.module';
import { PortfoliosImage } from './portfolio-image.model';
import { Image } from './image.model'

@Module({
  providers: [ImageService],
  controllers: [ImageController],
  imports: [
    SequelizeModule.forFeature([User, Portfolio, Image, PortfoliosImage]),
    FilesModule
  ]
})
export class ImageModule { }
