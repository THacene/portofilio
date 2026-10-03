'use client';

import { siteConfig } from '@/src/configs/config';
import AnimationContainer from '../utils/AnimationContainer';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="w-full flex flex-col items-start justify-center relative">

      <AnimationContainer customClassName="flex flex-col items-start justify-center p-0">
        {/* Editorial label */}
        <div className="editorial-label mb-8">
          Portfolio — 2026
        </div>

        {/* Name - Large editorial serif */}
        <h1 className="font-black text-4xl sm:text-5xl lg:text-7xl tracking-tight mb-3 leading-[1.1]"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--ink)', letterSpacing: '-0.03em' }}>
          {siteConfig.author}
        </h1>

        {/* Decorative line */}
        <div className="flex items-center gap-3 mb-6">
          <div style={{ width: '60px', height: '2px', background: 'var(--accent-rust)' }}></div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--ink-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Engineer & Builder
          </span>
        </div>

        {/* Title */}
        <h2 className="flex items-center gap-2 text-lg lg:text-xl mb-8"
            style={{ color: 'var(--ink-muted)', fontFamily: 'var(--font-body)' }}>
          <span className="relative w-[max-content] font-mono typing-animation">
            System Engineering
          </span>
        </h2>

        {/* Description - editorial pull quote style */}
        <div className="pull-quote max-w-xl mb-10">
          I build things that work. From robust web platforms to immersive XR experiences — 
          every project is an opportunity to solve real problems with thoughtful engineering.
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <Link href="#contactme" className="btn-gradient text-base">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Say Hello
          </Link>
          <Link href="#projects" className="btn-outline text-base">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.25 3A2.25 2.25 0 001 5.25v9.5A2.25 2.25 0 003.25 17h13.5A2.25 2.25 0 0019 14.75v-9.5A2.25 2.25 0 0016.75 3H3.25zM2.5 9v5.75c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75V9h-15z" clipRule="evenodd" />
            </svg>
            See Work
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <Link
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-3 border border-[var(--border-sketch)] text-[var(--ink-muted)] hover:border-[var(--accent-rust)] hover:text-[var(--accent-rust)] transition-all duration-300 hover:-translate-y-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </Link>
          <Link
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-3 border border-[var(--border-sketch)] text-[var(--ink-muted)] hover:border-[var(--accent-rust)] hover:text-[var(--accent-rust)] transition-all duration-300 hover:-translate-y-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </Link>
          <Link
            href={`mailto:${siteConfig.social.email}`}
            aria-label="Email"
            className="p-3 border border-[var(--border-sketch)] text-[var(--ink-muted)] hover:border-[var(--accent-rust)] hover:text-[var(--accent-rust)] transition-all duration-300 hover:-translate-y-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </Link>
        </div>
      </AnimationContainer>
    </div>
  );
};

export default Hero;
