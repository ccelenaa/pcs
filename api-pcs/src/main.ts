import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ConfigService } from '@nestjs/config';
import configuration from './utils/configuration';
import { getEnv } from './utils/tools';
import { Metrics } from './interceptor/metrics';
import { MetricsExceptionFilter } from './filters/metricsException';
import { PrometheusService } from './prometheus/prometheus.service';

const configService = new ConfigService(configuration());

async function bootstrap() {
  const port = configService.get('server.port') ?? 3000;
  const app = await NestFactory.create(AppModule, {
    rawBody: true,
  });

  app.useGlobalInterceptors(new Metrics(PrometheusService.getInstance()));
  app.useGlobalFilters(new MetricsExceptionFilter(PrometheusService.getInstance()));
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

  await app.listen(port);
}
bootstrap();
