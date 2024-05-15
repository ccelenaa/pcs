import { Module } from '@nestjs/common';
import { OrganizationService } from './origanization.service';
import { OrganizationController } from './origanization.controller';
import { AuthModule } from 'src/auth/auth.module';
import { MenuModule } from 'src/menu/menu.module';

@Module({
  imports: [AuthModule, MenuModule],
  controllers: [OrganizationController],
  providers: [OrganizationService]
})
export class OrganizationModule {}
