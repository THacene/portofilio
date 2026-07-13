import Link from 'next/link';
import HeaderAnimation from '../utils/HeaderAnimation';
import MobileMenuNav from './MobileMenuNav';
import NavItem from './NavItem';
import { siteConfig } from '@/src/configs/config';

const Header = () => {
  return (
    <HeaderAnimation>
      <nav className='w-10/12 lg:max-w-screen-md flex items-center justify-between flex-row relative py-8 sm:pb-8 bg-opacity-60 text-slate-700 gap-5 lg:gap-0'>

        <div>
          <h1>
            <Link href='/' className="gradient-text font-bold text-lg hover:opacity-80 transition-opacity">
              <strong>{siteConfig.author}</strong>
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