import { useState } from 'react';
import './table.scss';
import { AnimatePresence } from 'framer-motion';
import TableRow from './TableRow';
import { ITable } from '../types/table.type';

const name = () => `${Date.now()}`;

interface IProps {
  table: ITable[];
}
export default function Table({ table }: IProps) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Назва команди</th>
          <th>Функціонал</th>
          <th>Код</th>
          <th>Дизайн</th>
          <th>В сумі</th>
        </tr>
      </thead>

      <AnimatePresence>
        <tbody>
          {table
            .sort((sortA, sortB) => +sortB.sum - +sortA.sum)
            .map((item) => (
              <TableRow key={item.id} data={item} />
            ))}
        </tbody>
      </AnimatePresence>
    </table>
  );
}
