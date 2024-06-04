import { Body, Controller, Get, Headers, HttpCode, HttpStatus, Param, Post, RawBodyRequest, Req, UseGuards } from '@nestjs/common';
import { GetCompte } from 'src/auth/decorator';
import { JwtRequiredGuard, JwtOptionalGuard } from 'src/auth/guard';
import { PaymentService } from './payment.service';
import { location, voyageur } from '@prisma/client';
import { LocationService } from 'src/location/location.service';
import { BienService } from 'src/bien/bien.service';

@Controller('payments')
export class PaymentController {
  constructor(
    private readonly bienService: BienService,
    private readonly paymentService: PaymentService,
    private readonly locationService: LocationService
  ) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtRequiredGuard)
  @Post('locations/:id_bien')
  async bien(
    @Param('id_bien') id_bien: number,
    @GetCompte() compte: voyageur,
    @Headers('Origin') origin: string
  ) {
    const bien = await this.bienService.get(id_bien);
    const location = await this.locationService.create({
      id_bien: BigInt(bien.id),
      id_voyageur: compte.id,
      prix: bien.prix,
      date_debut: new Date(),
      date_fin: new Date(),
    } as location);

    return await this.paymentService.location(compte, location, origin);
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
