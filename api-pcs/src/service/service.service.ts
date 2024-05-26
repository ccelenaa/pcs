import { Injectable } from '@nestjs/common';
import { bien, service } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ServiceService {

  constructor(private prisma: PrismaService) { }

  async gets(): Promise<service[]> {
    return await this.prisma.service.findMany();
  }

  async get(id_service: number): Promise<service> {
    return await this.prisma.service.findFirst({
      where: {
        id: id_service
      }
    });
  }

}
