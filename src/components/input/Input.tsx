import React from 'react';
import './input.css';

interface IProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ value, onChange }: IProps) => {
  return (
    <div className={'input'}>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};
