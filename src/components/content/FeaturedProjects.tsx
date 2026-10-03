'use client';

import AnimationContainer from '../utils/AnimationContainer';
import Link from 'next/link';

interface ProjectData {
  number: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  repo: string;
  live: string;
}

const projects: ProjectData[] = [
  {
    number: '01',
    title: 'Platform de Reporting — Sonatrach',
    description: 'A comprehensive reporting platform built for Sonatrach to manage and streamline regional reports across the organization. Features include report creation, regional analytics, user management, and data visualization dashboards. Built with Laravel and MySQL for robust enterprise-level performance.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'Analytics'],
    image: '/img/sonatrach_project.jpg',
    repo: 'https://github.com/THacene/Sonatrach-Gestion-des-raports-Final-version-',
    live: 'https://github.com/THacene/Sonatrach-Gestion-des-raports-Final-version-',
  },
  {
    number: '02',
    title: 'Virtual Robotics XR Platform',
    description: 'An immersive XR platform for virtual robotics simulation and control. Users can interact with industrial robot arms in a 3D virtual environment, manipulate joint angles, run trajectory simulations, and learn robotics concepts through hands-on WebXR experiences.',
    tags: ['Three.js', 'WebXR', 'JavaScript', 'Cannon.js', '3D'],
    image: '/img/xr_robotics_project.jpg',
    repo: 'https://github.com/THacene/Virtual-Robotics-XR-Platform_V1',
    live: 'https://github.com/THacene/Virtual-Robotics-XR-Platform_V1',
  },
  {
    number: '03',
    title: 'RK Beauty DZ — E-Commerce',
    description: 'A modern e-commerce website for RK Beauty, an Algerian beauty and skincare brand. Features product catalogs, shopping cart functionality, elegant product showcases, and a seamless purchasing experience designed with a luxurious and premium aesthetic.',
    tags: ['Web Design', 'E-Commerce', 'CSS', 'Responsive', 'UI/UX'],
    image: '/img/rkbeauty_project.jpg',
    repo: 'http://rkbeautydz.me/',
    live: 'http://rkbeautydz.me/',
  },
];

const FeaturedProjects = () => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
      <div className="flex items-center gap-4 mb-2" id="projects">
        <h2 className="font-bold text-2xl tracking-tight text-center lg:text-start"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--ink)', letterSpacing: '-0.02em' }}>
          Selected Projects
        </h2>
      </div>
      <div className="section-divider"></div>

      <p className="text-base mb-10" style={{ color: 'var(--ink-muted)', maxWidth: '540px', lineHeight: '1.7' }}>
        A curated selection of projects I&apos;ve built — each one tackling different challenges 
        and technologies, from enterprise platforms to immersive 3D experiences.
      </p>

      {/* Projects Grid */}
      <div className="flex flex-col gap-10">
        {projects.map((project, index) => (
          <AnimationContainer key={project.number} customDelay={0.1 * (index + 1)} customClassName="w-full">
            <div className="project-card">
              {/* Image Container */}
              <div className="overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
                <span className="project-number">{project.number}</span>
              </div>

              {/* Content */}
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                {/* Tags */}
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>

                {/* Links */}
                <div className="project-links">
                  <Link 
                    href={project.repo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Source Code
                  </Link>
                  <Link 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style={{ width: '16px', height: '16px' }}>
                      <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5zm7.25-.75a.75.75 0 01.75-.75h3.5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0V6.31l-5.47 5.47a.75.75 0 11-1.06-1.06l5.47-5.47H12.25a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                    </svg>
                    Visit Project
                  </Link>
                </div>
              </div>
            </div>
          </AnimationContainer>
        ))}
      </div>
    </AnimationContainer>
  );
};

export default FeaturedProjects;
