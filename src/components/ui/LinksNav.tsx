import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { NavItemHeaderAnimation } from '@/src/types';

export const navItemsSelected: { [key: string]: NavItemHeaderAnimation } = {
  '/': {
    name: 'home',
    x: 1,
    y: -3,
    w: '60px'
  },
  '/about': {
    name: 'about',
    x: 65,
    y: -3,
    w: '60px'
  },
  '/projects': {
    name: 'projects',
    x: 130,
    y: -3,
    w: '75px'
  },
  '/blog': {
    name: 'blog',
    x: 209,
    y: -3,
    w: '50px'
  }
};

const LinksNav = () => {

  let pathname = usePathname() as string;
  return (
    <>
      {
        Object.entries(navItemsSelected).map(([path, { name }]) => {

          const isActive = path === pathname;

          return (
            <Link
              key={path}
              href={path}
              className={clsx(
                'hidden lg:inline-block transition ease py-[2px] px-[10px] text-sm',
                {
                  'font-bold': isActive,
                }
              )}
              style={{
                color: isActive ? 'var(--accent-rust)' : 'var(--ink-muted)',
                fontFamily: 'var(--font-body)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                fontSize: '0.75rem',
                fontWeight: isActive ? 700 : 500,
              }}>

              {name}

            </Link>
          )
        })
      }
    </>
  )
}

export default LinksNav;