import ExternalLink from '../ui/ExternalLink';
import AnimationContainer from '../utils/AnimationContainer';
import ShowSkills from '../utils/ShowSkills';
import { CardProjectProps } from '@/src/types';
import React from 'react';

const CardProject = ({
  title,
  des,
  category,
  repo,
  link,
  topics
}: CardProjectProps) => {
  return (
    <AnimationContainer customClassName="w-full glass-card p-6 transition-all ease-in-out duration-300">
      <div className="w-full flex flex-col justify-center items-start gap-4">
        <div className="w-full flex items-start justify-between gap-4">
          <h3 
            className="text-xl lg:text-2xl font-bold tracking-tight"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--ink)' }}
          >
            {title}
          </h3>
          <span 
            className="text-xs uppercase px-2 py-0.5"
            style={{ 
              fontFamily: 'var(--font-mono)', 
              color: 'var(--accent-rust)',
              border: '1px solid var(--border-sketch)',
              background: 'var(--paper)'
            }}
          >
            Project
          </span>
        </div>

        <p 
          className="text-sm md:text-base leading-relaxed"
          style={{ color: 'var(--ink-muted)', lineHeight: '1.7' }}
        >
          {des}
        </p>

        {/* Topics (Tags) Section */}
        {topics && topics.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {topics.map((topic: React.ReactNode, index: React.Key | null | undefined) => (
              <span
                key={index}
                className="project-tag"
              >
                {topic}
              </span>
            ))}
          </div>
        )}

        <div className="w-full flex justify-between items-center flex-wrap gap-4 pt-4 border-t border-[var(--border-sketch)] mt-1">
          <div className="flex items-center flex-wrap gap-2">
            <ShowSkills skills={category} />
          </div>

          <div className="flex items-center gap-3">
            {repo && (
              <ExternalLink
                href={repo}
                customClassName="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200"
              >
                <span 
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold tracking-wider uppercase transition-all"
                  style={{
                    border: '1.5px solid var(--ink)',
                    background: 'var(--paper)',
                    color: 'var(--ink)',
                    boxShadow: '2px 2px 0 var(--ink)',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Source
                </span>
              </ExternalLink>
            )}

            {link && (
              <ExternalLink
                href={link}
                customClassName="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200"
              >
                <span 
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold tracking-wider uppercase transition-all"
                  style={{
                    border: '1.5px solid var(--accent-rust)',
                    background: 'var(--accent-rust)',
                    color: 'var(--paper)',
                    boxShadow: '2px 2px 0 var(--ink)',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5zm7.25-.75a.75.75 0 01.75-.75h3.5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0V6.31l-5.47 5.47a.75.75 0 11-1.06-1.06l5.47-5.47H12.25a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                  </svg>
                  Visit
                </span>
              </ExternalLink>
            )}
          </div>
        </div>
      </div>
    </AnimationContainer>
  );
};

export default CardProject;
