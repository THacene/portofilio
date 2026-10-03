'use client';
import { useEffect, useState } from 'react';
import AnimationContainer from '../utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';
import { CardProjectProps } from '@/src/types';
import SectionContainer from '../utils/SectionContainer';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import CardProject from '@/src/components/content/CardProject';
import Link from 'next/link';
import { Skeleton } from '../ui/skeleton';

const ProjectsSection = () => {
  const [projectSearch, setProjectSearch] = useState<string>('');
  const [allProjectsInfo, setAllProjectsInfo] = useState<CardProjectProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Fetch GitHub repositories when the component mounts or search changes
  useEffect(() => {
    let isMounted = true;
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/fetch-projects?search=${encodeURIComponent(projectSearch)}`);
        const data = await response.json();
        if (isMounted) {
          if (Array.isArray(data)) {
            setAllProjectsInfo(data);
          } else {
            setAllProjectsInfo([]);
          }
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
        if (isMounted) {
          setAllProjectsInfo([]);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchProjects();

    return () => {
      isMounted = false;
    };
  }, [projectSearch]);

  // Generate JSON-LD structured data for SEO and social sharing safely
  const generateJsonLd = (projects: CardProjectProps[]) => {
    if (!Array.isArray(projects)) {
      return '{}';
    }

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: projects.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'CreativeWork',
          name: project.title,
          description: project.des,
          url: project.repo,
          image: project.link,
          keywords: Array.isArray(project.topics) ? project.topics.join(', ') : '',
        },
      })),
    };

    return JSON.stringify(jsonLd);
  };

  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <TitleSectionPageContainer title="Projects" />

        {/* Add JSON-LD metadata for the page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generateJsonLd(allProjectsInfo),
          }}
        />

        <AnimationContainer customClassName="w-full flex flex-col gap-4 mb-4">
          <p 
            className="w-full text-base leading-relaxed"
            style={{ color: 'var(--ink-muted)', maxWidth: '640px', lineHeight: '1.75' }}
          >
            A comprehensive index of software projects, open source repositories, client work, 
            and engineering experiments I&apos;ve built. For the full archive, check my{' '}
            <Link
              href={siteConfig.social.github}
              target="_blank"
              style={{ color: 'var(--accent-rust)', fontWeight: 600, textDecoration: 'underline' }}
            >
              GitHub profile
            </Link>
            .
          </p>
        </AnimationContainer>

        {/* Search Input Section */}
        <AnimationContainer customClassName="w-full flex flex-col justify-center items-center mb-6">
          <div 
            className="w-full flex items-center h-12 transition-all ease"
            style={{
              background: 'var(--paper-warm)',
              border: '1.5px solid var(--border-sketch)',
              borderRadius: '3px',
              boxShadow: '2px 2px 0 var(--border-dark)'
            }}
          >
            <div className="grid place-items-center h-full w-12" style={{ color: 'var(--accent-rust)' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              className="h-full w-full outline-none text-sm bg-transparent px-2 placeholder:text-[var(--ink-muted)] transition-all ease"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--ink)' }}
              type="text"
              id="search"
              placeholder="Search projects (Languages, tags, keywords...)"
              value={projectSearch}
              onChange={(e) => setProjectSearch(e.target.value)}
            />
          </div>
        </AnimationContainer>

        {/* Display Projects or "No projects found" message */}
        <article className="w-full flex flex-col gap-6 mx-auto">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="w-full h-auto p-6 glass-card">
                <Skeleton className="w-1/3 h-6 mb-4 skeleton-bright" />
                <Skeleton className="w-full h-4 skeleton-bright mb-2" />
                <Skeleton className="w-2/3 h-4 skeleton-bright" />
              </div>
            ))
          ) : Array.isArray(allProjectsInfo) && allProjectsInfo.length > 0 ? (
            allProjectsInfo.map(
              ({ id, title, des, category, repo, link, topics }) => (
                <CardProject
                  key={id}
                  title={title}
                  des={des}
                  category={category}
                  repo={repo}
                  link={link}
                  topics={topics}
                />
              )
            )
          ) : (
            <AnimationContainer customClassName="w-full flex flex-col justify-center items-center py-12">
              <div 
                className="text-center p-8 w-full max-w-md"
                style={{
                  background: 'var(--paper-warm)',
                  border: '1.5px dashed var(--border-sketch)',
                  borderRadius: '3px'
                }}
              >
                <h3 
                  className="text-lg font-bold"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--ink)' }}
                >
                  No projects found
                </h3>
                <p className="text-sm mt-2" style={{ color: 'var(--ink-muted)' }}>
                  Try a different search query or clear the filter.
                </p>
              </div>
            </AnimationContainer>
          )}
        </article>
      </div>
    </SectionContainer>
  );
};

export default ProjectsSection;
