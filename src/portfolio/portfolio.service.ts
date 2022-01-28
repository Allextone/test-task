import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from 'src/files/files.service';
import { CreatePortfolioDto } from './dto/create-portfolio.dto';
import { DeletePortfolioDto } from './dto/delete-portfolio.dto';
import { Portfolio } from './portfolio.model';

@Injectable()
export class PortfolioService {

    constructor(@InjectModel(Portfolio) private PortfolioRepository: typeof Portfolio) { }

    async createPortfolio(dto: CreatePortfolioDto) {
        // const portfolio = await this.PortfolioRepository.create({ ...dto });
        const portfolio = await this.PortfolioRepository.create(dto);
        return portfolio;
    }

    async getAllPortfolios() {
        const portfolio = await this.PortfolioRepository.findAll({ include: { all: true } });
        return portfolio;
    }

    async deletePortfolio(dto: DeletePortfolioDto) {
        const portfolio = await this.PortfolioRepository.destroy();
        return portfolio;
    }
}
