import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

// Imports
import { AdminPage, GuestPage } from './imports';

export default function Router() {
  return useRoutes([
    { path: 'admin', element: <AdminPage /> },
    { path: '', element: <GuestPage /> },
  ]);
}
