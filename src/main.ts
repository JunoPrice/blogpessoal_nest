import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('Blog Pessoal')
  .setDescription('Projeto Blog Pessoal')
  .setContact("Jonas","https://github.com/JunoPrice","jonas.gomes@unesp.br")
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

  // Habilitando globalmente a validação de dados
  app.useGlobalPipes(new ValidationPipe());

  // Habilitando CORS na aplicação
  app.enableCors();

  await app.listen(process.env.PORT ?? 4000);
    process.env.TZ = '-03:00'
}
bootstrap();