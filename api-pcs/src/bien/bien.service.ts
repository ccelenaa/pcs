import { Injectable } from '@nestjs/common';
import { bien } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BienService {

  constructor(private prisma: PrismaService) { }

  async getBiens(): Promise<bien[]> {
    return await this.prisma.bien.findMany();
  }

  async getBien(id_bien: number): Promise<bien> {
    return await this.prisma.bien.findFirst({
      where: {
        id: id_bien
      }
    });
  }

  async biensParBailleur(id_bailleur: number): Promise<bien[]> {
    return await this.prisma.bien.findMany({
      where: {
        id_bailleur: id_bailleur
      }
    });
  }
}
