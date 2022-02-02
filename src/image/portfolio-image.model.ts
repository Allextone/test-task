import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Portfolio } from "src/portfolio/portfolio.model";
import { Image } from "./image.model";


@Table({ tableName: 'portfolios_image', createdAt: false, updatedAt: false })
export class PortfoliosImage extends Model<PortfoliosImage> {
    @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: '10', description: 'ID портфолио' })
    @ForeignKey(() => Portfolio)
    @Column({ type: DataType.INTEGER })
    portfolioId: number;

    @ApiProperty({ example: '5', description: 'ID картинки' })
    @ForeignKey(() => Image)
    @Column({ type: DataType.INTEGER })
    imageId: number;
}