'use client';
import { cn } from '@/lib/utils';
import React, { useEffect } from 'react';

export function ProgressBar() {
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    function handleScroll() {
      const progressScrollValue = window.scrollY;
      const allAvailableScrollValue =
        window.document.documentElement.scrollHeight;

      const scrollProgressPercentage =
        (progressScrollValue / allAvailableScrollValue) * 100 + 6;
      setProgress(Math.floor(scrollProgressPercentage));
    }
    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={cn('fixed top-14 right-0 left-0 z-50')}>
      <div
        style={{ width: `${progress < 10 ? 0 : progress}%` }}
        className={` dark:bg-[#7493f0] bg-black h-px transition-all  ease-in-out`}
      ></div>
    </div>
  );
}
