import React, { createContext, useContext, useEffect, useState } from 'react';
import { SocketService } from '../services/socket';
import { Outlet } from 'react-router-dom';

interface IProps {
  table: ITable[];
  updateTableChange: (data: IUpdateTableChange) => void;
}

const Table1Context = createContext<IProps>(null!);

interface IContextProvider {
  children?: React.ReactNode;
}

export function Table1Provider({ children }: IContextProvider) {
  const [resData, setResData] = useState<string>('');
  const [table, setTable] = useState<ITable[]>([]);

  useEffect(() => {
    connectSocket();
  }, []);

  useEffect(() => {
    const getTable = !resData ? [] : (JSON.parse(resData) as ITable[]);
    setTable(getTable);
  }, [resData]);

  const connectSocket = () => {
    SocketService.createConnection();

    SocketService.socket?.on('tableInfo', (data) => {
      setResData(JSON.stringify(data));
    });

    SocketService.socket?.on('newTableInfo', (data) => {
      setResData(JSON.stringify(data));
    });
  };

  const updateTableChange = ({ e, id, row }: IUpdateTableChange) => {
    if (isNaN(+e.target.value)) return;

    SocketService.socket?.emit('updateTable', { id, [row]: e.target.value });
  };

  return (
    <Table1Context.Provider
      value={{
        table,
        updateTableChange,
      }}
    >
      <Outlet />
    </Table1Context.Provider>
  );
}

export function useTable1Context() {
  return useContext(Table1Context);
}
