import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PageService } from './page.service';
import { CreateProbeDto } from './dto/create-probe.dto';
import { UpdateProbeDto } from './dto/update-probe.dto';

@Controller('pages')
export class PageController {
  constructor(private readonly pageService: PageService) {}

  @Post()
  create(@Body() createProbeDto: CreateProbeDto) {
    return this.pageService.create(createProbeDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.pageService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProbeDto: UpdateProbeDto) {
    return this.pageService.update(+id, updateProbeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pageService.remove(+id);
  }
}
