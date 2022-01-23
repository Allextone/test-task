import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Post } from "src/posts/posts.model";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";

interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: 'user@gmail.com', description: 'Почтовый адресс' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string;

    @ApiProperty({ example: '123456', description: 'Пароль пользователя' })
    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    @ApiProperty({ example: 'true', description: 'Забанен пользователь или нет' })
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    banned: boolean;

    @ApiProperty({ example: 'SPAM', description: 'Причина бана' })
    @Column({ type: DataType.STRING, allowNull: true })
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];

    @HasMany(() => Post)
    posts: Post[];

}