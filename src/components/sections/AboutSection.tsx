import AnimationContainer from '../utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';
import CurrentTimeLineExp from '../content/CurrentTimeLineExp';
import ShowSkills from '../utils/ShowSkills';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import SectionContainer from '../utils/SectionContainer';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">

        <TitleSectionPageContainer title="About Me" />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <div className="glass-card p-6 lg:p-8">
            <p className="text-base text-slate-600 leading-relaxed">
              Hello! I&apos;m <strong className="text-indigo-600">{siteConfig.author}</strong>, a System and Web Technology Engineer. 
              I specialize in developing efficient web applications and managing system security.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mt-4">
              With a strong foundation in frontend and backend development, as well as system administration, 
              I focus on building scalable solutions and implementing robust security measures. I am always open 
              to new challenges and collaborations. Feel free to explore my work on my{' '}
              <Link
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 hover:underline transition-all ease font-medium"
              >
                GitHub profile
              </Link>.
            </p>
          </div>
        </AnimationContainer>

        <CurrentTimeLineExp />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <h2 className="font-bold text-2xl md:text-2xl tracking-tight mb-2 gradient-text text-start">Skills</h2>
          <div className="section-divider"></div>

          <div className="glass-card p-6 lg:p-8">
            <p className="text-base text-slate-500 leading-relaxed mb-6">
              I&apos;ve been programming for over years, gaining experience with a
              variety of programming languages, frameworks, and tools. I&apos;ve worked on both Frontend and Backend
              technologies, allowing me to understand and contribute to the entire development process.
            </p>

            <div className="flex flex-col items-start gap-3 mt-3">
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

        </AnimationContainer>

      </div>
    </SectionContainer>
  );
};

export default AboutSection;
