import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";
import { User } from "src/users/users.model";

interface PostCreationAttrs {
    title: string;
    content: string;
    userId: number;
    image: string;
}

@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostCreationAttrs> {
    @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: 'Весенний луг', description: 'Название поста' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    title: string;

    @ApiProperty({ example: 'Запечатлённый вдали от людей луг, на котором пасутся животные.', description: 'Описание' })
    @Column({ type: DataType.STRING, allowNull: false })
    content: string;

    @ApiProperty({ example: 'https://st3.depositphotos.com/14847044/17090/i/450/depositphotos_170900466-stock-photo-sunrise.jpg', description: 'URL картинки' })
    @Column({ type: DataType.STRING, allowNull: false })
    image: string;

    @ApiProperty({ example: '4', description: 'Id пользователя, за которым будет числиться пост.' })
    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER, allowNull: false })
    userId: number;

    @BelongsTo(() => User)
    author: User
}