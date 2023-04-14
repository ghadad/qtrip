import { Module } from '@nestjs/common';
import { QManagerController } from './q-manager.controller';
import { QManagerService } from './q-manager.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QueryRepository } from './query.repository';
import { Query } from './query.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Query])],
  controllers: [QManagerController],
  providers: [QManagerService],
})
export class QManagerModule {}
