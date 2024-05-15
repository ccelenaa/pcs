import { Injectable } from '@nestjs/common';
import { Wallet } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProbeDto } from './dto/create-probe.dto';
import { UpdateProbeDto } from './dto/update-probe.dto';

@Injectable()
export class WalletService {
  constructor(private prisma: PrismaService) {}

  async findOne(id: string): Promise<Wallet> {
    const wallet = await this.prisma.wallet.findFirst({
      where: {
        id: id,
      }
    });

    const prices = await this.prisma.price.findMany({
      where: {
        model: 'wallet',
        model_id: wallet.id
      },
    });

    wallet['prices'] = prices;

    return wallet;
  }
}
