import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Portfolio } from "src/portfolio/portfolio.model";
import { User } from "src/users/users.model";
import { PortfoliosImage } from "./portfolio-image.model";

interface ImageCreationAttrs {
    name: string;
    description: string;
    image: string;
    portfolioId: number;
    userId: number;
}

@Table({ tableName: 'image' })
export class Image extends Model<Image, ImageCreationAttrs> {

    @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: 'Мемчик', description: 'Название картинки' })
    @Column({ type: DataType.STRING, allowNull: false })
    name: string;

    @ApiProperty({ example: 'Мой кот следящий за моей работой', description: 'Описание картинки' })
    @Column({ type: DataType.STRING, allowNull: false })
    description: string;

    // @ApiProperty({ example: '[image1, image2, ...]', description: 'Комментарии пользователей' })
    // @Column({ type: DataType.STRING, allowNull: false })
    // comments: string;

    @ApiProperty({ example: 'qwe wqe qweqw', description: 'Название изображения' })
    @Column({ type: DataType.STRING, allowNull: false })
    image: string;

    @ApiProperty({ example: '4', description: 'Id портфолио, за которым будет числиться пост' })
    @ForeignKey(() => Portfolio)
    @Column({ type: DataType.INTEGER, allowNull: false })
    portfolioId: number;

    @ApiProperty({ example: '4', description: 'Id пользователя, за которым будет числиться пост.' })
    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER, allowNull: false })
    userId: number;

    // @BelongsToMany(() => Portfolio, () => PortfoliosImage)
    // author: Portfolio[]

    // @BelongsTo(() => Portfolio)
    // author: Portfolio[]
}