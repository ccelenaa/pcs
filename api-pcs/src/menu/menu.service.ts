import { Injectable } from '@nestjs/common';
import { Menu } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MenuService {

  constructor(private prisma: PrismaService) {}

  async getMenu(organization: string): Promise<Menu[]> {
    return await this.prisma.menu.findMany({
      where: {
        organization_id: organization,
        parent_id: null
      },
      orderBy: {
        position: 'asc'
      },
      include: {
        sub_menus: {
          include: {
            sub_menus: {
              orderBy: {
                position: 'asc'
              }
            }
          },
          orderBy: {
            position: 'asc'
          },
        }
      }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} probe`;
  }
}
