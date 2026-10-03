import Link from 'next/link';
import AnimationContainer from '../utils/AnimationContainer';
import ExternalLink from './ExternalLink';
import { siteConfig } from '@/src/configs/config';

const Footer = () => {
  return (
    <footer className="w-full lg:max-w-screen-md flex flex-col justify-center items-center mx-auto">
      <hr className="w-full mb-8 border-[var(--border-sketch)]" />

      <AnimationContainer customClassName="w-full grid place-items-center grid-cols-3 gap-1 lg:gap-4 pb-8 sm:grid-cols-3 mx-3">
        <div className="flex flex-col space-y-4">
          <Link
            href="/"
            className="flex items-center gap-2 transition ease text-sm text-[var(--ink-muted)] hover:text-[var(--accent-rust)]"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="flex items-center gap-2 transition ease text-sm text-[var(--ink-muted)] hover:text-[var(--accent-rust)]"
          >
            About
          </Link>

          <Link
            href="/projects"
            className="flex items-center gap-2 transition ease text-sm text-[var(--ink-muted)] hover:text-[var(--accent-rust)]"
          >
            Projects
          </Link>
        </div>

        <div className="flex flex-col space-y-4">
          <ExternalLink 
            href={siteConfig.social.github} 
            customClassName="flex items-center gap-2 transition ease text-sm text-[var(--ink-muted)] hover:text-[var(--accent-rust)]"
          >
            GitHub
          </ExternalLink>

          <ExternalLink 
            href={siteConfig.social.linkedin} 
            customClassName="flex items-center gap-2 transition ease text-sm text-[var(--ink-muted)] hover:text-[var(--accent-rust)]"
          >
            LinkedIn
          </ExternalLink>
        </div>

        <div className="flex flex-col space-y-4">
          <Link
            href="/#contactme"
            className="flex items-center gap-2 transition ease text-sm text-[var(--ink-muted)] hover:text-[var(--accent-rust)]"
          >
            Contact
          </Link>
        </div>
      </AnimationContainer>

      {/* Copyright */}
      <div className="w-full text-center pb-6">
        <p className="text-sm text-[var(--ink-muted)]">
          © {new Date().getFullYear()}{' '}
          <span className="font-semibold text-[var(--ink-light)]" style={{ fontFamily: 'var(--font-display)' }}>
            {siteConfig.author}
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
