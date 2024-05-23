import { Module } from '@nestjs/common';
import { TypePrestationService } from './type_prestation.service';
import { TypePrestationController } from './type_prestation.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [TypePrestationController],
  providers: [TypePrestationService]
})
export class TypePrestationModule {}
