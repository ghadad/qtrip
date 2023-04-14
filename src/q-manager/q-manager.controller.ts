import { Query } from './query.entity';
import { QManagerService } from './q-manager.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Query as QueryDto } from './get-query-dto';
@Controller('q-manager')
export class QManagerController {
  constructor(private qManagerService: QManagerService) {}

  @Get('/all')
  async getAll(): Promise<Query[]> {
    return await this.qManagerService.getAll();
  }

  @Post()
  async add(@Body() query: QueryDto): Promise<Query> {
    const queryEntity: Query = new Query();
    queryEntity.id = query.id;
    this.qManagerService.add(queryEntity);
    return queryEntity;
  }
}
