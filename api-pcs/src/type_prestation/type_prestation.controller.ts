import { Controller, Get, HttpCode, HttpStatus, Param, UseGuards } from '@nestjs/common';
import { JwtRequiredGuard } from 'src/auth/guard';
import { TypePrestationService } from './type_prestation.service';
import { GetAccount } from 'src/auth/decorator'
import { Account } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('type_prestations')
export class TypePrestationController {
  constructor(private typePrestationService: TypePrestationService, private prisma: PrismaService) {}

  /*
  Route: /biens
  Recupere tout les biens
  */
  @Get()
  @HttpCode(HttpStatus.OK)
  async biens() {
    return this.typePrestationService.gets();
  }

  /*
  Route: /biens/:id_bien
  Recupere le bien ayant <id_bien>
  */
  @Get(':id_type_prestation')
  @HttpCode(HttpStatus.OK)
  async bien(@Param('id_type_prestation') id_type_prestation: number) {
    return this.typePrestationService.get(id_type_prestation);
  }

}
