import { Module } from '@nestjs/common';
import { PrometheusService } from './prometheus.service';
import { PrometheusController } from './prometheus.controller';

@Module({
  imports: [],
  controllers: [PrometheusController],
  providers: [PrometheusService]
})
export class PrometheusModule {}
