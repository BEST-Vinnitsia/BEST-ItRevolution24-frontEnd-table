import { useState } from 'react';
import './table.scss';
import { AnimatePresence } from 'framer-motion';
import TableRow from './TableRow';
import { ITable } from '../types/table.type';
import { Block, BlockContainer } from './block';

const name = () => `${Date.now()}`;

interface IProps {
  table: ITable[];
}

export default function Table({ table }: IProps) {
  return (
    <>
      <BlockContainer>
        <Block text={'Назва команди'} />
        <Block text={'Основний ф.'} />
        <Block text={'Додатковий ф.'} />
        <Block text={'Дизайн'} />
        <Block text={'Презентація'} />
        <Block text={'Загалом'} />
      </BlockContainer>

      <AnimatePresence>
        {table
          .sort((sortA, sortB) => +sortB.sum - +sortA.sum)
          .map((item) => (
            <TableRow key={item.id} data={item} />
          ))}
      </AnimatePresence>

      {/*<table className="table">*/}
      {/*  <thead>*/}
      {/*    <tr>*/}
      {/*      <th>Назва команди</th>*/}
      {/*      <th>Функціонал</th>*/}
      {/*      <th>Код</th>*/}
      {/*      <th>Дизайн</th>*/}
      {/*      <th>В сумі</th>*/}
      {/*    </tr>*/}
      {/*  </thead>*/}

      {/*  <AnimatePresence>*/}
      {/*    <tbody>*/}

      {/*    </tbody>*/}
      {/*  </AnimatePresence>*/}
      {/*</table>*/}
    </>
  );
}
