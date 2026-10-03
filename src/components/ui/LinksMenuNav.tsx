import Link from 'next/link';

const LinksMenu = [
  {
    name: 'Home',
    path: '/',
    delay: '150ms'
  },
  {
    name: 'About',
    path: '/about',
    delay: '175ms'
  },
  {
    name: 'Projects',
    path: '/projects',
    delay: '200ms'
  },
  {
    name: 'Blog',
    path: '/blog',
    delay: '225ms'
  }
];

const LinksMenuNav = () => {
  return (
    <>
      {
        LinksMenu.map(({ name, path, delay }) => (
          <li
            key={name}
            className='text-sm font-semibold'
            style={{ 
              transitionDelay: delay, 
              color: 'var(--ink-light)',
              borderColor: 'var(--border-sketch)',
              fontFamily: 'var(--font-body)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              fontSize: '0.75rem',
            }}>
            <Link 
              href={path} 
              className='pb-4 transition-colors text-[var(--ink-light)] hover:text-[var(--accent-rust)] block'
            >
              {name}
            </Link>
          </li>
        ))
      }
    </>
  );
};

export default LinksMenuNav;