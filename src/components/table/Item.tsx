import React from 'react';
import './table.css';

interface IProps {
  text: string;
}

export const Item = ({ text }: IProps) => {
  return (
    <div className={'table-item'}>
      <span>{text}</span>
    </div>
  );
}
