import { Injectable } from '@nestjs/common';
import { Organization } from '@prisma/client';
import { MenuService } from 'src/menu/menu.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrganizationService {
    constructor(private prisma: PrismaService, private menuService: MenuService) {}

    async getOrganization(reference: string): Promise<Organization> {
        const organization = await this.prisma.organization.findFirst({
            where: {reference},
            include: {
                seats: true,
            }
        });

        const menu = await this.menuService.getMenu(organization.id);
        organization['menu'] = menu;

        return organization;
    }

    async getOrganizations(): Promise<Organization[]> {
        return await this.prisma.organization.findMany();
    }
}
