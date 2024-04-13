import React from 'react';
import styles from './block.module.scss';

interface IProps {
  text: string
}

export function Block({text}: IProps) {
  return (
    <div className={styles['block']}>
      <span>{text}</span>
    </div>
  );
}

export function BlockContainer({children} : {children: React.ReactNode}) {
  return (
    <div className={styles['block-container']}>
      {children}
    </div>
  );
}