
import { useState } from 'react';
import './table.scss';
import { AnimatePresence } from 'framer-motion';
import TableRow from './TableRow';
import { ITable, ITableGame } from '../types/table.type';
import { Block, BlockContainer } from './block';
import TableRowGame from './TableRowGame';

const name = () => `${Date.now()}`;

interface IProps {
  table: ITableGame[];
}


export default function TableGame({ table }: IProps) {
  return (
    <>
      <BlockContainer>
        <Block text={'Назва команди'} />
        <Block text={'Основне з.'} />
        <Block text={'Додаткове з.'} />
        <Block text={'Візуальне оф.'} />
        <Block text={'Звукові еф.'} />
        <Block text={'Презентація'} />
        <Block text={'Загалом'} />
      </BlockContainer>

      <AnimatePresence>
        {table
          .sort((sortA, sortB) => +sortB.sum - +sortA.sum)
          .map((item) => (
            <TableRowGame key={item.id} data={item} />
          ))}
      </AnimatePresence>
    </>
  );
}
