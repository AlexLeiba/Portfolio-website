'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useWindowSize } from '@/lib/useWindowSize';
import { Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import breakpoints from '@/lib/breakpoint';
import { cn } from '@/lib/utils';

const MOBILE_MAX_BREAKPOINT = breakpoints.mobile.breakpoints.max;

function AuthLinks() {
  const [windowWidth] = useWindowSize();
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
  const router = useRouter();

  function handleNavLinkClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    router.push(e.currentTarget.href);
    setOpenBurgerMenu(false);
  }

  // PREVENT SCROLLING WHEN BURGER MENU IS OPEN
  useEffect(() => {
    if (openBurgerMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openBurgerMenu]);

  return (
    <div className='flex gap-4 dark:text-baseline-200'>
      {windowWidth < MOBILE_MAX_BREAKPOINT && (
        <div>
          {openBurgerMenu ? (
            <X onClick={() => setOpenBurgerMenu(!openBurgerMenu)} />
          ) : (
            <Menu onClick={() => setOpenBurgerMenu(!openBurgerMenu)} />
          )}
        </div>
      )}

      {/* DESKTOP NAVBAR */}
      {windowWidth > MOBILE_MAX_BREAKPOINT ? (
        <div className='flex gap-8'>
          <>
            <Link href='#about'>
              <p className='text-sm'>About me</p>
            </Link>
            <Link href='#projects'>
              <p className='text-sm'>My projects</p>
            </Link>
            <Link href='#skills'>
              <p className='text-sm'>Skills</p>
            </Link>
            <Link href='#contact'>
              <p className='text-sm'>Contact</p>
            </Link>
          </>
        </div>
      ) : (
        //  MOBILE NABAR
        <div
          className={cn(
            'mt-14 h-full backdrop-blur-lg  w-full z-10 fixed top-0 right-0 left-0 bottom-0 text-black dark:text-white font-bold',
            [
              'transition-all duration-200 ease-in-out ',
              openBurgerMenu ? 'translate-x-0' : 'translate-x-full',
            ]
          )}
        >
          <div className='flex  flex-col z-20  justify-center items-center gap-12  pt-24'>
            <Link href='#about' onClick={handleNavLinkClick}>
              <p className='text-xl'>About me</p>
            </Link>
            <Link href='#projects' onClick={handleNavLinkClick}>
              <p className='text-xl'>My projects</p>
            </Link>
            <Link href='#skills' onClick={handleNavLinkClick}>
              <p className='text-xl'>Skills</p>
            </Link>
            <Link href='#contact' onClick={handleNavLinkClick}>
              <p className='text-xl'>Contact</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default AuthLinks;
