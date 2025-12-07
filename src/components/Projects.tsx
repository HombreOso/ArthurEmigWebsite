import type React from 'react';
import Section from './Section';

interface Project {
  name: string;
  description: string;
  tech: string[];
  link?: string;
  highlight?: string;
}

const projects: Project[] = [
  {
    name: 'Time Assistant – Productivity App',
    description:
      'A mobile app that helps users track and structure their time more deliberately, built to explore mobile development and practical UX around daily planning.',
    tech: ['Dart', 'Flutter', 'Google Play'],
    link: 'https://play.google.com/store/apps/details?id=com.hombreoso.time_assistant',
    highlight:
      'Demonstrates the ability to design, build, and ship a complete product to production app stores.'
  },
  {
    name: 'Revit & pyRevit Tools for Building Services',
    description:
      'A collection of small tools, scripts, and Revit extensions that automate recurring tasks in electrical building design, making workflows clearer, faster, and less error‑prone.',
    tech: ['C#', 'pyRevit', 'Revit', 'Automation'],
    highlight:
      'Improves internal workflows by reducing manual steps, standardizing calculations, and supporting consistent documentation.'
  },
  {
    name: 'Medical Image Quality Assessment (Deep Learning)',
    description:
      'Research work on evaluating medical image quality in digital mammography using deep learning models, from dataset preparation to model evaluation together with clinicians.',
    tech: ['Python', 'Deep Learning', 'Computer Vision'],
    highlight:
      'Experience at the intersection of medicine, image processing, and applied machine learning, contributing to a publication in the Journal of Medical Imaging.'
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


