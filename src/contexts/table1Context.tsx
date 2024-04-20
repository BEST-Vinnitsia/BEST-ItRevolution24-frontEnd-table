import React, { createContext, useContext, useEffect, useState } from 'react';
import { SocketService } from '../services/socket';
import { Outlet } from 'react-router-dom';

interface IProps {
  table: ITable1[];
  updateTableChange: (data: IUpdateTable1Change) => void;
}

const Table1Context = createContext<IProps>(null!);

interface IContextProvider {
  children?: React.ReactNode;
}

export function Table1Provider({ children }: IContextProvider) {
  const [resData, setResData] = useState<string>('');
  const [table, setTable] = useState<ITable1[]>([]);

  useEffect(() => {
    connectSocket();
  }, []);

  useEffect(() => {
    const getTable = !resData ? [] : (JSON.parse(resData) as ITable1[]);
    setTable(getTable);
  }, [resData]);

  const connectSocket = () => {
    SocketService.createConnection();

    SocketService.socket?.on('get-table-1', (data) => {
      setResData(JSON.stringify(data));
    });

    SocketService.socket?.on('get-new-table-1', (data) => {
      setResData(JSON.stringify(data));
    });
  };

  const updateTableChange = ({ e, id, row }: IUpdateTable1Change) => {
    if (isNaN(+e.target.value)) return;

    SocketService.socket?.emit('update-table-1', { id, [row]: e.target.value });
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
