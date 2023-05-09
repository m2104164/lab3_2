import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as basicAuth from 'express-basic-auth';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(
        basicAuth({
            challenge: true,
            users: {
                'user': 'password',
            },
        }),
    );
    await app.setGlobalPrefix('/api');
    const config = new DocumentBuilder()
        .setTitle('Education API')
        .setVersion('1.0')
        .build(); // Конфигурируем сборщик документации
    const document = SwaggerModule.createDocument(app, config); // создаем апи документацию
    SwaggerModule.setup('api_docs', app, document); //включаем документацию Swagger по пути localhost:3001/api_docs
    // await app.setGlobalPrefix('/api'); //глобальный префикс для роутов контроллера
    await app.listen(3001); //устанавливаем порт прослушивания 3001
}

bootstrap();
