// components/Education.tsx
import React from 'react';
import { Calendar, GraduationCap, MapPin, School } from 'lucide-react';
import { Section, SectionHeader, Reveal, Card, IconTile } from './ui';

const education = [
  {
    degree: 'B.Sc. (Hons) Mass Communication',
    institution: 'Federal University, Oye-Ekiti',
    period: 'Sept. 2020 – July 2025',
    location: 'Oye-Ekiti, Ekiti State',
    icon: <GraduationCap className="h-5 w-5" />,
    description:
      'Thesis: “The influence of social media campaigns on the consumption of soda drinks amongst undergraduates in FUOYE”',
    tags: ['4.25 GPA', 'Media Studies', 'Digital Communication'],
  },
  {
    degree: 'Secondary School',
    institution: 'Lagos State Model College, Igbokuta',
    period: 'Sept. 2013 – July 2019',
    location: 'Lagos, Nigeria',
    icon: <School className="h-5 w-5" />,
    description: 'Completed secondary education with WAEC and NECO certificates.',
    tags: ['WAEC, 2019', 'NECO, 2019'],
  },
];

const Education: React.FC = () => {
  return (
    <Section id="education" alt>
      <SectionHeader
        eyebrow="Education"
        title={
          <>
            Academic <span className="text-brand-ink">journey</span>
          </>
        }
        description="A strong foundation in communication and media studies."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {education.map((edu, index) => (
          <Reveal key={edu.institution} delay={0.08 * index}>
            <Card hover className="flex h-full flex-col p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <IconTile>{edu.icon}</IconTile>
                <div>
                  <h3 className="text-xl font-bold text-ink">{edu.degree}</h3>
                  <p className="mt-1 font-semibold text-brand-ink">{edu.institution}</p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-subtle">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={14} /> {edu.period}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} /> {edu.location}
                </span>
              </div>

              <p className="mt-4 flex-1 leading-relaxed text-muted">{edu.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {edu.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-brand-soft px-3 py-1 text-sm font-medium text-brand-ink"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Education;
