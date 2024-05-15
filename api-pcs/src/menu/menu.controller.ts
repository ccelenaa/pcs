import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MenuService } from './menu.service';
import { RequireOrganization } from 'src/organization/decorator';

@Controller('menus')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get()
  getMenu(@RequireOrganization('id') organization: string) {
    return this.menuService.getMenu(organization);
  }

  @Post()
  create(@Param('id') id: string) {
    return this.menuService.findOne(+id);
  }
}
