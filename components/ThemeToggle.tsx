'use client';

import React from 'react';
import { useTheme } from '@/lib/useThemeContext';
import { cn } from '@/lib/utils';
import { Moon, Sun } from 'lucide-react';

function ThemeToggle() {
  const { setIsDarkMode, darkMode } = useTheme();

  return (
    <div
      onClick={() => {
        darkMode ? setIsDarkMode(false) : setIsDarkMode(true);
      }}
      className={cn(
        'p-[0.5]  w-10 bg-black rounded-full hover:opacity-70 cursor-pointer transition-all flex items-center justify-between',
        [darkMode ? ' bg-white' : ' bg-black ']
      )}
    >
      <div
        className={cn('rounded-full  transition-all', [
          darkMode ? 'translate-x-[22px]  ' : ' translate-x-[1px]',
        ])}
      >
        <Moon
          width={15}
          height={15}
          className={cn('  text-white ', [darkMode ? ' hidden  ' : ' block '])}
        />
        <Sun
          width={15}
          height={15}
          className={cn(' text-black ', [darkMode ? '  block' : ' hidden '])}
        />
      </div>
    </div>
  );
}

export default ThemeToggle;
