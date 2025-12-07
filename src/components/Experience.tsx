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

const experience: ExperienceItem[] = [
  {
    role: 'Electrical Engineer – Building Services',
    company: 'Buro Happold GmbH',
    location: 'Berlin, Germany',
    period: '10/2022 – Present',
    summary:
      'Design and coordination of electrical building systems with a focus on safety, efficiency, and constructability, while advancing digital tools and workflows.',
    bullets: [
      'Design and coordinate power distribution, lighting, ICT/ELV and related systems, including calculations, sizing, and cross‑disciplinary coordination.',
      'Prepare technical documentation, schematics, and Revit models that support safe, efficient construction and operation.',
      'Develop small tools, scripts, and Revit extensions (C# and pyRevit) to make recurring design steps clearer, faster, or more reliable.',
      'Contribute to the European Computational Development Group on standardized calculation tools, digitalization of standards, and maintaining a shared knowledge base.'
    ]
  },
  {
    role: 'Electrical Engineer',
    company: 'VPA Ingenieurgesellschaft mbH',
    location: 'Berlin, Germany',
    period: '10/2018 – 09/2022',
    summary:
      'Planning and design of electrical building systems with emphasis on safety, reliability, and efficient use of resources.',
    bullets: [
      'Designed and planned electrical building systems with a focus on safe and reliable operation.',
      'Automated repetitive manual tasks to improve productivity and reduce the likelihood of errors.',
      'Streamlined planning workflows by introducing practical software tools and automation methods.',
      'Ensured efficient use of resources through well‑coordinated electrical system planning.'
    ]
  },
  {
    role: 'Research Associate – Medical Image Processing',
    company: 'Charité – Universitätsmedizin Berlin',
    location: 'Berlin, Germany',
    period: '10/2019 – 10/2020',
    summary:
      'Worked on a deep learning project for evaluating image quality in medical radiology, particularly digital mammography.',
    bullets: [
      'Developed and tested neural network models for assessing medical image quality.',
      'Prepared training datasets and designed evaluation methods together with clinicians and imaging specialists.',
      'Collaborated with Charité Berlin and the US FDA to translate medical requirements into practical computational approaches.'
    ]
  },
  {
    role: 'Working Student – Medical Image Processing',
    company: 'Charité – Universitätsmedizin Berlin',
    location: 'Berlin, Germany',
    period: '02/2018 – 06/2019',
    summary:
      'Supported research on medical image processing tools and automated analysis workflows.',
    bullets: [
      'Developed software tools for medical image processing, mainly using Python.',
      'Assisted researchers with imaging experiments, data preparation, and evaluation.',
      'Built prototypes for automated image analysis workflows and improved existing pipelines.'
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
    </Section>
  );
};

export default Experience;


