import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RolesService } from 'src/roles/roles.service';
import { addRoleDto } from './dto/add-role.dto';
import { banUserDto } from './dto/ban-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { deleteUserDto } from './dto/delete-user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User,
        private roleService: RolesService) { }

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        const role = await this.roleService.getRoleByValue('ADMIN');
        if(role) {
            await user.$set('roles', [role.id]);
            user.roles = [role];
        }
        return user;
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll({ include: { all: true }, order: [['id', 'DESC']] });
        return users;
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({ where: { email }, include: { all: true } });
        return user;
    }

    async addRole(dto: addRoleDto) {
        const user = await this.userRepository.findByPk(dto.userId);
        const role = await this.roleService.getRoleByValue(dto.value);
        if (user && role) {
            await user.$add('role', role.id);
            return dto;
        }
        throw new HttpException("Пользователь или роль не найдены!", HttpStatus.NOT_FOUND);

    }

    async banUser(dto: banUserDto) {
        const user = await this.userRepository.findByPk(dto.userId);
        if (!user) {
            throw new HttpException("Пользователь не найден!", HttpStatus.NOT_FOUND);
        }
        user.banned = true;
        user.banReason = dto.banReason;
        await user.save();
        return user;
    }

    async deleteUser(dto: deleteUserDto) {
        const user = await this.userRepository.destroy();
        if (!user) {
            throw new HttpException("Пользователь не найден!", HttpStatus.NOT_FOUND)
        }
        return "Пользователь был удалён!";
    }
}

//просмотр функционала получение всех польхзователей только для администраторов
