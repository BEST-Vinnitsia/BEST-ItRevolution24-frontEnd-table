import React, { useState, useEffect } from 'react';
// import { socketService } from '../services/socket';
import { ITable, IUpdateTable } from '../types/table.type';
import styles from '../styles/admin.module.scss';
import { SocketService } from '../services/socket';
import { useConnectSocket } from '../hooks/useConnectSocket';

interface IUpdateTableChange {
  e: React.ChangeEvent<HTMLInputElement>;
  id: string;
  row: 'functional' | 'code' | 'design';
}

export default function AdminPage() {
  const resTable = useConnectSocket();
  const table = !resTable ? [] : (JSON.parse(resTable) as ITable[]);

  const [updateTable, setUpdateTable] = useState<IUpdateTable[]>([]);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);

  useEffect(() => {
    setUpdateTable(table);
  }, [resTable]);

  useEffect(() => {
    for (let i = 0; i < table.length; i++) {
      if (
        table[i]?.functional === updateTable[i]?.functional &&
        table[i]?.code === updateTable[i]?.code &&
        table[i]?.design === updateTable[i]?.design
      ) {
        setIsUpdate(true);
      } else {
        setIsUpdate(false);
        break;
      }
    }
  }, [table, resTable]);

  const send = () => {
    SocketService.socket?.emit('updateTable', updateTable);
  };

  const updateTableChange = ({ e, id, row }: IUpdateTableChange) => {
    if (isNaN(+e.target.value)) return;

    setUpdateTable((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            id: item.id,
            code: row === 'code' ? e.target.value : item.code,
            design: row === 'design' ? e.target.value : item.design,
            functional: row === 'functional' ? e.target.value : item.functional,
          };
        }

        return item;
      }),
    );
  };

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

        {table.map((item, i) => (
          <div key={item.id} className={styles.tableRow}>
            <div className={styles.tableColum}>{item.commandName}</div>

            <div className={styles.tableColum}>
              <input
                type="text"
                value={updateTable[i]?.functional ? updateTable[i].functional : ''}
                onChange={(e) => updateTableChange({ e, id: item.id, row: 'functional' })}
              />
            </div>

            <div className={styles.tableColum}>
              <input
                type="text"
                value={updateTable[i]?.code ? updateTable[i].code : ''}
                onChange={(e) => updateTableChange({ e, id: item.id, row: 'code' })}
              />
            </div>

            <div className={styles.tableColum}>
              <input
                type="text"
                value={updateTable[i]?.design ? updateTable[i].design : ''}
                onChange={(e) => updateTableChange({ e, id: item.id, row: 'design' })}
              />
            </div>

            <div className={styles.tableColum}>{item.sum}</div>
          </div>
        ))}
      </div>

      <p>{isUpdate ? 'Table is actual' : 'Need update'}</p>

      <button onClick={send}>Update</button>
    </>
  );
}
