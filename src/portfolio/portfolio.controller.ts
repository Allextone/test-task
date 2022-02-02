import { Body, Controller, Get, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreatePortfolioDto } from './dto/create-portfolio.dto';
import { DeletePortfolioDto } from './dto/delete-portfolio.dto';
import { Portfolio } from './portfolio.model';
import { PortfolioService } from './portfolio.service';

@ApiTags('Портфолио')
@Controller('portfolio')
export class PortfolioController {

    constructor(private portfolioService: PortfolioService) { }

    @ApiOperation({ summary: 'Создание портфолио' })
    @ApiResponse({ status: 200, type: Portfolio })
    @UseGuards(JwtAuthGuard)
    @Post('/create')
    createPortfolio(@Body() dto: CreatePortfolioDto) {
        return this.portfolioService.createPortfolio(dto)
    }

    @ApiOperation({ summary: 'Просмотр всех портфолио' })
    @ApiResponse({ status: 200, type: Portfolio })
    @Get('/getAll')
    getAllPortfolios() {
        return this.portfolioService.getAllPortfolios()
    }

    @ApiOperation({ summary: 'Удаление портфолио' })
    @ApiResponse({ status: 200 })
    @UseGuards(JwtAuthGuard)
    @Post('/delete')
    deletePortfolio(@Body() dto: DeletePortfolioDto) {
        const deletedPortfolio = this.portfolioService.deletePortfolio(dto);
        return deletedPortfolio;
    }

}
