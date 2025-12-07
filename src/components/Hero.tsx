import type React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="top"
      className="gradient-bg flex min-h-[80vh] items-center justify-center px-4 pt-28 pb-12"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-8 md:flex-row md:items-center">
        <div className="flex-1 space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-300/90">
            Electrical Engineer
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
            Hi, I&apos;m Arthur.
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-slate-300">
            I&apos;m an electrical engineer in building services, focusing on power, lighting,
            lightning protection/earthing, and ICT/ELV systems for buildings. I combine practical
            engineering work with computational tools to help teams design more accurately and
            efficiently.
          </p>

          <div className="flex flex-wrap gap-3 text-xs">
            <a
              href="#projects"
              className="rounded-full bg-brand-500 px-4 py-2 font-medium text-slate-50 shadow-sm shadow-brand-500/30 transition hover:bg-brand-400"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-700 px-4 py-2 font-medium text-slate-100 transition hover:border-brand-400 hover:text-brand-200"
            >
              Get in touch
            </a>
          </div>

          <div className="flex flex-wrap gap-3 text-[11px] text-slate-400">
            <span className="rounded-full border border-slate-800 px-3 py-1">
              Building services engineering
            </span>
            <span className="rounded-full border border-slate-800 px-3 py-1">
              Computational tools (Flutter, Python & C#)
            </span>
            <span className="rounded-full border border-slate-800 px-3 py-1">
              Revit & automation
            </span>
          </div>
        </div>

        <div className="mt-4 flex flex-1 justify-center md:mt-0">
          <div className="relative h-40 w-40 overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-900 to-slate-950 shadow-[0_0_0_1px_rgba(148,163,184,0.25)] sm:h-48 sm:w-48">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,#4dabff44,transparent_55%),radial-gradient(circle_at_100%_100%,#1a93ff33,transparent_55%)]" />
            <div className="relative flex h-full flex-col items-center justify-center gap-1">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300">
                Arthur Emig
              </span>
              <span className="text-[11px] text-slate-400">
                Electrical Engineer &amp;
                <br />
                Computational Developer
              </span>
              <span className="mt-3 rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1 text-[10px] text-slate-300">
                Strengthening engineering processes &amp; workflows
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


