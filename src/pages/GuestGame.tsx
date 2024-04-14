import React, { useEffect, useState } from 'react';
import { ITable, ITableGame } from '../types/table.type';
import { useConnectSocket } from '../hooks/useConnectSocket';
import Table from '../components/Table';
import styles from '../styles/bg.module.scss';
import BGImg from '../assets/bg.png';
import {ReactComponent as BestLogo} from '../assets/best logo.svg';
import {ReactComponent as ITLogo} from '../assets/logo.svg';
import { useConnectSocketGame } from '../hooks/useConnectSocketGame';
import TableGame from '../components/TableGame';

export default function GuestGamePage() {
  const resTable = useConnectSocketGame();
  const table = !resTable ? [] : (JSON.parse(resTable) as ITableGame[]);

  // useEffect(() => {
  //   socketService.tableInfo().then((res) => {
  //     setTable(res);
  //   });

  //   socketService.newTableInfo().then((res) => {
  //     setTable(res);
  //   });
  // }, []);

  return (
    <>
      <div className={styles['main-container']}>
        <div className={styles['bg']} style={{
          backgroundImage: `url(${BGImg})`
        }} />

        {/*<div className={styles['header-block']} />*/}

        <div className={styles['header']}>
          <span className={styles['header__logo']}>
            <BestLogo />
          </span>

          <div className={styles['header__title']}>
            ТАБЛИЦЯ ЛІДЕРІВ
          </div>

          <span className={styles['header__logo']}>
            <ITLogo />
          </span>
        </div>

        <TableGame table={table} />
      </div>
    </>
  );
}
