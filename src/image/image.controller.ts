import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateImageDto } from './dto/create-image.dto';
import { DeleteImageDto } from './dto/delete-image.dto';
import { ImageService } from './image.service';

@ApiTags('Картинки')
@Controller('image')
export class ImageController {

    constructor(private imageService: ImageService) { }

    @ApiOperation({ summary: 'Создание картинки' })
    // @ApiResponse({ status: 200, type: Portfolio })
    @Post('/create')
    @UseInterceptors(FileInterceptor('image '))
    createPortfolio(@Body() dto: CreateImageDto,
        @UploadedFile() image) {
        console.log(`dto`, dto)
        return this.imageService.createImage(dto, image)
    }

    @ApiOperation({ summary: 'Просмотр всех картинок' })
    // @ApiResponse({ status: 200, type: Portfolio })
    @Get('/getAll')
    getAllPortfolios() {
        return this.imageService.getAllImages()
    }

    @ApiOperation({ summary: 'Удаление картинки' })
    // @ApiResponse({ status: 200, type: Portfolio })
    @Post('/delete')
    deletePortfolio(@Body() dto: DeleteImageDto) {
        const deletedPortfolio = this.imageService.deleteImage(dto);
        return deletedPortfolio;
    }
}
