import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtRequiredGuard } from 'src/auth/guard';
import { CronService } from './cron.service';
import { GetCompte } from 'src/auth/decorator'
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('facturation')
export class FacturationController {
  constructor(private cronService: CronService, private prisma: PrismaService) {}

  @UseGuards(JwtRequiredGuard)
  @Get('facturation')
  getMe(@GetCompte() compte: Object) {
    return compte;
  }
}
