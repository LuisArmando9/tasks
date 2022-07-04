import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
const generateApiDocumentation = (app: INestApplication) =>{
  const config = new DocumentBuilder()
    .setTitle('Documentacios de tares')
    .setDescription('La descripción de api tareas')
    .setVersion('1.0')
    .addTag('task')
    .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

};
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  generateApiDocumentation(app);
  await app.listen(3000);
}
bootstrap();
