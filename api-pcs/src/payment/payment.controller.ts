import { Body, Controller, Get, Headers, HttpCode, HttpStatus, Param, Post, RawBodyRequest, Req, UseGuards } from '@nestjs/common';
import { GetCompte } from 'src/auth/decorator';
import { JwtOptionalGuard } from 'src/auth/guard';
import { PaymentService } from './payment.service';

@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtOptionalGuard)
  @Post('checkout/:price')
  async findOne(
    @Param('price') id: string,
    // @RequireOrganization() organization: Organization,
    @GetCompte() compte: Object,
    @Headers('Origin') origin: string
  ) {
    // return await this.paymentService.checkout(null, compte, id, origin);
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
