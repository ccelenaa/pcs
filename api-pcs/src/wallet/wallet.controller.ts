import { Controller, Get, Param } from '@nestjs/common';
import { WalletService } from './wallet.service';

@Controller('wallets')
export class WalletController {
  constructor(private readonly pageService: WalletService) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.pageService.findOne(id);
  }

}
