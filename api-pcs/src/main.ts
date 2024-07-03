import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import configuration from './utils/configuration';

const configService = new ConfigService(configuration());

async function bootstrap() {
  const port = configService.get('server.port') ?? 3000;
  const app = await NestFactory.create(AppModule, {
    rawBody: true,
  });

  app.enableCors({
    allowedHeaders: ['content-type'],
    origin: /.*$/i,
    credentials: true,
    methods: ['POST', 'PUT', 'DELETE', 'GET', 'OPTIONS'],
  });

  app.useGlobalPipes(new ValidationPipe({}));
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     forbidUnknownValues: false

  //   }),
  // );
  app.use(cookieParser());

  (BigInt.prototype as any).toJSON = function () {
    return this.toString();
  };

  const config = new DocumentBuilder()
  .setTitle('API Documentation')
  .setDescription('API documentation for all routes')
  .setVersion('1.0')
  .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api-docs', app, document);

  await app.listen(port);
}
bootstrap();
