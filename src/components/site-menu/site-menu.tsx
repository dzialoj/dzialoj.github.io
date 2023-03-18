import React, { useState } from 'react';
import './site-menu.scss';

export default function SiteMenuButton(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <button className='btn' onClick={(e) => setIsOpen(!isOpen)}>
      <svg viewBox='0 0 160 80' width='40' height='40'>
        <rect className='top-line' fill='#fff' width='350' height='8'></rect>
        <rect className='center-line' fill='#fff' y='40' x='30' width='350' height='8'></rect>
        <rect className='bottom-line' fill='#fff' y='80' width='350' height='8'></rect>
      </svg>
    </button>
  );
}
