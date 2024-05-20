import { Controller, Get, HttpCode, HttpStatus, Param, UseGuards } from '@nestjs/common';
import { JwtRequiredGuard } from 'src/auth/guard';
import { BailleurService } from './bailleur.service';
import { GetAccount } from 'src/auth/decorator'
import { Account } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('bailleurs')
export class BailleurController {
  constructor(private bailleurService: BailleurService, private prisma: PrismaService) {}

  /*
  Route: /biens
  Recupere tout les biens
  */
  @Get()
  @HttpCode(HttpStatus.OK)
  async bailleurs() {
    return this.bailleurService.getBailleurs();
  }

  /*
  Route: /biens/:id_bien
  Recupere le bien ayant <id_bien>
  */
  @Get(':id_bailleur')
  @HttpCode(HttpStatus.OK)
  async bailleur(@Param('id_bailleur') id_bailleur: number) {
    return this.bailleurService.getBailleur(id_bailleur);
  }
}
