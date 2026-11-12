// components/About.tsx
import React from 'react';
import { Target, PenTool, TrendingUp, Users } from 'lucide-react';
import { Section, SectionHeader, Reveal, Card, IconTile } from './ui';

const stats = [
  { value: '2+', label: 'Years experience' },
  { value: '3', label: 'Brands managed' },
  { value: '4.25', label: 'Graduating GPA' },
];

const specialties = [
  {
    icon: <Target className="h-5 w-5" />,
    title: 'Brand Strategy',
    description: 'Social media strategies built around your brand, audience and goals.',
  },
  {
    icon: <PenTool className="h-5 w-5" />,
    title: 'Content Creation',
    description: 'Reels, carousels, captions and event coverage that capture your brand.',
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: 'Growth & Analytics',
    description: 'Tracking performance and turning insights into better content.',
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: 'Community Building',
    description: 'Real conversations in comments and DMs that build loyal audiences.',
  },
];

const About: React.FC = () => {
  return (
    <Section id="about" alt>
      <SectionHeader
        eyebrow="About me"
        title={
          <>
            Crafting digital stories that <span className="text-brand-ink">inspire</span>
          </>
        }
      />

      <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <Reveal>
          <Card className="p-7 sm:p-10">
            <p className="font-display text-xl font-semibold leading-snug text-ink sm:text-2xl">
              I'm <span className="text-brand-ink">Folaranmi</span>, a results-oriented Mass
              Communication graduate and social media manager.
            </p>
            <p className="mt-5 leading-relaxed text-muted sm:text-lg">
              I have hands-on experience in social media management, digital storytelling and
              content strategy. I help brands connect authentically with their audiences through
              engaging visuals, community engagement and data-backed campaigns.
            </p>
            <p className="mt-4 leading-relaxed text-muted sm:text-lg">
              I'm passionate about turning insights into action, growing communities, and boosting
              conversions through relatable content.
            </p>

            <dl className="mt-8 grid grid-cols-3 divide-x divide-line rounded-2xl border border-line bg-surface-2">
              {stats.map((stat) => (
                <div key={stat.label} className="px-2 py-5 text-center sm:px-4">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-2xl font-extrabold text-brand-ink sm:text-3xl">
                    {stat.value}
                  </dd>
                  <dd className="mt-1 text-xs font-medium text-muted sm:text-sm">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </Card>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {specialties.map((item, index) => (
            <Reveal key={item.title} delay={0.08 * index}>
              <Card hover className="h-full p-6">
                <IconTile>{item.icon}</IconTile>
                <h3 className="mt-5 text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
