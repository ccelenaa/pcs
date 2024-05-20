import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtRequiredGuard } from 'src/auth/guard';
import { CronService } from './cron.service';
import { GetAccount } from 'src/auth/decorator'
import { Account } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('facturation')
export class FacturationController {
  constructor(private cronService: CronService, private prisma: PrismaService) {}

  @UseGuards(JwtRequiredGuard)
  @Get('facturation')
  getMe(@GetAccount() account: Account) {
    return account;
  }
}
