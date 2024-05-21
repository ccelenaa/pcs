import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AccountModule } from './account/account.module';
import { BienModule } from './bien/bien.module';
import { OrganizationModule } from './organization/origanization.module';
import { PageModule } from './page/page.module';
import { WalletModule } from './wallet/wallet.module';
import { PaymentModule } from './payment/payment.module';
import { RabbitMQModule } from './rabbitmq/rabbitmq.module';
import configuration from './utils/configuration';
import { PrometheusModule } from './prometheus/prometheus.module';
import { APP_FILTER } from '@nestjs/core';
import { MetricsExceptionFilter } from './filters/metricsException';
import { CronModule } from './cron/cron.module';
import { BailleurModule } from './bailleur/bailleur.module';
import { PrestataireModule } from './prestataire/prestataire.module';
import { VoyageurModule } from './voyageur/voyageur.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true, load: [configuration]}),
    MenuModule,
    WalletModule,
    PaymentModule,
    AuthModule,
    PageModule,
    PrismaModule,
    AccountModule,
    BienModule,
    BailleurModule,
    PrestataireModule,
    VoyageurModule,
    OrganizationModule,
    RabbitMQModule,
    PrometheusModule,
    CronModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})

export class AppModule {}
