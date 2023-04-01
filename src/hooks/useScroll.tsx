import { useEffect, useState } from 'react';

interface IUseScroll {
  animatedScrollTo: (anchor: string) => void;
}

export default function useScroll(): IUseScroll {
  const animatedScrollTo = (anchor: string): void => {
    const el = document.getElementById(anchor);
    
    if (el) {
      el.scrollTo({
        top: 100,
        behavior: 'smooth',
      });
    }
  };

  return { animatedScrollTo };
}
