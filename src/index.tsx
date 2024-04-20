import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import './styles.css';
import { Table1Provider } from './contexts/table1Context';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
);

reportWebVitals();
