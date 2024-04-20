import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

// Imports
import { Table1AdminPage, Table1GuestPage } from './imports';
import { Table1Provider } from '../contexts/table1Context';

export default function Router() {
  return useRoutes([
    {
      path: '',
      element: <Table1Provider />,
      children: [
        { path: '', element: <Table1GuestPage /> },
        { path: 'admin', element: <Table1AdminPage /> },
      ],
    },
  ]);
}
