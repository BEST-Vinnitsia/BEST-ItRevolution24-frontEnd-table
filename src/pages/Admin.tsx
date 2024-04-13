import React, { useState, useEffect } from 'react';
// import { socketService } from '../services/socket';
import { ITable, IUpdateTable } from '../types/table.type';
import styles from '../styles/admin.module.scss';
import { SocketService } from '../services/socket';
import { useConnectSocket } from '../hooks/useConnectSocket';
import { Block, BlockContainer } from '../components/block';

interface IUpdateTableChange {
  e: React.ChangeEvent<HTMLInputElement>;
  id: string;
  row: 'mainF' | 'optionF' | 'design' | 'presentation';
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
        table[i]?.mainF === updateTable[i]?.mainF &&
        table[i]?.optionF === updateTable[i]?.optionF &&
        table[i]?.design === updateTable[i]?.design &&
        table[i]?.presentation === updateTable[i]?.presentation
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
            mainF: row === 'mainF' ? e.target.value : item.mainF,
            optionF: row === 'optionF' ? e.target.value : item.optionF,
            design: row === 'design' ? e.target.value : item.design,
            presentation: row === 'presentation' ? e.target.value : item.presentation,
          };
        }

        return item;
      }),
    );
  };

  useEffect(() => {
    send()
  }, [updateTable]);

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

      {table.map((item, i) => (
        <BlockContainer>
          <Block text={item.commandName} />

          <div className={styles.tableColum}>
            <input
              type="text"
              value={updateTable[i]?.mainF ? updateTable[i].mainF : ''}
              onChange={(e) => updateTableChange({ e, id: item.id, row: 'mainF' })}
            />
          </div>

          <div className={styles.tableColum}>
            <input
              type="text"
              value={updateTable[i]?.optionF ? updateTable[i].optionF : ''}
              onChange={(e) => updateTableChange({ e, id: item.id, row: 'optionF' })}
            />
          </div>

          <div className={styles.tableColum}>
            <input
              type="text"
              value={updateTable[i]?.design ? updateTable[i].design : ''}
              onChange={(e) => updateTableChange({ e, id: item.id, row: 'design' })}
            />
          </div>

          <div className={styles.tableColum}>
            <input
              type="text"
              value={updateTable[i]?.presentation ? updateTable[i].presentation : ''}
              onChange={(e) => updateTableChange({ e, id: item.id, row: 'presentation' })}
            />
          </div>

          <Block text={item.sum} />
        </BlockContainer>
      ))}
    </>
  );
}
