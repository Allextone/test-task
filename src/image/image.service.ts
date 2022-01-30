import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from 'src/files/files.service';
import { CreateImageDto } from './dto/create-image.dto';
import { DeleteImageDto } from './dto/delete-image.dto';
import { Image } from './image.model';

@Injectable()
export class ImageService {

    constructor(@InjectModel(Image) private ImageRepository: typeof Image,
        private filesService: FilesService) { }

    async createImage(dto: CreateImageDto, image: any) {
        const fileName = await this.filesService.createFile(image);
        const imagePost = await this.ImageRepository.create({ ...dto, image: fileName });
        return imagePost;
    }

    async getAllImages() {
        const portfolio = await this.ImageRepository.findAll({ include: { all: true, order: ['createdAt', 'ASC'] } });
        return portfolio;
    }

    async deleteImage(dto: DeleteImageDto) {
        const portfolio = await this.ImageRepository.destroy();
        return portfolio;
    }

}
