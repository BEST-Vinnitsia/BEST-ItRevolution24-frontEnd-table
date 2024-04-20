import React from 'react';
import './table.css';

interface IProps {
  children: React.ReactNode;
}

export const Row = ({ children }: IProps) => {
  return <div className={'table-row'}>{children}</div>;
};
