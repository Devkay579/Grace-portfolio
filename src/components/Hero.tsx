// components/Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Download, ArrowRight, MapPin } from 'lucide-react';
import { profile } from '../data/profile';

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

const platforms = ['Instagram', 'TikTok', 'X', 'YouTube'];

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-hidden px-4 pb-16 pt-24 sm:px-6 md:pb-20 md:pt-28"
    >
      {/* Background glow + grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-brand/15 blur-3xl" />
        <div className="absolute -left-40 top-1/2 h-[22rem] w-[22rem] rounded-full bg-sky-400/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]"
          style={{
            backgroundImage:
              'linear-gradient(to right, var(--line) 1px, transparent 1px), linear-gradient(to bottom, var(--line) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 md:grid-cols-[1.15fr_0.85fr] md:gap-12">
        {/* Copy */}
        <div className="text-center md:text-left">
          <motion.div
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3.5 py-1.5 text-xs font-medium text-muted shadow-card backdrop-blur sm:text-sm"
          >
            <span className="h-2 w-2 rounded-full bg-brand" />
            {profile.role}
            <span className="text-subtle">·</span>
            <span className="inline-flex items-center gap-1">
              <MapPin size={13} /> Lagos, Nigeria
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="mt-6 text-[2.6rem] font-extrabold leading-[1.05] text-ink sm:text-6xl lg:text-7xl"
          >
            Folaranmi{' '}
            <span className="bg-linear-to-r from-brand to-sky-500 bg-clip-text text-transparent">
              Aletan
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted md:mx-0 md:text-xl"
          >
            I help brands connect authentically with their audiences through digital storytelling,
            content strategy, and data-backed campaigns.
          </motion.p>

          <motion.div
            {...fadeUp(0.3)}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start"
          >
            <a
              href={profile.cv.href}
              download={profile.cv.filename}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 font-semibold text-white shadow-lift transition hover:-translate-y-0.5 hover:bg-brand-hover sm:w-auto"
            >
              <Download size={18} />
              Download CV
            </a>
            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-line bg-surface px-7 py-3.5 font-semibold text-ink transition hover:-translate-y-0.5 hover:border-brand/40 sm:w-auto"
            >
              Let's work together
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.ul
            {...fadeUp(0.4)}
            className="mt-8 flex flex-col items-center gap-2.5 text-sm text-muted sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6 md:justify-start"
          >
            {profile.phones.map((phone) => (
              <li key={phone.tel}>
                <a href={`tel:${phone.tel}`} className="inline-flex items-center gap-2 transition-colors hover:text-brand-ink">
                  <Phone size={15} className="text-brand-ink" />
                  {phone.display}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-brand-ink">
                <Mail size={15} className="text-brand-ink" />
                {profile.email}
              </a>
            </li>
          </motion.ul>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="relative mx-auto w-full max-w-[17rem] sm:max-w-sm"
        >
          <div aria-hidden className="absolute inset-0 translate-x-3 translate-y-3 rotate-3 rounded-[2rem] bg-linear-to-br from-brand to-sky-400 opacity-90" />
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface-2 shadow-lift">
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              className="aspect-[4/5] w-full object-cover object-[38%_30%]"
            />
          </div>

          {/* Experience card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease }}
            className="absolute -bottom-6 -left-4 rounded-2xl border border-line bg-surface/95 px-5 py-3.5 shadow-lift backdrop-blur sm:-left-8"
          >
            <p className="font-display text-3xl font-extrabold leading-none text-brand-ink">2+</p>
            <p className="mt-1 text-xs font-medium text-muted">Years of experience</p>
          </motion.div>

          {/* Platforms card */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85, ease }}
            className="absolute -right-4 top-6 max-w-[10.5rem] rounded-2xl border border-line bg-surface/95 px-4 py-3 shadow-lift backdrop-blur sm:-right-8"
          >
            <p className="text-[11px] font-semibold uppercase tracking-wider text-subtle">Platforms</p>
            <p className="mt-1 text-sm font-semibold leading-snug text-ink">{platforms.join(' · ')}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
