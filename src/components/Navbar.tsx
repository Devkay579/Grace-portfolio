// components/Navbar.tsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail, Phone, Download, Sun, Moon } from 'lucide-react';
import { useScroll } from '../hooks/useScroll';
import { useTheme } from '../hooks/useTheme';
import { useActiveSection } from '../hooks/useActiveSection';
import { navItems, profile } from '../data/profile';

const sectionIds = navItems.map((item) => item.id);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = useScroll(16);
  const active = useActiveSection(sectionIds);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const themeButton = (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-line bg-surface text-ink transition-colors hover:bg-surface-2"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: -14, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 14, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.2 }}
          className="flex"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  const solid = isScrolled || isOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? 'border-b border-line bg-page/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 md:h-[72px]">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <img
            src={profile.photo}
            alt=""
            className="h-9 w-9 rounded-full object-cover object-[40%_25%] ring-2 ring-brand/30"
          />
          <span className="font-display text-base font-bold tracking-tight text-ink sm:text-lg">
            {profile.name}
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                active === item.id
                  ? 'bg-brand-soft text-brand-ink'
                  : 'text-muted hover:text-ink'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          {themeButton}
          <a
            href={profile.cv.href}
            download={profile.cv.filename}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>

        {/* Mobile: theme + menu toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          {themeButton}
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors hover:bg-surface-2"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-line bg-page lg:hidden"
          >
            <div className="mx-auto max-w-6xl px-4 pb-6 pt-3 sm:px-6">
              <ul className="grid gap-1">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => setIsOpen(false)}
                      className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                        active === item.id
                          ? 'bg-brand-soft text-brand-ink'
                          : 'text-ink hover:bg-surface-2'
                      }`}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-surface px-4 py-3 text-sm font-semibold text-ink"
                >
                  <Mail size={16} /> Email
                </a>
                <a
                  href={`tel:${profile.phones[0].tel}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-surface px-4 py-3 text-sm font-semibold text-ink"
                >
                  <Phone size={16} /> Call
                </a>
                <a
                  href={profile.cv.href}
                  download={profile.cv.filename}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col-span-2 inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3 text-sm font-semibold text-white"
                >
                  <Download size={16} /> Download CV
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
