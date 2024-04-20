import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

// Imports
import { AdminPage, GuestPage } from './imports';
import { Table1Provider } from '../contexts/table1Context';

export default function Router() {
  return useRoutes([
    {
      path: '',
      element: <Table1Provider />,
      children: [
        { path: '', element: <GuestPage /> },
        { path: 'admin', element: <AdminPage /> },
      ],
    },
  ]);
}
