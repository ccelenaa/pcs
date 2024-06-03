import { Body, Controller, Get, Headers, HttpCode, HttpStatus, Param, Post, RawBodyRequest, Req, UseGuards } from '@nestjs/common';
import { GetCompte } from 'src/auth/decorator';
import { JwtRequiredGuard, JwtOptionalGuard } from 'src/auth/guard';
import { PaymentService } from './payment.service';
import { voyageur } from '@prisma/client';

@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtRequiredGuard)
  @Post('biens/:id_bien')
  async bien(
    @Param('id_bien') id_bien: number,
    @GetCompte() compte: Object,
    @Headers('Origin') origin: string
  ) {
    return await this.paymentService.bien(compte as voyageur, id_bien, origin);
  }


  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtRequiredGuard)
  @Post('prestations/:id_prestation')
  async prestation(
    @Param('id_prestation') id_prestation: string,
    @GetCompte() compte: Object,
    @Headers('Origin') origin: string
  ) {
    return await this.paymentService.prestation(compte as voyageur, null, origin);
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtOptionalGuard)
  @Post('webhooks/intent/success')
  async webhooks(
    @Body() body,
    @Headers('stripe-signature') signature: string,
    @Req() req: RawBodyRequest<Request>
  ) {
    return await this.paymentService.webhooks(req.rawBody, signature);
  }

}
