import React, { useState, useEffect } from 'react';
// import { socketService } from '../services/socket';
import { ITable, ITableGame, IUpdateTable, IUpdateTableGame } from '../types/table.type';
import styles from '../styles/admin.module.scss';
import { SocketService } from '../services/socket';
import { useConnectSocket } from '../hooks/useConnectSocket';
import { Block, BlockContainer } from '../components/block';
import { useConnectSocketGame } from '../hooks/useConnectSocketGame';

interface IUpdateTableChange {
  e: React.ChangeEvent<HTMLInputElement>;
  id: string;
  row: 'mainF' | 'optionF' | 'design' | 'presentation' | 'voice';
}

export default function AdminGamePage() {
  const resTable = useConnectSocketGame();
  const table = !resTable ? [] : (JSON.parse(resTable) as ITableGame[]);

  const [updateTable, setUpdateTable] = useState<IUpdateTableGame[]>([]);
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
    SocketService.socket?.emit('updateTableGame', updateTable);
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
            voice: row === 'voice' ? e.target.value : item.voice,
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
        <Block text={'Основне з.'} />
        <Block text={'Додаткове з.'} />
        <Block text={'Візуальне оф.'} />
        <Block text={'Звукові еф.'} />
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
              value={updateTable[i]?.voice ? updateTable[i].voice : ''}
              onChange={(e) => updateTableChange({ e, id: item.id, row: 'voice' })}
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
