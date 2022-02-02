import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";
import { JwtAuthGuard } from "./auth/jwt-auth.guard";
import { ValidationPipe } from "./pipes/validation.pipe";

async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('portfolio-publication-api')
        .setDescription('Documentation for project')
        .setVersion('1.0.0')
        .addTag('Vislohuzov Aleksey')
        .build()

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);
    // app.useGlobalGuards(JwtAuthGuard);
    app.useGlobalPipes(new ValidationPipe()) //через запятую можно передавать любое кол-во пайпов

    await app.listen(PORT, () => console.log(`Server is work on port ${PORT}`))
}

start();