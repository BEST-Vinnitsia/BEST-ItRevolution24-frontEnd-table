import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

// Imports
import { AdminPage, GuestPage, GuestGamePage,  AdminGamePage } from './imports';

export default function Router() {
  return useRoutes([
    { path: 'admin', element: <AdminPage /> },
    { path: 'admin-game', element: <AdminGamePage /> },
    { path: '', element: <GuestPage /> },
    { path: 'game', element: <GuestGamePage /> },
  ]);
}
