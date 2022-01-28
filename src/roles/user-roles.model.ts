import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/users/users.model";
import { Role } from "./roles.model";


@Table({ tableName: 'user_roles', createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles> {
    @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: 'AD2MIN', description: 'ID роли' })
    @ForeignKey(() => Role)
    @Column({ type: DataType.INTEGER })
    roleId: number;

    @ApiProperty({ example: 'Администратор', description: 'ID пользователя' })
    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    userId: number;

}