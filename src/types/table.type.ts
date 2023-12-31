export interface ITable {
  id: string;
  commandName: string;
  functional: string;
  code: string;
  design: string;
  sum: string;
}

export interface IUpdateTable extends Omit<ITable, 'commandName' | 'sum'> {}