import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePortfolioDto } from './dto/create-portfolio.dto';
import { DeletePortfolioDto } from './dto/delete-portfolio.dto';
import { PortfolioService } from './portfolio.service';
// import { Post } from './posts.model';

@ApiTags('Портфолио')
@Controller('portfolio')
export class PortfolioController {

    constructor(private portfolioService: PortfolioService) { }

    @ApiOperation({ summary: 'Создание портфолио' })
    // @ApiResponse({ status: 200, type: Portfolio })
    @Post('/create')
    // @UseInterceptors(FileInterceptor('image '))
    // createPortfolio(@Body() dto: CreatePortfolioDto,
    //     @UploadedFile() image) {
    //     return this.portfolioService.createPortfolio(dto)
    // }
    createPortfolio(@Body() dto: CreatePortfolioDto) {
        return this.portfolioService.createPortfolio(dto)
    }

    @ApiOperation({ summary: 'Просмотр всех портфолио' })
    // @ApiResponse({ status: 200, type: Portfolio })
    @Post('/getAll')
    getAllPortfolios(@Body() dto: CreatePortfolioDto) {
        return this.portfolioService.getAllPortfolios()
    }

    @ApiOperation({ summary: 'Удаление портфолио' })
    // @ApiResponse({ status: 200, type: Portfolio })
    @Post('/delete')
    deletePortfolio(@Body() dto: DeletePortfolioDto) {
        const deletedPortfolio = this.portfolioService.deletePortfolio(dto);
        return deletedPortfolio;
    }

}
