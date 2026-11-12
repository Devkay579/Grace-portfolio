// components/Experience.tsx
import React from 'react';
import { Calendar } from 'lucide-react';
import { Section, SectionHeader, Reveal, Card } from './ui';

const experiences = [
  {
    role: 'Social Media Manager',
    company: 'Relufetv',
    period: 'April 2026 – Present',
    current: true,
    achievements: [
      'Develop and execute social media content strategies across Instagram, TikTok, X and YouTube',
      'Create and manage engaging content, including captions, reels, entertainment content, carousels and event coverage',
      'Manage live/event social media coverage, capturing and publishing real-time moments to increase audience engagement',
      'Monitor social media analytics and performance to identify trends and improve content strategy',
    ],
  },
  {
    role: 'Digital Marketing Capstone Project',
    company: 'TS Academy',
    period: 'September 2026',
    achievements: [
      'Developed a Go-To-Market strategy for Chowdeck covering customer acquisition, retention, positioning and competitive analysis',
      'Created the “No Time? Chow It.” campaign, including target audience, messaging, digital channels and campaign assets',
      'Developed a marketing budget, KPI framework and 90-day growth roadmap for campaign execution and optimisation',
    ],
  },
  {
    role: 'Social Media Manager',
    company: 'InfoNine',
    period: 'June 2024 – September 2025',
    achievements: [
      "Crafted content that simplified the project's mission for easy audience connection",
      "Wrote informative captions to educate the public on InfoNine's goal and social impact",
      'Managed engagement through comments, reposts and DM responses before, during and after the event',
    ],
  },
  {
    role: 'Social Media Manager',
    company: "Joyce's Haven (Beauty Brand)",
    period: '3 Months',
    achievements: [
      'Created branded content using soft, feminine aesthetics that resonated with the beauty audience',
      'Developed a weekly content calendar with post themes (Product Spotlight, Testimonials, Tips, Behind the Scenes)',
      'Used Instagram Stories to run mini Q&As and customer polls',
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <Section id="experience">
      <SectionHeader
        eyebrow="Experience"
        title={
          <>
            Where I've <span className="text-brand-ink">worked</span>
          </>
        }
        description="Strategy, content and community management for brands, platforms and campaigns."
      />

      <ol className="relative mx-auto max-w-4xl space-y-6 before:absolute before:bottom-4 before:left-[11px] before:top-4 before:w-px before:bg-line sm:space-y-8">
        {experiences.map((exp, index) => (
          <li key={exp.company} className="relative pl-10 sm:pl-14">
            <span
              aria-hidden
              className={`absolute left-0 top-7 flex h-6 w-6 items-center justify-center rounded-full border-4 border-page ${
                exp.current ? 'bg-brand' : 'bg-line'
              }`}
            >
              {exp.current && <span className="h-2 w-2 animate-pulse rounded-full bg-white" />}
            </span>

            <Reveal delay={0.05 * index}>
              <Card hover className="p-6 sm:p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-ink sm:text-2xl">{exp.role}</h3>
                    <p className="mt-1 font-semibold text-brand-ink">{exp.company}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {exp.current && (
                      <span className="rounded-full bg-emerald-500/12 px-2.5 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                        Current
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-2 px-3 py-1 text-sm font-medium text-muted">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                  </div>
                </div>

                <ul className="mt-5 space-y-3">
                  {exp.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-3 leading-relaxed text-muted">
                      <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default Experience;
