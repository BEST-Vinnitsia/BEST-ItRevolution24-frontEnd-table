interface ITable1 {
  id: string;
  commandName: string;
  mainF: string;
  optionF: string;
  design: string;
  presentation: string;
  sum: string;
}

interface IUpdateTable1Change {
  e: React.ChangeEvent<HTMLInputElement>;
  id: string;
  row: 'mainF' | 'optionF' | 'design' | 'presentation';
}