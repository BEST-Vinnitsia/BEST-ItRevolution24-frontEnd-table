import React, { useEffect, useState } from 'react';
import { ITable } from '../types/table.type';
import { useConnectSocket } from '../hooks/useConnectSocket';
import Table from '../components/Table';

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

  return <Table table={table} />;
}
