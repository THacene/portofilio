'use client';

import AboutMe from '../content/AboutMe';
import ContactMe from '../content/ContactMe';
import FeaturedProjects from '../content/FeaturedProjects';
import Hero from '../content/Hero';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import ShowSkills from '../utils/ShowSkills';

const HomeSection = () => {
  return (
    <SectionContainer>

      {/* Hero Section */}
      <div className="w-full h-[calc(100vh-11rem)] flex items-center justify-start">
        <Hero />
      </div>

      {/* About Me Section */}
      <AnimationContainer customClassName="w-full mt-16">
        <AboutMe />
      </AnimationContainer>

      {/* Projects Section (replaces Experience) */}
      <AnimationContainer customClassName="w-full mt-16">
        <FeaturedProjects />
      </AnimationContainer>

      {/* Skills Section */}
      <AnimationContainer customClassName="w-full mt-16">
        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-2xl md:text-2xl tracking-tight mb-2 text-center lg:text-start"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--ink)', letterSpacing: '-0.02em' }}>
            Toolbox
          </h2>
          <div className="section-divider"></div>

          <div className="glass-card p-6 lg:p-8">
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--ink-muted)' }}>
              Technologies and tools I reach for when building. Years of working across the 
              full stack have given me comfort with everything from low-level systems to polished frontends.
            </p>
          
            <div className="flex flex-col items-start gap-3 mt-6">
              <h3 className="font-semibold text-sm tracking-tight mb-3 text-start" 
                  style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-rust)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Languages
              </h3>
              <AnimationContainer customClassName="flex items-center flex-wrap gap-3 mb-5">
                <ShowSkills skills={['C', 'C++', 'Java', 'JavaScript', 'PHP', 'Python', 'CSS', 'HTML']} />
              </AnimationContainer>
            </div>
          
            <div className="flex flex-col items-start gap-3 mt-3">
              <h3 className="font-semibold text-sm tracking-tight mb-3 text-start" 
                  style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-rust)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                3D & Simulation
              </h3>
              <AnimationContainer customClassName="flex items-center flex-wrap gap-3 mb-5">
                <ShowSkills skills={['Three.js', 'Cannon.js', 'Blender 3D', 'WebXR']} />
              </AnimationContainer>
            </div>

            <div className="flex flex-col items-start gap-3 mt-3">
              <h3 className="font-semibold text-sm tracking-tight mb-3 text-start" 
                  style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-rust)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Frameworks
              </h3>
              <AnimationContainer customClassName="flex items-center flex-wrap gap-3 mb-5">
                <ShowSkills skills={['Next.js', 'Node.js', 'Laravel', 'Tailwind CSS', 'Bootstrap']} />
              </AnimationContainer>
            </div>
          
            <div className="flex flex-col items-start gap-3 mt-3">
              <h3 className="font-semibold text-sm tracking-tight mb-3 text-start" 
                  style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-rust)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Tools & Infra
              </h3>
              <AnimationContainer customClassName="flex items-center flex-wrap gap-3 mb-5">
                <ShowSkills skills={['VS Code', 'Git', 'GitHub', 'Heroku', 'GitHub Actions', 'Docker']} />
              </AnimationContainer>
            </div>
          
            <div className="flex flex-col items-start gap-3 mt-3">
              <h3 className="font-semibold text-sm tracking-tight mb-3 text-start" 
                  style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-rust)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Databases
              </h3>
              <AnimationContainer customClassName="flex items-center flex-wrap gap-3 mb-5">
                <ShowSkills skills={['MongoDB', 'MySQL', 'PostgreSQL', 'SQLite']} />
              </AnimationContainer>
            </div>
          
            <div className="flex flex-col items-start gap-3 mt-3">
              <h3 className="font-semibold text-sm tracking-tight mb-3 text-start" 
                  style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-rust)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Systems
              </h3>
              <AnimationContainer customClassName="flex items-center flex-wrap gap-3 mb-5">
                <ShowSkills skills={['Linux', 'Windows', 'Nginx', 'PowerShell', 'Bash']} />
              </AnimationContainer>
            </div>
          </div>

        </div>
      </AnimationContainer>

        {/* Contact Section */}
        <AnimationContainer customClassName="w-full mt-16">
          <ContactMe />
        </AnimationContainer>
      </SectionContainer>
  );
};

export default HomeSection;
