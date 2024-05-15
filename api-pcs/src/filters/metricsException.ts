import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Logger,
  } from '@nestjs/common';
  
import { Request, Response } from 'express';
import { PrometheusService } from 'src/prometheus/prometheus.service';
  // ...
  
  @Catch()
  export class MetricsExceptionFilter implements ExceptionFilter {
    private readonly logger = new Logger(MetricsExceptionFilter.name);
    private metrics = null;

    constructor(private prometheusService: PrometheusService) {
      this.metrics = this.prometheusService.registeredMetrics;
    }

    catch(exception: HttpException, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const request = ctx.getRequest<Request>();
      const response = ctx.getResponse<Response>();

      const path = request.route?.path;
      const method = request.method;
      const status_code = exception.getStatus ? exception.getStatus() : 500;

      this.metrics['status'].inc({status_code});
      this.metrics['pathCount'].inc({status_code, path: path ? path : `/${path}`, method})
          
      response
        .status(status_code)
        .json({
          statusCode: status_code,
          message: exception.toString(),
          timestamp: new Date().toISOString(),
          path: request.url
        });
    }

    getType(element) {
      const types = [String, HttpException, Error, Object];

      return types.find(type => element instanceof type);
    }
  }