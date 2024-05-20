import { Controller, Get, HttpCode, HttpStatus, Param, UseGuards } from '@nestjs/common';
import { JwtRequiredGuard } from 'src/auth/guard';
import { BienService } from './bien.service';
import { GetAccount } from 'src/auth/decorator'
import { Account } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('biens')
export class BienController {
  constructor(private bienService: BienService, private prisma: PrismaService) {}

  /*
  Route: /biens
  Recupere tout les biens
  */
  @Get()
  @HttpCode(HttpStatus.OK)
  async biens() {
    return this.bienService.getBiens();
  }

  /*
  Route: /biens/:id_bien
  Recupere le bien ayant <id_bien>
  */
  @Get(':id_bien')
  @HttpCode(HttpStatus.OK)
  async bien(@Param('id_bien') id_bien: number) {
    return this.bienService.getBien(id_bien);
  }

  /*
  Route: /biens/bailleur/:id_bailleur
  Recupere tout les biens d'u bailleur <id_bailleur>
  */
  @Get('bailleur/:id_bailleur')
  @HttpCode(HttpStatus.OK)
  async biensParBailleur(@Param('id_bailleur') id_bailleur: number) {
    return this.bienService.biensParBailleur(id_bailleur);
  }
}
