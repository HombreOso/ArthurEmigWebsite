import type React from 'react';
import Section from './Section';

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-3 text-sm leading-relaxed text-slate-300">
          <p>
            If you&apos;d like to talk about a role, a project, or how to make engineering workflows
            clearer and more efficient, feel free to reach out. I&apos;m open to collaborations in
            building services, computational tools, and applied image processing.
          </p>
          <p className="text-[13px] text-slate-400">
            The best way to contact me is by email or LinkedIn. I&apos;ll do my best to respond
            promptly.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-xs">
            <a
              href="mailto:arthur.e.emig@gmail.com"
              className="rounded-full bg-brand-500 px-4 py-2 font-medium text-slate-50 shadow-sm shadow-brand-500/30 transition hover:bg-brand-400"
            >
              Email me
            </a>
            <a
              href="https://www.linkedin.com/in/arthur-emig-5a66bb160"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-700 px-4 py-2 font-medium text-slate-100 transition hover:border-brand-400 hover:text-brand-200"
            >
              Message on LinkedIn
            </a>
          </div>
        </div>

        <div className="space-y-3 rounded-2xl border border-slate-800/80 bg-slate-900/40 p-4 text-[12px] text-slate-200 shadow-sm shadow-slate-950/60">
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
            Quick details
          </h3>
          <dl className="space-y-2">
            <div className="flex justify-between gap-4">
              <dt className="text-slate-400">Location</dt>
              <dd className="text-right text-slate-200">Berlin, Germany</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-400">Role</dt>
              <dd className="text-right text-slate-200">
                Electrical Engineer – Building Services &amp; Computational Tools
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-400">LinkedIn</dt>
              <dd className="text-right">
                <a
                  href="https://www.linkedin.com/in/arthur-emig-5a66bb160"
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-300 underline-offset-2 hover:underline"
                >
                  /arthur-emig-5a66bb160
                </a>
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-400">GitHub</dt>
              <dd className="text-right">
                <a
                  href="https://github.com/HombreOso"
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-300 underline-offset-2 hover:underline"
                >
                  github.com/HombreOso
                </a>
              </dd>
            </div>
          </dl>
          <p className="pt-1 text-[11px] text-slate-500">
            You can also reach me by phone if needed: +49&nbsp;1575&nbsp;7676163.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Contact;


