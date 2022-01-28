import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Image } from "src/image/image.model";
import { PortfoliosImage } from "src/image/portfolio-image.model";
import { User } from "src/users/users.model";
import { UserPortfolios } from "./user-portfolio.model";

interface PortfolioCreationAttrs {
    name: string;
    description: string;
}

@Table({ tableName: 'portfolio' })
export class Portfolio extends Model<Portfolio, PortfolioCreationAttrs> {

    @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: 'Мой кот', description: 'Название портфолио' })
    @Column({ type: DataType.STRING, allowNull: false })
    name: number;

    @ApiProperty({ example: 'Фото моего кота с прогулки, дома, и с людьми.', description: 'Описание портфолио' })
    @Column({ type: DataType.STRING, allowNull: false })
    description: string;

    // @ApiProperty({ example: '[image1, image2, ...]', description: 'URL картинки' })
    // @Column({ type: DataType.STRING, allowNull: false })
    // images: string;

    @ApiProperty({ example: '4', description: 'Id пользователя, за которым будет числиться портфолио.' })
    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER, allowNull: false })
    userId: number;

    // @BelongsTo(() => User)
    // author: User

    @BelongsToMany(() => User, () => UserPortfolios)
    author: User[];

    @BelongsToMany(() => Image, () => PortfoliosImage)
    images: Image[];
}