import type React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-900/80 px-4 py-6 text-[11px] text-slate-500">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 sm:flex-row">
        <p>© {new Date().getFullYear()} Arthur Emig. All rights reserved.</p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/arthur-emig-5a66bb160"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-brand-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/your-github-handle"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-brand-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


