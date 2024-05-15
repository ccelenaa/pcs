import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { HttpService, HttpModule } from '@nestjs/axios';
import { Account, Member, Organization, Wallet } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { catchError, EMPTY, firstValueFrom, lastValueFrom, map, Observable, retry, RetryConfig } from 'rxjs';
import { RabbitMQService } from 'src/rabbitmq/rabbitmq.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PaymentService {
  constructor(
    private configService: ConfigService,
    private prisma: PrismaService,
    private rabbitmqService: RabbitMQService,
    private httpService: HttpService
  ) {
    // this.subscribes();
  }

  subscribes() {
    this.rabbitmqService.events.on('connected', async () => {
      console.log('[ Bleme ] Rabbitmq "Connnexion" event detected : SUBSCRIBE to queue succeded ...');

      await this.rabbitmqService.subscribe({queue: 'bleme.payment.succeded.queue', retry: 5000}, {}, async (msg: any) => {
        console.log('[ Bleme ] [ RabbitMQ ] Message recept : ', {msg});
      });
      
      console.log('[ Bleme ] ... SUBSCRIPTION OK');
    });
  }

  async checkout(organization: Organization, account: Account, priceId: string, origin: string): Promise<Object> {
    const price = await this.prisma.price.findFirst({where:{id: priceId}});
    const wallet = await this.prisma.wallet.findFirst({where: {id: price.model_id}});

    const url = `${origin}/payment`;

    console.log({url});
    const data = {
        currency: 'eur',
        successUrl: `${url}/success`,
        cancelUrl: `${url}/cancel`,
        productName: `${wallet.title} (${organization.name})`,
        productDescription: 'Description du don',
        images: ['https://www.campingoasis.com/wp-content/uploads/2018/04/merci.jpg'],
        email: account ? account.email : 'guest@email.com',
        amount: price.value['price'],
        metadata: {
            pot: `${wallet.title} (${organization})`,
            price_id: price.value['price'],
            currency: price.value['currency'],
            organization_id: organization.id,
            transaction_id: '00000000-0000-0000-0000-000000000000',
            account_id: account ? account.id : '00000000-0000-0000-0000-000000000000',
            member_id: account && account['members'][0] ? account['members'][0].id : '00000000-0000-0000-0000-000000000000',
        },
    };

    const paymentHost = this.configService.get('payment.host');

    const response = await firstValueFrom(
      this.httpService.post(
        `${paymentHost}/payment`, data, {responseType: 'json'}
      ).pipe(
        retry({count: 12, delay: 3000}),
        catchError(() => {
          return EMPTY;
        })
      )
    );

    return response['data'];

    // return await this.httpService.post(`${paymentUrl}/payment`, data, {responseType: 'json'})
    // .pipe(retry(3))
    // .pipe(map((res) => res))
    // .pipe(catchError((err) => {
    //   console.log(err);
    //   throw new ForbiddenException('API not available');
    // }));

  }

  async webhooks(body: Buffer, signature: string) {
    return await this.rabbitmqService.publish('bleme.payment.succeded.queue.dlx', 'wait', {signature, body});

    // const paymentUrl = process.env.PAYMENT_API;
    // const response = await firstValueFrom(
    //   this.httpService.post(
    //     `${paymentUrl}/payment/webhooks/event`, body, {responseType: 'json', headers: {signature}}
    //   ).pipe(
    //     retry({count: 12, delay: 3000}),
    //     catchError(() => {
    //       return EMPTY;
    //     })
    //   )
    // );
    // return response['data'];
  }
}
