import { Injectable } from '@nestjs/common';
import { transaction } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TransactionService {

  constructor(private prisma: PrismaService) {}

  async gets(): Promise<transaction[]> {
    return await this.prisma.transaction.findMany({
      orderBy: {
        date_creation: 'desc'
      }
    });
  }

  async get(session_id: string): Promise<transaction> {
    return await this.prisma.transaction.findFirst({
      where: {
        session_id
      }
    });
  }

  async update(transaction: transaction): Promise<transaction> {
    return await this.prisma.transaction.update({
      where: {
        session_id: transaction.session_id
      },
      data: {
        ...transaction
      }
    });
  }

  async supprimer(id_transaction: number): Promise<transaction> {
    return await this.prisma.transaction.update({
      where: {
        id: id_transaction
      },
      data: {
        date_creation: new Date()
      }
    });
  }
}
