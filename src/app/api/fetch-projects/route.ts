import { NextResponse } from 'next/server';
import { siteConfig } from '@/src/configs/config';

export const dynamic = 'force-dynamic';
export const revalidate = 60; // Revalidate every 60 seconds to keep projects synced with GitHub

// Extract username if URL was provided
const rawGithub = siteConfig.social.github || '';
const GITHUB_USERNAME = rawGithub.startsWith('http')
  ? rawGithub.split('/').filter(Boolean).pop() || 'THacene'
  : rawGithub;

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

// List of repository names to exclude
const EXCLUDED_REPOS = ['m-t-o.python'];

// Fallback projects if GitHub API is temporarily unreachable
const fallbackProjects = [
  {
    id: '1',
    title: 'Sonatrach-Gestion-des-raports-Final-version-',
    des: 'Comprehensive reporting and analytics platform for Sonatrach to manage enterprise reports, regional data, and organizational metrics.',
    category: 'php',
    repo: 'https://github.com/THacene/Sonatrach-Gestion-des-raports-Final-version-',
    link: 'https://github.com/THacene/Sonatrach-Gestion-des-raports-Final-version-',
    topics: ['Laravel', 'PHP', 'MySQL', 'Analytics', 'Enterprise'],
  },
  {
    id: '2',
    title: 'Virtual-Robotics-XR-Platform_V1',
    des: 'Immersive XR robotics simulation and control platform built with Three.js and Cannon.js for interactive 3D robot arm manipulation.',
    category: 'javascript',
    repo: 'https://github.com/THacene/Virtual-Robotics-XR-Platform_V1',
    link: 'https://github.com/THacene/Virtual-Robotics-XR-Platform_V1',
    topics: ['Three.js', 'Cannon.js', 'WebXR', '3D Simulation', 'JavaScript'],
  },
  {
    id: '3',
    title: 'Mimis_kitchen',
    des: 'Web application project developed for kitchen and culinary services.',
    category: 'javascript',
    repo: 'https://github.com/THacene/Mimis_kitchen',
    link: 'https://github.com/THacene/Mimis_kitchen',
    topics: ['Web', 'JavaScript', 'Frontend'],
  },
  {
    id: '4',
    title: 'Station_servic_web',
    des: 'Service station management web platform for operations, tracking, and services.',
    category: 'web',
    repo: 'https://github.com/THacene/Station_servic_web',
    link: 'https://github.com/THacene/Station_servic_web',
    topics: ['PHP', 'MySQL', 'Web Platform'],
  },
  {
    id: '5',
    title: 'it_cash',
    des: 'IT cash flow and financial tracking management software system.',
    category: 'system',
    repo: 'https://github.com/THacene/it_cash',
    link: 'https://github.com/THacene/it_cash',
    topics: ['System', 'Finance', 'Software'],
  }
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('search') || '';

  try {
    const headers: Record<string, string> = {
      'User-Agent': 'Portfolio-App',
      'Accept': 'application/vnd.github.v3+json',
    };

    if (GITHUB_TOKEN) {
      headers['Authorization'] = `token ${GITHUB_TOKEN}`;
    }

    // Always fetch latest repos sorted by most recently updated/pushed
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
      { headers, cache: 'no-store' }
    );

    if (!response.ok) {
      console.warn(`GitHub API returned status ${response.status}, using filtered fallback`);
      return filterAndReturn(fallbackProjects, search);
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      return filterAndReturn(fallbackProjects, search);
    }

    // Filter out excluded repos (like M-t-o.python)
    const validRepos = data.filter((repo: any) => {
      const repoName = (repo.name || '').toLowerCase().trim();
      return !EXCLUDED_REPOS.includes(repoName);
    });

    // Map repos to project format
    const projectsWithTopics = validRepos.map((repo: any) => ({
      id: repo.id?.toString() || repo.name,
      title: repo.name,
      des: repo.description || 'Open source repository synced directly from GitHub.',
      category: repo.language ? repo.language.toLowerCase() : 'project',
      repo: repo.html_url,
      link: repo.homepage || repo.html_url,
      topics: Array.isArray(repo.topics) && repo.topics.length > 0 
        ? repo.topics 
        : [repo.language].filter(Boolean),
    }));

    return filterAndReturn(
      projectsWithTopics.length > 0 ? projectsWithTopics : fallbackProjects,
      search
    );
  } catch (error) {
    console.error('Error syncing GitHub repositories, using fallback:', error);
    return filterAndReturn(fallbackProjects, search);
  }
}

function filterAndReturn(projects: typeof fallbackProjects, search: string) {
  const filtered = search
    ? projects.filter(
        (project) =>
          project.category.toLowerCase().includes(search.toLowerCase()) ||
          project.title.toLowerCase().includes(search.toLowerCase()) ||
          project.topics.some((topic: string) =>
            topic.toLowerCase().includes(search.toLowerCase())
          )
      )
    : projects;

  return NextResponse.json(filtered);
}
