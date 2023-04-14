import { EntityRepository, Repository, DataSource } from 'typeorm';
import { Query } from './query.entity';

@EntityRepository()
export class QueryRepository extends Repository<Query> {
  constructor(private dataSource: DataSource) {
    super(Query, dataSource.createEntityManager());
  }
}
