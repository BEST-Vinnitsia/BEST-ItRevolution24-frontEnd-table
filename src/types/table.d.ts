interface ITable {
  id: string;
  commandName: string;
  mainF: string;
  optionF: string;
  design: string;
  presentation: string;
  sum: string;
}

interface IUpdateTableChange {
  e: React.ChangeEvent<HTMLInputElement>;
  id: string;
  row: 'mainF' | 'optionF' | 'design' | 'presentation';
}