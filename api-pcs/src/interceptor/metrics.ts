
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Response, Request } from 'express';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PrometheusService } from 'src/prometheus/prometheus.service';

@Injectable()
export class Metrics implements NestInterceptor {
  private metrics = null;
  constructor(
    private prometheusService: PrometheusService
  ) {
    this.metrics = this.prometheusService.registeredMetrics;
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      tap(() => {
        const ctx = context.switchToHttp();
        const request = ctx.getRequest<Request>();
        const response = ctx.getResponse<Response>();

        const path = request.route?.path;
        const method = request.method;
        const status_code = response.statusCode;

        this.metrics['status'].inc({status_code});
        this.metrics['pathCount'].inc({status_code, path, method});
      })

    );
  }
}
