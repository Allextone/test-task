import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Post } from "src/posts/posts.model";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";
import { User } from "src/users/users.model";

interface PortfolioCreationAttrs {
    name: string;
    description: string;
    images: string[];
}

@Table({ tableName: 'portfolio' })
export class Portfolio extends Model<Portfolio, PortfolioCreationAttrs> {

    @ApiProperty({ example: 'Зима 2022', description: 'Название портфолио' })
    @Column({ type: DataType.STRING, allowNull: false })
    name: number;

    @ApiProperty({ example: 'Фото с зимних прогулок 2022г.', description: 'Описание портфолио' })
    @Column({ type: DataType.STRING, allowNull: false })
    description: string;

    @ApiProperty({ example: '[image1, image2, image3, ...]', description: 'Фотографии из портфолио' })
    @ForeignKey(() => Post)
    @Column({ type: DataType.STRING, allowNull: false })
    images: string[];

    @BelongsTo(() => )
    author: 
}