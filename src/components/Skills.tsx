import type React from 'react';
import Section from './Section';

const groups: { title: string; items: string[] }[] = [
  {
    title: 'Building Services & Electrical',
    items: [
      'Electrical building services',
      'Power distribution & lighting',
      'Lightning protection / earthing',
      'ICT / ELV systems',
      'Revit MEP'
    ]
  },
  {
    title: 'Software & Automation',
    items: [
      'Python',
      'Flutter',
      'C#',
      'pyRevit & Revit extensions',
      'Automation of design workflows',
      'Digital tools for engineering',
      'Mobile app development'
    ]
  },
  {
    title: 'Analysis & Computation',
    items: [
      'Deep learning',
      'Computer vision',
      'Medical image processing',
      'Simaris, Relux, DIALux',
      'Data preparation & evaluation'
    ]
  },
  {
    title: 'General Skills & Tools',
    items: [
      'Project coordination',
      'Documentation & schematics',
      'Microsoft Excel',
      'Process improvement',
      'Knowledge base & standards'
    ]
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


