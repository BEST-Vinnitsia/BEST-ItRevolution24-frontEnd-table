import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

// Imports
import { AdminPage, TablePage } from './imports';

export default function Router() {
  return useRoutes([
    { path: 'admin', element: <AdminPage /> },
    { path: '', element: <TablePage /> },
  ]);
}
