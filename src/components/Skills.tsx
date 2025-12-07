import type React from 'react';
import Section from './Section';

const groups: { title: string; items: string[] }[] = [
  {
    title: 'Languages & Core',
    items: ['TypeScript', 'JavaScript (ESNext)', 'HTML & CSS', 'SQL']
  },
  {
    title: 'Frontend',
    items: ['React', 'React Hooks', 'Vite', 'Tailwind CSS']
  },
  {
    title: 'Backend & Cloud',
    items: ['Node.js', 'REST APIs', 'Firebase', 'Authentication & AuthZ basics']
  },
  {
    title: 'Practices',
    items: ['Code review', 'Testing mindset', 'Clean architecture', 'Agile collaboration']
  }
];

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-4 md:grid-cols-2">
        {groups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-4 text-sm shadow-sm shadow-slate-950/60"
          >
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
              {group.title}
            </h3>
            <div className="mt-3 flex flex-wrap gap-1.5 text-[11px] text-slate-200">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-700/80 bg-slate-900/70 px-2.5 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;


