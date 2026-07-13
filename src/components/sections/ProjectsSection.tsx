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
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Fetch GitHub repositories when the component mounts
  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/fetch-projects?search=${projectSearch}`);
        const data = await response.json();
        setAllProjectsInfo(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, [projectSearch]);

  // Generate JSON-LD structured data for SEO and social sharing
  const generateJsonLd = (projects: CardProjectProps[]) => {
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
          keywords: project.topics.join(', '),
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

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <p className="w-full text-base text-slate-500 leading-relaxed">
            These are most of the projects I&apos;ve done since I started
            programming, some of them are personal projects, freelance, work,
            practice, or for other situations. If you want to see absolutely all
            my projects, go to my{' '}
            <Link
              href={siteConfig.social.github}
              target="_blank"
              className="text-indigo-600 hover:text-indigo-800 hover:underline transition-all ease font-medium"
            >
              GitHub
            </Link>
            .
          </p>
        </AnimationContainer>

        {/* Search Input Section */}
        <AnimationContainer customClassName="w-full group flex flex-col justify-center items-center mb-8">
          <div className="w-full flex items-center lg:w-3/6 h-12 rounded-xl shadow-sm bg-white/70 backdrop-blur-sm border-2 border-indigo-100 group-hover:border-indigo-300 transition-all ease">
            <div className="grid place-items-center h-full w-12 text-indigo-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="peer h-full w-full outline-none rounded text-sm text-slate-700 bg-transparent px-2 placeholder:text-slate-400 transition-all ease"
              type="text"
              id="search"
              placeholder="Search projects (Languages, frameworks, libraries, etc...)"
              value={projectSearch}
              onChange={(e) => setProjectSearch(e.target.value)}
            />
          </div>
        </AnimationContainer>

        {/* Display Projects or "No projects found" message */}
        <article className="w-full flex justify-center items-center content-center flex-wrap gap-6 mx-auto">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="w-full h-auto p-4 glass-card">
                <Skeleton className="w-full h-10 mb-4 skeleton-bright" />
                <Skeleton className="w-full h-6 skeleton-bright" />
                <Skeleton className="w-3/4 h-4 skeleton-bright mt-2" />
                <Skeleton className="w-full h-10 skeleton-bright mt-4" />
              </div>
            ))
          ) : allProjectsInfo.length > 0 ? (
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
            <AnimationContainer customClassName="w-full group flex flex-col justify-center items-center mb-8">
              <div className="text-center text-slate-600 p-6 glass-card rounded-xl">
                <h2 className="text-lg font-semibold">No projects found</h2>
                <p className="text-sm text-slate-400 mt-2">Try a different search term</p>
              </div>
            </AnimationContainer>
          )}
        </article>
      </div>
    </SectionContainer>
  );
};

export default ProjectsSection;
