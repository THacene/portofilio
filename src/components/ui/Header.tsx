import Link from 'next/link';
import HeaderAnimation from '../utils/HeaderAnimation';
import MobileMenuNav from './MobileMenuNav';
import NavItem from './NavItem';
import { siteConfig } from '@/src/configs/config';

const Header = () => {
  return (
    <HeaderAnimation>
      <nav className='w-10/12 lg:max-w-screen-md flex items-center justify-between flex-row relative py-8 sm:pb-8 bg-opacity-60 gap-5 lg:gap-0'
           style={{ color: 'var(--ink)' }}>

        <div>
          <h1>
            <Link href='/' className="font-bold text-lg hover:opacity-70 transition-opacity"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--ink)', textDecoration: 'none' }}>
              <strong>{siteConfig.author_surname}</strong>
              <span className="text-xs ml-2" style={{ fontFamily: 'var(--font-mono)', color: 'var(--ink-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                .dev
              </span>
            </Link>
          </h1>
        </div>

        <div className='ml-[-0.80rem]'>

          <MobileMenuNav />

          <NavItem />

        </div>

      </nav>
    </HeaderAnimation>
  )
}

export default Header;