import {
  BadRequestException,
  createParamDecorator,
  ExecutionContext,
  NotFoundException,
} from '@nestjs/common';
import { Request } from 'express';
import { PrismaService } from '../../prisma/prisma.service';
import {ConfigService} from '@nestjs/config';
import {OrganizationService} from '../origanization.service';
import { MenuService } from 'src/menu/menu.service';
import configuration from './../../utils/configuration';

const configService = new ConfigService(configuration())
const prisma: PrismaService = new PrismaService(configService);
const menuService: MenuService = new MenuService(prisma);
const organizationService = new OrganizationService(prisma, menuService);

const ORGANIZATION = configService.get('organization');
const PLATFORM = ORGANIZATION ? 'DEDICATE' : 'MUTUAL';

const getOrganization = (request: Request): string => {
  if(PLATFORM === 'DEDICATE') {
    return ORGANIZATION;
  }

  if(request.headers['organization']) {
    const organization = request.headers['organization'];

    if(typeof organization === 'string') {
      return organization;
    }

    return organization[0];
  }

  var url = /^https?:\/\/([a-zA-Z0-9-]+)\.([a-zA-Z0-9]+)\.([a-zA-Z]+)(:[1-9][0-9]*)?$/g.exec(request.headers['origin']);

  if (!url) {
    return undefined;
  }

  return url[1];
}

export const RequireOrganization = createParamDecorator(async (data: string | undefined, ctx: ExecutionContext) => {
  const request: Request = ctx.switchToHttp().getRequest();

  const organization = getOrganization(request);

  if(!organization) {
    throw new BadRequestException(`Organization is mondatory`);
  }

  request.headers['organization'] = organization;

  const find = await organizationService.getOrganization(organization);

  if (find) {
    return data ? find[data] : find;
  }

  throw new NotFoundException(`Organization ${organization} not found`);
});

export const OptionalOrganization = createParamDecorator(async (data: string | undefined, ctx: ExecutionContext) => {
  const request: Request = ctx.switchToHttp().getRequest();

  const organization = getOrganization(request);

  request.headers['organization'] = organization;

  return organization;
});
