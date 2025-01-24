import Link from 'next/link';
import React from 'react';

function AuthLinks() {
  return (
    <div className='flex gap-4 dark:text-baseline-200'>
      <Link href='#about-me'>
        <p className='text-xs'>About me</p>
      </Link>
      <Link href='#my-projects'>
        <p className='text-xs'>My projects</p>
      </Link>
      <Link href='#skills'>
        <p className='text-xs'>Skills</p>
      </Link>
      <Link href='#contact'>
        <p className='text-xs'>Contact</p>
      </Link>
    </div>
  );
}

export default AuthLinks;
