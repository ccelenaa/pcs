import { Injectable } from '@nestjs/common';
import { bien, prestation, type_prestation } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PrestationService {

  constructor(private prisma: PrismaService) { }

  async gets(): Promise<prestation[]> {
    return await this.prisma.prestation.findMany();
  }

  async get(id_prestation: number): Promise<prestation> {
    return await this.prisma.prestation.findFirst({
      where: {
        id: id_prestation
      }
    });
  }

  async setPrestataire(id_prestation: number, id_prestataire: number | null): Promise<prestation> {
    return await this.prisma.prestation.update({
      where: {
        id: id_prestation
      },
      data: {
        id_prestataire
      },
      include: {
        prestataire: true
      }
    });
  }
}
