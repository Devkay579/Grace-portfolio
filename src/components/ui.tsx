// components/ui.tsx – shared building blocks for every section
import React from 'react';
import { motion } from 'framer-motion';

type SectionProps = {
  id: string;
  alt?: boolean;
  children: React.ReactNode;
};

export const Section: React.FC<SectionProps> = ({ id, alt, children }) => (
  <section
    id={id}
    className={`px-4 sm:px-6 py-20 md:py-28 ${alt ? 'bg-page-alt' : 'bg-page'}`}
  >
    <div className="mx-auto max-w-6xl">{children}</div>
  </section>
);

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export const Reveal: React.FC<RevealProps> = ({ children, delay = 0, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

type SectionHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({ eyebrow, title, description }) => (
  <Reveal className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
    <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-ink">
      {eyebrow}
    </span>
    <h2 className="mt-4 text-3xl font-extrabold text-ink sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{description}</p>
    )}
  </Reveal>
);

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export const Card: React.FC<CardProps> = ({ children, className = '', hover }) => (
  <div
    className={`rounded-2xl border border-line bg-surface shadow-card ${
      hover ? 'transition duration-300 hover:-translate-y-1 hover:shadow-lift' : ''
    } ${className}`}
  >
    {children}
  </div>
);

export const IconTile: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <div
    className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand-ink ${className}`}
  >
    {children}
  </div>
);
