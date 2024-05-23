import { Controller, Get, HttpCode, HttpStatus, Param, UseGuards } from '@nestjs/common';
import { JwtRequiredGuard } from 'src/auth/guard';
import { PrestationService } from './prestation.service';
import { GetAccount } from 'src/auth/decorator'
import { Account } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('prestations')
export class PrestationController {
  constructor(private prestationService: PrestationService, private prisma: PrismaService) {}

  /*
  Route: /biens
  Recupere tout les biens
  */
  @Get()
  @HttpCode(HttpStatus.OK)
  async gets() {
    return this.prestationService.gets();
  }

  /*
  Route: /biens/:id_bien
  Recupere le bien ayant <id_bien>
  */
  @Get(':id_prestation')
  @HttpCode(HttpStatus.OK)
  async get(@Param('id_prestation') id_prestation: number) {
    return this.prestationService.get(id_prestation);
  }

}
