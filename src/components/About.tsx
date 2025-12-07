import type React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" title="About">
      <div className="space-y-4 text-sm leading-relaxed text-slate-300">
        <p>
          I am an electrical engineer in building services with a solid foundation in designing
          power, lighting, lightning protection/earthing and ICT/ELV systems for buildings. My work
          focuses on applying good engineering practice – load calculations, system sizing,
          coordination with other disciplines, compliance with standards, and documentation that
          supports construction and operation.
        </p>
        <p>
          In addition to my core engineering responsibilities, I develop digital tools and Revit
          extensions in C# and pyRevit, and contribute to the European Computational Development
          team at Buro Happold. This combination lets me approach projects from both a practical
          engineering and a computational perspective, helping teams work more accurately and
          efficiently.
        </p>
        <p>
          My goal is to strengthen engineering processes – supporting better decisions, clearer
          designs, and a more seamless experience for both engineers and clients.
        </p>
      </div>
    </Section>
  );
};

export default About;


