import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { HttpService, HttpModule } from '@nestjs/axios';
import { voyageur } from '@prisma/client';
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
  
  async location(voyageur: voyageur, id_location: number, origin: string): Promise<Object> {
    const bien = await this.prisma.bien.findFirst({ where: { id: id_location } });

    const url = `${origin}/payment`;

    const data = {
      email: voyageur.email,
      productName: bien.type,
      productDescription: bien.description,
      amount: parseFloat((bien.prix*1.1).toFixed(2)) * 100,
      currency: 'eur',
      metadata: {
        type: `location`,
        id: bien.id,
        product: bien.type,
        price: (bien.prix*1.1).toFixed(2),
        id_compte: voyageur.id,
        type_compte: 'Voyageur',
      },
      successUrl: `${url}/success`,
      cancelUrl: `${url}/cancel`,
      images: ['https://multilok.fr/wp-content/uploads/2022/11/ICONE-SITE-premium-1.jpg'],
    };

    const paymentHost = this.configService.get('payment.host');

    const response = await firstValueFrom(
      this.httpService.post(
        `${paymentHost}/payment`, data, { responseType: 'json' }
      ).pipe(
        retry({ count: 3, delay: 3000 }),
        catchError(() => {
          return EMPTY;
        })
      )
    );

    // await this.prisma.transaction.create({

    // });
  
    return {id: response['data']['id']};

    // return await this.httpService.post(`${paymentUrl}/payment`, data, {responseType: 'json'})
    // .pipe(retry(3))
    // .pipe(map((res) => res))
    // .pipe(catchError((err) => {
    //   console.log(err);
    //   throw new ForbiddenException('API not available');
    // }));
    
  }

  async prestation(voyageur: voyageur, priceId: string, origin: string): Promise<Object> {
    // const price = await this.prisma.price.findFirst({ where: { id: priceId } });
    // const wallet = await this.prisma.wallet.findFirst({ where: { id: price.model_id } });

    const url = `${origin}/payment`;
    
    const data = {
      currency: 'eur',
      successUrl: `${url}/success`,
      cancelUrl: `${url}/cancel`,
      productName: `appar`,
      productDescription: 'Appartement',
      images: ['https://multilok.fr/wp-content/uploads/2022/11/ICONE-SITE-premium-1.jpg'],
      email: 'guest@email.com',
      amount: 222,
      metadata: {
        type: `appartement`,
        produit: `id`,
        price: 333,
        currency: 'eur',
        transaction_id: '00000000-0000-0000-0000-000000000000',
        id_compte: '00000000-0000-0000-0000-000000000000',
        type_compte: 'Voyageur',
      },
    };

    // const data = {
    //   currency: 'eur',
    //   successUrl: `${url}/success`,
    //   cancelUrl: `${url}/cancel`,
    //   productName: `${wallet.title} (${organization.name})`,
    //   productDescription: 'Description du don',
    //   images: ['https://www.campingoasis.com/wp-content/uploads/2018/04/merci.jpg'],
    //   email: account ? account.email : 'guest@email.com',
    //   amount: price.value['price'],
    //   metadata: {
    //     pot: `${wallet.title} (${organization})`,
    //     price_id: price.value['price'],
    //     currency: price.value['currency'],
    //     organization_id: organization.id,
    //     transaction_id: '00000000-0000-0000-0000-000000000000',
    //     account_id: account ? account.id : '00000000-0000-0000-0000-000000000000',
    //     member_id: account && account['members'][0] ? account['members'][0].id : '00000000-0000-0000-0000-000000000000',
    //   },
    // };

    const paymentHost = this.configService.get('payment.host');
    
    const response = await firstValueFrom(
      this.httpService.post(
        `${paymentHost}/payment`, data, { responseType: 'json' }
      ).pipe(
        retry({ count: 12, delay: 3000 }),
        catchError(() => {
          return EMPTY;
        })
      )
    );
    console.log({response});
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
    return await this.rabbitmqService.publish('bleme.payment.succeded.queue.dlx', 'wait', { signature, body });

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

  subscribes() {
    this.rabbitmqService.events.on('connected', async () => {
      console.log('[ Bleme ] Rabbitmq "Connnexion" event detected : SUBSCRIBE to queue succeded ...');

      await this.rabbitmqService.subscribe({ queue: 'bleme.payment.succeded.queue', retry: 5000 }, {}, async (msg: any) => {
        console.log('[ Bleme ] [ RabbitMQ ] Message recept : ', { msg });
      });

      console.log('[ Bleme ] ... SUBSCRIPTION OK');
    });
  }
}
