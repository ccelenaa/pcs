import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { HttpModule } from '@nestjs/axios';
import { RabbitMQModule } from 'src/rabbitmq/rabbitmq.module';
import { BienModule } from 'src/bien/bien.module';
import { LocationModule } from 'src/location/location.module';

@Module({
  imports: [
    HttpModule,
    BienModule,
    LocationModule,
    RabbitMQModule
  ],
  controllers: [PaymentController],
  providers: [PaymentService]
})
export class PaymentModule {}
