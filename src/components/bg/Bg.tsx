import React from 'react';
import BGImg from '../../assets/bg.png';
import './bg.css';

export default function Bg() {
  return (
    <div
      className={'bg'}
      style={{
        backgroundImage: `url(${BGImg})`,
      }}
    />
  );
}
