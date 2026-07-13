'use client';

import { useEffect, useState } from 'react';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import BlogCard from '@/src/components/content/CardBlog';
import { siteConfig } from '@/src/configs/config';
import Link from 'next/link';
import { Skeleton } from '@/src/components/ui/skeleton';

const BlogSection = () => {
  const [blogSearch, setBlogSearch] = useState<string>('');
  const [blogs, setBlogs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/fetchRSS`);
        const data = await response.json();

        // Filter blogs based on search
        const filteredBlogs = data.items.filter((blog: any) =>
          blog.title.toLowerCase().includes(blogSearch.toLowerCase())
        );

        setBlogs(filteredBlogs);
      } catch (error) {
        console.error('Error fetching RSS feed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, [blogSearch]);

  // Generate JSON-LD structured data for the blogs
  const generateJsonLd = (blogs: any[]) => {
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: blogs.map((blog: any, index: number) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'BlogPosting',
          headline: blog.title,
          description: blog.contentSnippet,
          url: blog.link,
          image: blog.thumbnail,
          author: {
            '@type': 'Person',
            name: siteConfig.author,
          },
          datePublished: blog.pubDate,
          keywords: blog.categories.join(', '),
        },
      })),
    };

    return JSON.stringify(jsonLd);
  };

  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <TitleSectionPageContainer title="Blogs" />

        {/* Add JSON-LD metadata for the page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generateJsonLd(blogs),
          }}
        />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <p className="w-full text-base text-slate-500 leading-relaxed">
            These are some of the blog posts I&apos;ve written since I started
            blogging. Some of them are personal, technical articles, or insights
            I&apos;ve shared on various topics. If you want to see all my posts,
            visit my{' '}
            <Link
              href={siteConfig.social.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800 hover:underline transition-all ease font-medium"
            >
              Blog Page
            </Link>
            .
          </p>
        </AnimationContainer>

        {/* Blog Search */}
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
              placeholder="Search blogs by title..."
              value={blogSearch}
              onChange={(e) => setBlogSearch(e.target.value)}
            />
          </div>
        </AnimationContainer>

        {/* Display Blogs */}
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
          ) : blogs.length > 0 ? (
            blogs.map(
              ({ guid, title, link, contentSnippet, categories, source }) => (
                <BlogCard
                  key={guid}
                  title={title}
                  excerpt={contentSnippet}
                  tags={categories}
                  link={link}
                  source={source}
                />
              )
            )
          ) : (
            <AnimationContainer customClassName="w-full group flex flex-col justify-center items-center mb-8">
              <div className="text-center text-slate-600 p-6 glass-card rounded-xl">
                <h2 className="text-lg font-semibold">No blogs found</h2>
                <p className="text-sm text-slate-400 mt-2">Try a different search term</p>
              </div>
            </AnimationContainer>
          )}
        </article>
      </div>
    </SectionContainer>
  );
};

export default BlogSection;
