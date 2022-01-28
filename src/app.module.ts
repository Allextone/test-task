import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./users/users.model";
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/roles.model";
import { UserRoles } from "./roles/user-roles.model";
import { AuthModule } from './auth/auth.module';
import { Portfolio } from "./portfolio/portfolio.model";
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from 'path';
import { PortfolioModule } from "./portfolio/portfolio.module";
import { ImageModule } from './image/image.module';
import { UserPortfolios } from "./portfolio/user-portfolio.model";
import { Image } from "./image/image.model";
import { PortfoliosImage } from "./image/portfolio-image.model";


@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),

        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static'),
        }),

        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRESS_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRESS_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Role, UserRoles, Portfolio, UserPortfolios, Image, PortfoliosImage],
            autoLoadModels: true,
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        FilesModule,
        PortfolioModule,
        ImageModule,
    ]
})

export class AppModule { }