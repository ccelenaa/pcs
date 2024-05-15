import { Controller, Get, HttpCode, HttpStatus, Req, UseGuards } from '@nestjs/common';
import { JwtOptionalGuard } from 'src/auth/guard';
import { OrganizationService } from './origanization.service';
import { Organization } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { RequireOrganization } from 'src/organization/decorator/organization.decorator';

@Controller('organizations')
export class OrganizationController {
  constructor(private organizationService: OrganizationService, private prisma: PrismaService) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtOptionalGuard)
  @Get('current')
  current(@RequireOrganization() organization: Organization) {
    return organization;
  }

  @Get()
  all() {
    return this.organizationService.getOrganizations();
  }
}
