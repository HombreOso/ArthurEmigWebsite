import type React from 'react';
import Section from './Section';

interface Project {
  name: string;
  description: string;
  tech: string[];
  link?: string;
  highlight?: string;
}

// NOTE: Replace these projects with real ones from your GitHub / LinkedIn.
const projects: Project[] = [
  {
    name: 'Project One',
    description:
      'A modern web application demonstrating end‑to‑end ownership: frontend, backend, and deployment.',
    tech: ['TypeScript', 'React', 'Node.js', 'REST APIs'],
    highlight: 'Great example to talk through your architecture and tradeoffs in an interview.'
  },
  {
    name: 'Project Two',
    description:
      'An internal tool that automated a manual workflow and saved hours of repetitive work per week.',
    tech: ['React', 'Tailwind CSS', 'Firebase / Supabase'],
    highlight:
      'Focus on the real impact: time saved, errors reduced, or new capabilities unlocked for users.'
  },
  {
    name: 'Project Three',
    description:
      'A personal project exploring a new technology or framework, built to learn by doing.',
    tech: ['Experiment tech', 'Testing', 'CI/CD'],
    highlight: 'Shows curiosity, ability to self‑direct, and willingness to learn new stacks.'
  }
];

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-4 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className="flex flex-col rounded-2xl border border-slate-800/80 bg-slate-900/40 p-4 text-sm shadow-sm shadow-slate-950/60"
          >
            <div className="mb-2 flex items-start justify-between gap-2">
              <h3 className="text-sm font-semibold text-slate-50">{project.name}</h3>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] text-brand-300 underline-offset-2 hover:underline"
                >
                  View
                </a>
              ) : null}
            </div>
            <p className="text-xs leading-relaxed text-slate-300">{project.description}</p>
            {project.highlight && (
              <p className="mt-2 text-[11px] text-slate-400">{project.highlight}</p>
            )}
            <div className="mt-3 flex flex-wrap gap-1.5 text-[10px] text-slate-300">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-700/80 bg-slate-900/60 px-2 py-0.5"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Projects;


