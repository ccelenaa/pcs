import { Body, Controller, Get, Headers, HttpCode, HttpStatus, Param, Post, RawBodyRequest, Req, UseGuards } from '@nestjs/common';
import { Account, Organization } from '@prisma/client';
import { GetAccount } from 'src/auth/decorator';
import { JwtOptionalGuard } from 'src/auth/guard';
import { OptionalOrganization, RequireOrganization } from 'src/organization/decorator';
import { PaymentService } from './payment.service';

@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtOptionalGuard)
  @Post('checkout/:price')
  async findOne(
    @Param('price') id: string,
    @RequireOrganization() organization: Organization,
    @GetAccount() account: Account,
    @Headers('Origin') origin: string
  ) {
    return await this.paymentService.checkout(organization, account, id, origin);
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
