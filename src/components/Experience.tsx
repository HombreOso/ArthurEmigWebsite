import type React from 'react';
import Section from './Section';

interface ExperienceItem {
  role: string;
  company: string;
  location?: string;
  period: string;
  summary: string;
  bullets: string[];
}

// NOTE: Replace these placeholders with the exact roles from your LinkedIn profile.
const experience: ExperienceItem[] = [
  {
    role: 'Software Engineer',
    company: 'Your Current / Most Recent Company',
    location: 'City, Country',
    period: '2023 – Present',
    summary:
      'Working across the stack to deliver user‑facing features, improve reliability, and collaborate with product and design.',
    bullets: [
      'Build and maintain modern React + TypeScript UIs with reusable, well‑tested components.',
      'Design and integrate backend APIs, focusing on performance and clear contracts.',
      'Improve developer experience through better tooling, documentation, and automation.'
    ]
  },
  {
    role: 'Previous Engineering / Technical Role',
    company: 'Previous Company',
    location: 'City, Country',
    period: '2020 – 2023',
    summary:
      'Contributed to a variety of engineering projects, working closely with cross‑functional teams.',
    bullets: [
      'Owned features end‑to‑end from technical design through implementation and rollout.',
      'Collaborated with stakeholders to refine requirements into concrete technical work.',
      'Helped maintain and refactor legacy areas of the codebase to be more reliable and testable.'
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-6">
        {experience.map((item) => (
          <article
            key={item.company + item.role}
            className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 shadow-sm shadow-slate-950/60"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-sm font-semibold text-slate-50">{item.role}</h3>
                <p className="text-xs text-slate-400">
                  {item.company}
                  {item.location ? ` • ${item.location}` : ''}
                </p>
              </div>
              <p className="text-[11px] text-slate-400">{item.period}</p>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-slate-300">{item.summary}</p>
            <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
              {item.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-[6px] h-[3px] w-[3px] flex-shrink-0 rounded-full bg-brand-400" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="mt-4 text-[11px] text-slate-500">
        Want this to be perfectly accurate? Update the roles above to match your LinkedIn titles,
        companies, and dates.
      </p>
    </Section>
  );
};

export default Experience;


