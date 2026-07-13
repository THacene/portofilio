'use client';

import AboutMe from '../content/AboutMe';
import ContactMe from '../content/ContactMe';
import CurrentTimeLineExp from '../content/CurrentTimeLineExp';
import Hero from '../content/Hero';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import ShowSkills from '../utils/ShowSkills';

const HomeSection = () => {
  return (
    <SectionContainer>

      {/* Hero Section */}
      <div className="w-full h-[calc(100vh-11rem)] flex items-center justify-center">
        <Hero />
      </div>

      {/* About Me Section */}
      <AnimationContainer customClassName="w-full mt-16">
        <AboutMe />
      </AnimationContainer>

      {/* Timeline Section */}
      <AnimationContainer customClassName="w-full mt-16">
        <CurrentTimeLineExp />
      </AnimationContainer>

      {/* Skills Section */}
      <AnimationContainer customClassName="w-full mt-16">
        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-2xl md:text-2xl tracking-tight mb-2 gradient-text">
            Skills
          </h2>
          <div className="section-divider"></div>

          <div className="glass-card p-6 lg:p-8">
            <div className="flex flex-col items-start gap-3">
              <p className="text-base text-slate-500 leading-relaxed">
                I&apos;ve been programming for over years, gaining experience with a
                variety of programming languages, frameworks, and tools. I&apos;ve worked on both Frontend and Backend
                technologies, allowing me to understand and contribute to the entire development process.
              </p>
            
              <div className="flex flex-col items-start gap-3 mt-6">
                <h3 className="font-semibold text-lg tracking-tight mb-3 text-slate-700 text-start">Programming Languages</h3>
                <AnimationContainer customClassName="flex items-center flex-wrap gap-3 mb-5">
                  <ShowSkills skills={['C', 'C++', 'Java', 'JavaScript', 'PHP', 'Python', 'CSS', 'HTML']} />
                </AnimationContainer>
              </div>
            
              <div className="flex flex-col items-start gap-3 mt-3">
                <h3 className="font-semibold text-lg tracking-tight mb-3 text-slate-700 text-start">Frameworks</h3>
                <AnimationContainer customClassName="flex items-center flex-wrap gap-3 mb-5">
                  <ShowSkills skills={['Bootstrap', 'Node.js', 'Next.js', 'Tailwind CSS', 'Three.js', 'Cannon.js']} />
                </AnimationContainer>
              </div>
            
              <div className="flex flex-col items-start gap-3 mt-3">
                <h3 className="font-semibold text-lg tracking-tight mb-3 text-slate-700 text-start">Tools and IDEs</h3>
                <AnimationContainer customClassName="flex items-center flex-wrap gap-3 mb-5">
                  <ShowSkills skills={['VS Code', 'Git', 'GitHub', 'Heroku', 'GitHub Actions', 'Docker']} />
                </AnimationContainer>
              </div>
            
              <div className="flex flex-col items-start gap-3 mt-3">
                <h3 className="font-semibold text-lg tracking-tight mb-3 text-slate-700 text-start">Databases</h3>
                <AnimationContainer customClassName="flex items-center flex-wrap gap-3 mb-5">
                  <ShowSkills skills={['MongoDB', 'MySQL', 'PostgreSQL', 'SQLite']} />
                </AnimationContainer>
              </div>
            
              <div className="flex flex-col items-start gap-3 mt-3">
                <h3 className="font-semibold text-lg tracking-tight mb-3 text-slate-700 text-start">Operating Systems</h3>
                <AnimationContainer customClassName="flex items-center flex-wrap gap-3 mb-5">
                  <ShowSkills skills={['Linux', 'Windows']} />
                </AnimationContainer>
              </div>
            
              <div className="flex flex-col items-start gap-3 mt-3">
                <h3 className="font-semibold text-lg tracking-tight mb-3 text-slate-700 text-start">Scripting</h3>
                <AnimationContainer customClassName="flex items-center flex-wrap gap-3 mb-5">
                  <ShowSkills skills={['PowerShell', 'Bash']} />
                </AnimationContainer>
              </div>
            
              <div className="flex flex-col items-start gap-3 mt-3">
                <h3 className="font-semibold text-lg tracking-tight mb-3 text-slate-700 text-start">Web Servers</h3>
                <AnimationContainer customClassName="flex items-center flex-wrap gap-3 mb-5">
                  <ShowSkills skills={['Nginx']} />
                </AnimationContainer>
              </div>
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
