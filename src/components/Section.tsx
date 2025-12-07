import type React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="scroll-mt-24 px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
            {title}
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-brand-500/60 via-slate-700 to-transparent" />
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;


