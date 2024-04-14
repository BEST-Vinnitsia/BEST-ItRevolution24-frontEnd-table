export interface ITable {
  id: string;
  commandName: string;
  mainF: string;
  optionF: string;
  design: string;
  presentation: string;
  sum: string;
}

export interface IUpdateTable extends Omit<ITable, 'commandName' | 'sum'> {}

export interface ITableGame {
  id: string;
  commandName: string;
  mainF: string;
  optionF: string;
  design: string;
  voice: string;
  presentation: string;
  sum: string;
}

export interface IUpdateTableGame extends Omit<ITableGame, 'commandName' | 'sum'> {}