import { Injectable } from '@nestjs/common';
import { bailleur, bien } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BailleurService {

  constructor(private prisma: PrismaService) { }

  async getBailleurs(): Promise<bailleur[]> {
    return await this.prisma.bailleur.findMany();
  }

  async getBailleur(id_bailleur: number): Promise<bailleur> {
    return await this.prisma.bailleur.findFirst({
      where: {
        id: id_bailleur
      }
    });
  }
}
