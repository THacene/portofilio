import AnimationContainer from '../utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
      <h2 className="font-bold text-2xl tracking-tight mb-2 gradient-text text-center lg:text-start">
        About Me
      </h2>
      <div className="section-divider"></div>

      <div className="glass-card p-6 lg:p-8 space-y-4">
        <p className="text-base text-slate-600 leading-relaxed">
          Hello! I&apos;m <strong className="text-indigo-600">{siteConfig.author}</strong>, a System and Web Technology Engineer. 
          I specialize in developing efficient web applications and managing system security.
        </p>

        <p className="text-base text-slate-600 leading-relaxed">
          With a strong foundation in both frontend and backend development, as well as system administration, 
          I focus on building scalable solutions and implementing robust security measures to solve real-world problems.
        </p>

        <p className="text-base text-slate-600 leading-relaxed">
          I am always eager to learn new technologies and collaborate on exciting projects.
        </p>
      </div>
    </AnimationContainer>
  );
};

export default AboutMe;
