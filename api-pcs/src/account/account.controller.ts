import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtRequiredGuard } from 'src/auth/guard';
import { AccountService } from './account.service';
import { GetAccount } from 'src/auth/decorator'
import { Account } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('accounts')
export class AccountController {
  constructor(private accountService: AccountService, private prisma: PrismaService) {}

  @UseGuards(JwtRequiredGuard)
  @Get('me')
  getMe(@GetAccount() account: Account) {
    return account;
  }
}
