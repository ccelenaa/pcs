import { Injectable } from '@nestjs/common';
import { bailleur, bien } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BailleurService {

  constructor(private prisma: PrismaService) { }

  async getBailleurs(): Promise<bailleur[]> {
    return await this.prisma.bailleur.findMany({
      include: {
        bien: true,
      },
      orderBy: {
        created_at: 'desc'
      }
    });
  }

  async getBailleur(id_bailleur: number): Promise<bailleur> {
    return await this.prisma.bailleur.findFirst({
      where: {
        id: id_bailleur
      },
      include: {
        bien: true,
      }
    });
  }

  async valider(id_bailleur: number, validation: boolean): Promise<bailleur> {
    return await this.prisma.bailleur.update({
      where: {
        id: id_bailleur
      },
      data: {
        verified_at: validation ? new Date() : null
      },
      include: {
        bien: true
      }
    });
  }

  async suspendre(id_bailleur: number, suspenssion: boolean): Promise<bailleur | Object> {
    return await this.prisma.bailleur.update({
      where: {
        id: id_bailleur
      },
      data: {
        suspended_at: suspenssion ? new Date() : null
      },
      include: {
        bien: true,
      }
    });
  }
}
