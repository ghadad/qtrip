import { Module } from '@nestjs/common';
import { QLangService } from './q-lang.service';

@Module({
  providers: [QLangService],
})
export class QLangModule {}
