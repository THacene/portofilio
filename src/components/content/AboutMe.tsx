import AnimationContainer from '../utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
      <h2 className="font-bold text-2xl tracking-tight mb-2 text-center lg:text-start"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--ink)', letterSpacing: '-0.02em' }}>
        About
      </h2>
      <div className="section-divider"></div>

      <div className="glass-card p-6 lg:p-8 space-y-4">
        <p className="text-base leading-relaxed" style={{ color: 'var(--ink-light)' }}>
          I&apos;m <strong style={{ color: 'var(--accent-rust)' }}>{siteConfig.author}</strong> — focused on{' '}
          <strong style={{ color: 'var(--ink)' }}>System Engineering</strong> based in Algeria. 
          I care about writing clean, resilient code and architecting systems that solve real problems with precision.
        </p>

        <p className="text-base leading-relaxed" style={{ color: 'var(--ink-light)' }}>
          My work spans system architecture and enterprise platforms down to interactive 3D simulations 
          using <strong>Three.js</strong>, <strong>Cannon.js</strong>, and <strong>Blender 3D</strong>. 
          I believe the best software is built when solid engineering discipline meets creative innovation.
        </p>

        <p className="text-base leading-relaxed" style={{ color: 'var(--ink-light)' }}>
          When I&apos;m not shipping features, I&apos;m exploring new technologies, 
          modeling 3D assets, or optimizing workflows to make systems faster and more reliable. 
          Always learning, always building.
        </p>
      </div>
    </AnimationContainer>
  );
};

export default AboutMe;
