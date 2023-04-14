export default class QueryModel {
  name: string;
  executer?: string;
  columns: ColumnModel[];
  config: QueryConfigModel;
  convert?: boolean;
}

export class ColumnModel {
  field: string;
}

export class QueryConfigModel {}
