import AnimationContainer from '../utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';
import ShowSkills from '../utils/ShowSkills';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import SectionContainer from '../utils/SectionContainer';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-8">

        <TitleSectionPageContainer title="About Me" />

        {/* Narrative / Personal Story */}
        <AnimationContainer customClassName="w-full flex flex-col gap-6">
          <div className="glass-card p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="editorial-label">Background</span>
            </div>
            
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--ink-light)', lineHeight: '1.8' }}>
              I&apos;m <strong style={{ color: 'var(--ink)' }}>{siteConfig.author}</strong>, specialized in{' '}
              <strong style={{ color: 'var(--accent-rust)' }}>System Engineering</strong>, focusing on developing 
              dependable system architectures, robust web platforms, and interactive 3D experiences. 
              My journey in computing started with deep curiosity about systems communication and software mechanics, 
              leading me to engineer enterprise solutions and interactive simulations alike.
            </p>

            <blockquote className="pull-quote my-6">
              &ldquo;Software should feel crafted, dependable, and purposeful — solving real human problems rather than adding noise.&rdquo;
            </blockquote>

            <p className="text-base leading-relaxed" style={{ color: 'var(--ink-muted)', lineHeight: '1.8' }}>
              Over the years, I&apos;ve worked across system administration, backend engineering, and frontend interaction design.
              From configuring operating systems and network services to crafting real-time 3D physics with 
              <strong> Three.js</strong>, <strong>Cannon.js</strong>, and <strong>Blender 3D</strong>, 
              I strive for technical rigor paired with practical utility.
            </p>
          </div>
        </AnimationContainer>

        {/* Projects Highlight Box replacing Experience */}
        <AnimationContainer customClassName="w-full flex flex-col gap-4">
          <div className="glass-card p-6 lg:p-8" style={{ borderLeft: '4px solid var(--accent-rust)' }}>
            <div className="flex items-center justify-between flex-wrap gap-4 mb-3">
              <div>
                <span className="editorial-label mb-2">Featured Work</span>
                <h3 
                  className="text-xl font-bold mt-1"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--ink)' }}
                >
                  Key Projects & Engineering Work
                </h3>
              </div>
              <Link 
                href="/projects" 
                className="btn-outline !py-2 !px-4 !text-xs"
              >
                View All Projects &rarr;
              </Link>
            </div>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--ink-muted)', lineHeight: '1.7' }}>
              Instead of a conventional job timeline, my work speaks best through what I&apos;ve built — including 
              an enterprise reporting platform for <strong>Sonatrach</strong>, a WebXR robotics simulation platform with 
              <strong> Three.js</strong> and <strong>Cannon.js</strong>, and commercial e-commerce applications.
            </p>
          </div>
        </AnimationContainer>

        {/* Skills Section with Editorial Typography */}
        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <div className="flex items-center gap-3">
            <h2 
              className="font-bold text-2xl tracking-tight"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--ink)' }}
            >
              Technical Tooling & Skills
            </h2>
          </div>
          <div className="section-divider"></div>

          <div className="glass-card p-6 lg:p-8">
            <p className="text-sm md:text-base leading-relaxed mb-8" style={{ color: 'var(--ink-muted)', lineHeight: '1.7' }}>
              Technologies and tools I use to design, architect, simulate, and ship reliable software:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 3D & Simulation */}
              <div className="flex flex-col items-start gap-2">
                <span className="text-xs font-mono uppercase tracking-wider font-semibold" style={{ color: 'var(--accent-rust)' }}>
                  3D, Simulation & Graphics
                </span>
                <div className="flex items-center flex-wrap gap-2 mt-1">
                  <ShowSkills skills={['Three.js', 'Cannon.js', 'Blender 3D', 'WebXR']} />
                </div>
              </div>

              {/* Systems & Engineering */}
              <div className="flex flex-col items-start gap-2">
                <span className="text-xs font-mono uppercase tracking-wider font-semibold" style={{ color: 'var(--accent-rust)' }}>
                  Systems & Infrastructure
                </span>
                <div className="flex items-center flex-wrap gap-2 mt-1">
                  <ShowSkills skills={['Linux', 'Windows', 'Nginx', 'Docker', 'Bash', 'PowerShell']} />
                </div>
              </div>

              {/* Programming Languages */}
              <div className="flex flex-col items-start gap-2">
                <span className="text-xs font-mono uppercase tracking-wider font-semibold" style={{ color: 'var(--accent-rust)' }}>
                  Programming Languages
                </span>
                <div className="flex items-center flex-wrap gap-2 mt-1">
                  <ShowSkills skills={['JavaScript', 'TypeScript', 'PHP', 'Python', 'C', 'C++', 'Java', 'HTML', 'CSS']} />
                </div>
              </div>

              {/* Frameworks & Libraries */}
              <div className="flex flex-col items-start gap-2">
                <span className="text-xs font-mono uppercase tracking-wider font-semibold" style={{ color: 'var(--accent-rust)' }}>
                  Frameworks & Libraries
                </span>
                <div className="flex items-center flex-wrap gap-2 mt-1">
                  <ShowSkills skills={['Next.js', 'Node.js', 'Laravel', 'Tailwind CSS', 'Bootstrap']} />
                </div>
              </div>

              {/* Databases */}
              <div className="flex flex-col items-start gap-2">
                <span className="text-xs font-mono uppercase tracking-wider font-semibold" style={{ color: 'var(--accent-rust)' }}>
                  Databases & Storage
                </span>
                <div className="flex items-center flex-wrap gap-2 mt-1">
                  <ShowSkills skills={['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite']} />
                </div>
              </div>

              {/* Developer Tools */}
              <div className="flex flex-col items-start gap-2">
                <span className="text-xs font-mono uppercase tracking-wider font-semibold" style={{ color: 'var(--accent-rust)' }}>
                  Tools & Version Control
                </span>
                <div className="flex items-center flex-wrap gap-2 mt-1">
                  <ShowSkills skills={['Git', 'GitHub', 'VS Code', 'GitHub Actions']} />
                </div>
              </div>
            </div>
          </div>
        </AnimationContainer>

      </div>
    </SectionContainer>
  );
};

export default AboutSection;
