// components/Certifications.tsx
import React from 'react';
import { Award, BadgeCheck, BookOpen, Calendar } from 'lucide-react';
import { Section, SectionHeader, Reveal, Card, IconTile } from './ui';

const certifications = [
  {
    name: 'Digital Marketing',
    issuer: 'TS Academy',
    issued: 'July – September 2026',
    description:
      'Digital marketing strategy, campaign planning, budgeting and KPI frameworks, completed with a Go-To-Market capstone project for Chowdeck.',
  },
  {
    name: 'Soft Skills Training',
    issuer: 'Jobberman Nigeria',
    issued: '2025',
    description: 'Professional development in communication, teamwork, and workplace ethics.',
  },
];

const ongoingLearning = [
  'Social Media Algorithm Updates',
  'Advanced Analytics & Reporting',
  'AI in Digital Marketing',
  'Influencer Marketing Strategies',
  'Content Strategy Development',
];

const Certifications: React.FC = () => {
  return (
    <Section id="certifications" alt>
      <SectionHeader
        eyebrow="Certifications"
        title={
          <>
            Continuous <span className="text-brand-ink">learning</span>
          </>
        }
        description="Committed to professional development and staying ahead in a fast-moving digital landscape."
      />

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-6">
          {certifications.map((cert, index) => (
            <Reveal key={cert.name} delay={0.08 * index}>
              <Card hover className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <IconTile>
                      <Award className="h-5 w-5" />
                    </IconTile>
                    <div>
                      <h3 className="text-xl font-bold text-ink">{cert.name}</h3>
                      <p className="mt-0.5 font-medium text-brand-ink">{cert.issuer}</p>
                    </div>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-500/12 px-2.5 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    <BadgeCheck size={14} />
                    Completed
                  </span>
                </div>
                <p className="mt-4 leading-relaxed text-muted">{cert.description}</p>
                <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-subtle">
                  <Calendar size={14} /> Issued {cert.issued}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <div className="h-full rounded-2xl bg-linear-to-br from-brand to-sky-500 p-px shadow-lift">
            <div className="h-full rounded-[calc(1rem-1px)] bg-surface p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <IconTile>
                  <BookOpen className="h-5 w-5" />
                </IconTile>
                <h3 className="text-xl font-bold text-ink">Currently exploring</h3>
              </div>
              <p className="mt-4 leading-relaxed text-muted">
                Staying current with industry trends to deliver up-to-date social media strategies.
              </p>
              <ul className="mt-5 space-y-2.5">
                {ongoingLearning.map((topic) => (
                  <li
                    key={topic}
                    className="flex items-center gap-3 rounded-xl border border-line bg-surface-2 px-4 py-3 text-sm font-medium text-ink"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
};

export default Certifications;
