import { Controller, Get, HttpCode, HttpStatus, Req, UseGuards } from '@nestjs/common';
import { PrometheusService } from './prometheus.service';

@Controller('metrics')
export class PrometheusController {
  constructor(private prometheusService: PrometheusService) {}

  @Get()
  async metrics() {
    return await this.prometheusService.getMetrics();
  }
}
