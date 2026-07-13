'use client';

import ExternalLink from '../ui/ExternalLink';
import AnimationContainer from '../utils/AnimationContainer';
import Link from 'next/link';
import { siteConfig } from '@/src/configs/config';

type BlogCardProps = {
  title: string;
  excerpt: string;
  tags: string[];
  link: string;
  source: string;
};

const BlogCard = ({ title, excerpt, tags, link, source }: BlogCardProps) => {
  return (
    <AnimationContainer customClassName="w-full h-42 glass-card p-5 transition-all ease-in-out duration-300 transform hover:scale-[1.02]">
      <div className="w-full flex flex-col justify-center items-start gap-5">
        <h3 className="text-2xl lg:text-2xl font-semibold text-slate-800 transition-all ease-in-out duration-300">
          {title}
        </h3>
        <p className="text-base text-slate-500 transition-all ease-in-out duration-300 leading-relaxed">
          {excerpt}
        </p>
        <div className="w-full flex justify-between items-center flex-wrap gap-2">
          <div className="flex flex-wrap gap-1">
            {tags?.map((tag, index) => (
              <span
                key={index}
                className="text-xs sm:text-sm bg-gradient-to-r from-indigo-50 to-cyan-50 text-indigo-600 px-3 py-1 rounded-full border border-indigo-100 font-medium whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="text-sm text-slate-400">
            From:{' '}
            <Link
              href={siteConfig.social.blog}
              className="text-indigo-600 hover:underline font-medium"
            >
              {source}
            </Link>
          </div>
          <ExternalLink
            href={link}
            customClassName="btn-gradient text-sm py-2 px-4"
          >
            <span>Read More</span>
          </ExternalLink>
        </div>
      </div>
    </AnimationContainer>
  );
};

export default BlogCard;
