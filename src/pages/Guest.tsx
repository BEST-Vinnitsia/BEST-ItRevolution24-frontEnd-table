import React from 'react';
import Header from '../components/header/Header';
import Bg from '../components/bg/Bg';
import { Row } from '../components/table/Row';
import { Item } from '../components/table/Item';
import { AnimatePresence, motion } from 'framer-motion';
import './styles.css';
import { useAnimation } from '../hooks/useAnimation';
import { useTable1Context } from '../contexts/table1Context';

interface IAnimateRow {
  row: ITable;
}

export default function GuestPage() {
  const { table } = useTable1Context();

  return (
    <>
      <div className={'main-container'}>
        <Bg />
        <Header />

        <Row>
          <Item text={'Назва команди'} />
          <Item text={'Основний ф.'} />
          <Item text={'Додатковий ф.'} />
          <Item text={'Дизайн'} />
          <Item text={'Презентація'} />
          <Item text={'Загалом'} />
        </Row>

        <AnimatePresence>
          {table
            .sort((sortA, sortB) => +sortB.sum - +sortA.sum)
            .map((item) => (
              <AnimateRow key={item.id} row={item} />
            ))}
        </AnimatePresence>
      </div>
    </>
  );
}

const AnimateRow = ({ row }: IAnimateRow) => {
  const animations = useAnimation();

  return (
    <motion.div {...animations}>
      <Row>
        <Item text={row.commandName} />
        <Item text={row.mainF} />
        <Item text={row.optionF} />
        <Item text={row.design} />
        <Item text={row.presentation} />
        <Item text={row.sum} />
      </Row>
    </motion.div>
  );
};
