import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/users/users.model";
import { Portfolio } from "./portfolio.model";


@Table({ tableName: 'user_portfolios', createdAt: false, updatedAt: false })
export class UserPortfolios extends Model<UserPortfolios> {
    @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: '10', description: 'ID портфолио' })
    @ForeignKey(() => Portfolio)
    @Column({ type: DataType.INTEGER })
    portfolioId: number;

    @ApiProperty({ example: '5', description: 'ID пользователя' })
    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    userId: number;
}