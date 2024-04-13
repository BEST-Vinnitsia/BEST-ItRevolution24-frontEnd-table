import React, { useEffect, useState } from 'react';
import { ITable } from '../types/table.type';
import { useConnectSocket } from '../hooks/useConnectSocket';
import Table from '../components/Table';
import styles from '../styles/bg.module.scss';
import BGImg from '../assets/bg.png';
import {ReactComponent as BestLogo} from '../assets/best logo.svg';
import {ReactComponent as ITLogo} from '../assets/logo.svg';

export default function GuestPage() {
  const resTable = useConnectSocket();
  const table = !resTable ? [] : (JSON.parse(resTable) as ITable[]);

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

        <div className={styles['header-block']} />

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

        <Table table={table} />
      </div>
    </>
  );
}
