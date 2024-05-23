import { Injectable } from '@nestjs/common';
import { bien } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BienService {

  constructor(private prisma: PrismaService) { }

  async gets(): Promise<bien[]> {
    return await this.prisma.bien.findMany({
      orderBy: {
        id: 'asc'
      }
    });
  }

  async get(id_bien: number): Promise<bien> {
    return await this.prisma.bien.findFirst({
      where: {
        id: id_bien
      }
    });
  }

  async validation(id_bien: number, validation: boolean): Promise<bien> {
    return await this.prisma.bien.update({
      where: {
        id: id_bien
      },
      data: {
        validated_at: validation ? new Date() : null
      }
    });
  }

  async suspenssion(id_bien: number, suspenssion: boolean): Promise<bien | Object> {
    return await this.prisma.bien.update({
      where: {
        id: id_bien
      },
      data: {
        suspended_at: suspenssion ? new Date() : null
      }
    });
  }

  async bailleur_suspenssion(id_bien: number, suspenssion: boolean): Promise<bien | Object> {
    return await this.prisma.bien.update({
      where: {
        id: id_bien
      },
      data: {
        bailleur_suspended_at: suspenssion ? new Date() : null
      }
    });
  }
}
