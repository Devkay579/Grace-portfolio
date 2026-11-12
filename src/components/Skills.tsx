// components/Skills.tsx
import React from 'react';
import { PenTool, BarChart3, Users, Languages, Wrench } from 'lucide-react';
import { Section, SectionHeader, Reveal, Card, IconTile } from './ui';

const skillCategories = [
  {
    title: 'Content Creation',
    icon: <PenTool className="h-5 w-5" />,
    skills: ['Content Creation', 'Content Strategy', 'Copywriting', 'Digital Storytelling'],
  },
  {
    title: 'Strategy & Analytics',
    icon: <BarChart3 className="h-5 w-5" />,
    skills: ['Digital Marketing Strategy', 'Social Media Analytics', 'Campaign Planning', 'KPI Frameworks'],
  },
  {
    title: 'Community & Platforms',
    icon: <Users className="h-5 w-5" />,
    skills: ['Community Management', 'Public Relations', 'Live/Event Coverage', 'Instagram, TikTok, X & YouTube'],
  },
];

const languages = [
  { name: 'English', level: 'Native' },
  { name: 'Yoruba', level: 'Fluent' },
];

const tools = [
  'Meta Business Suite', 'Canva Pro', 'Google Analytics', 'Buffer',
  'Adobe Creative Suite', 'Trello', 'Asana', 'Hootsuite',
];

const Skills: React.FC = () => {
  return (
    <Section id="skills">
      <SectionHeader
        eyebrow="Skills"
        title={
          <>
            What I <span className="text-brand-ink">bring</span>
          </>
        }
        description="Creative vision combined with data-driven strategy to deliver social media results."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {skillCategories.map((category, index) => (
          <Reveal key={category.title} delay={0.08 * index}>
            <Card hover className="h-full p-6 sm:p-7">
              <IconTile>{category.icon}</IconTile>
              <h3 className="mt-5 text-xl font-bold text-ink">{category.title}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-line bg-surface-2 px-3 py-1.5 text-sm font-medium text-ink"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <Card className="h-full p-6 sm:p-7">
            <div className="flex items-center gap-3">
              <IconTile>
                <Languages className="h-5 w-5" />
              </IconTile>
              <h3 className="text-xl font-bold text-ink">Languages</h3>
            </div>
            <ul className="mt-5 divide-y divide-line">
              {languages.map((language) => (
                <li key={language.name} className="flex items-center justify-between py-3">
                  <span className="font-semibold text-ink">{language.name}</span>
                  <span className="rounded-full bg-brand-soft px-3 py-1 text-sm font-medium text-brand-ink">
                    {language.level}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>

        <Reveal delay={0.08}>
          <Card className="h-full p-6 sm:p-7">
            <div className="flex items-center gap-3">
              <IconTile>
                <Wrench className="h-5 w-5" />
              </IconTile>
              <h3 className="text-xl font-bold text-ink">Tools & Platforms</h3>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {tools.map((tool) => (
                <li
                  key={tool}
                  className="rounded-xl border border-line bg-surface-2 px-3.5 py-2 text-sm font-medium text-ink transition-colors hover:border-brand/40 hover:text-brand-ink"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
};

export default Skills;
