import React, { useEffect, useState } from 'react';
import { ITable } from '../types/table.type';
import styles from '../styles/table.module.scss';
import { useConnectSocket } from '../hooks/useConnectSocket';

export default function TablePage() {
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
      <div className={styles.tableContainer}>
        <div className={styles.tableRow}>
          <div className={styles.tableColum}>Назва команди</div>
          <div className={styles.tableColum}>Функціонал</div>
          <div className={styles.tableColum}>Код</div>
          <div className={styles.tableColum}>Дизайн</div>
          <div className={styles.tableColum}>В сумі</div>
        </div>

        {table.map((item) => (
          <div key={item.id} className={styles.tableRow}>
            <div className={styles.tableColum}>{item.commandName}</div>
            <div className={styles.tableColum}>{item.functional}</div>
            <div className={styles.tableColum}>{item.code}</div>
            <div className={styles.tableColum}>{item.design}</div>
            <div className={styles.tableColum}>{item.sum}</div>
          </div>
        ))}
      </div>
    </>
  );
}
