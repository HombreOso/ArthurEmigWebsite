import type React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" title="About">
      <div className="space-y-4 text-sm leading-relaxed text-slate-300">
        <p>
          I&apos;m a software engineer with a strong interest in building high‑quality web
          applications. I care about clean abstractions, maintainable code, and shipping features
          that actually solve real user problems.
        </p>
        <p>
          Over the last few years, I&apos;ve worked with modern JavaScript and TypeScript stacks
          across the frontend and backend. I enjoy collaborating closely with product and design,
          breaking down complex problems, and iterating quickly while keeping quality high.
        </p>
        <p>
          Outside of pure coding, I&apos;m drawn to good developer experience: documenting systems
          well, setting up tooling that makes teams faster, and leaving codebases in a better state
          than I found them.
        </p>
      </div>
    </Section>
  );
};

export default About;


