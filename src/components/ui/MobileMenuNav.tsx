'use client';

import styles from '@/src/styles/mobileMenu.module.css';
import React, { useEffect } from 'react';
import cn from 'classnames';
import useMenuNav from '@/src/hooks/useMenuNav';
import LinksMenuNav from './LinksMenuNav';

const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className='h-5 w-5 absolute'
      style={{ color: 'var(--ink)' }}
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      {...props}>
      <path
        d='M2.5 7.5H17.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2.5 12.5H17.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

const CrossIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className='h-5 w-5 absolute'
      style={{ color: 'var(--ink)' }}
      viewBox='0 0 24 24'
      width='24'
      height='24'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      fill='none'
      shapeRendering='geometricPrecision'
      {...props}>
      <path d='M18 6L6 18' />
      <path d='M6 6l12 12' />
    </svg>
  );
}

const MobileMenuNav = () => {

  const { isMenuOpen, toggleMenu } = useMenuNav();

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <button
        className={cn(styles.burger, 'visible lg:hidden')}
        aria-label='Toggle menu'
        type='button'
        onClick={toggleMenu}>

        <MenuIcon data-hide={isMenuOpen} />

        <CrossIcon data-hide={!isMenuOpen} />

      </button>
      {
        isMenuOpen && (
          <ul
            className={cn(
              styles.menu,
              'flex flex-col items-start justify-center absolute right-0 text-end p-5 mr-5 shadow-lg',
              styles.menuRendered
            )}
            style={{
              background: 'var(--paper-warm)',
              border: '1.5px solid var(--border-sketch)',
              borderRadius: '4px',
            }}>

            <LinksMenuNav />

          </ul>
        )
      }
    </>
  );
}

export default MobileMenuNav;