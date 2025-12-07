import type React from 'react';

const sections: { id: string; label: string }[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' }
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top: y, behavior: 'smooth' });
};

const Navbar: React.FC = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-slate-800/70 bg-slate-950/70 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <button
          type="button"
          onClick={() => scrollToSection('top')}
          className="text-sm font-semibold tracking-tight text-slate-50"
        >
          Arthur <span className="text-brand-400">Emig</span>
        </button>

        <div className="hidden gap-6 text-xs font-medium text-slate-300 sm:flex">
          {sections.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => scrollToSection(s.id)}
              className="transition hover:text-brand-300"
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 text-xs">
          <a
            href="https://www.linkedin.com/in/arthur-emig-5a66bb160"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-700 px-3 py-1 text-slate-200 transition hover:border-brand-400 hover:text-brand-200"
          >
            LinkedIn
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;


