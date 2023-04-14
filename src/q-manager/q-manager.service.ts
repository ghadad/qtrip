import { QueryRepository } from './query.repository';
import { Injectable } from '@nestjs/common';

import { Query } from './query.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class QManagerService {
  constructor(
    @InjectRepository(Query) private queryRepository: Repository<Query>,
  ) {}
  private queries: Query[] = [];

  async getAll(): Promise<Query[]> {
    return await this.queryRepository.find();
  }

  add(query: Query): void {
    this.queries.push(query);
  }
}
