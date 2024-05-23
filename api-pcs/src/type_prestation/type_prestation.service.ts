import { Injectable } from '@nestjs/common';
import { bien, type_prestation } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TypePrestationService {

  constructor(private prisma: PrismaService) { }

  async gets(): Promise<type_prestation[]> {
    return await this.prisma.type_prestation.findMany();
  }

  async get(id_type_prestation: number): Promise<type_prestation> {
    return await this.prisma.type_prestation.findFirst({
      where: {
        id: id_type_prestation
      }
    });
  }

}
