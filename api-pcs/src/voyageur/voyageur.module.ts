import { Module } from '@nestjs/common';
import { VoyageurService } from './voyageur.service';
import { VoyageurController } from './voyageur.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [VoyageurController],
  providers: [VoyageurService]
})
export class VoyageurModule {}
