// components/Footer.tsx
import React from 'react';
import { Mail, Phone, ArrowUp } from 'lucide-react';
import { navItems, profile } from '../data/profile';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-page-alt px-4 sm:px-6">
      <div className="mx-auto max-w-6xl py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3">
              <img
                src={profile.photo}
                alt=""
                className="h-10 w-10 rounded-full object-cover object-[40%_25%] ring-2 ring-brand/30"
              />
              <span className="font-display text-lg font-bold text-ink">{profile.name}</span>
            </a>
            <p className="mt-4 max-w-sm leading-relaxed text-muted">
              Social media manager helping brands grow through storytelling, content strategy and
              data-backed campaigns.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-subtle">Explore</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-muted transition-colors hover:text-brand-ink">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-subtle">Get in touch</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-3 break-all text-muted transition-colors hover:text-brand-ink"
                >
                  <Mail size={16} className="shrink-0" />
                  {profile.email}
                </a>
              </li>
              {profile.phones.map((phone) => (
                <li key={phone.tel}>
                  <a
                    href={`tel:${phone.tel}`}
                    className="inline-flex items-center gap-3 text-muted transition-colors hover:text-brand-ink"
                  >
                    <Phone size={16} className="shrink-0" />
                    {phone.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between gap-4 border-t border-line pt-8">
          <p className="text-sm text-subtle">&copy; {currentYear} {profile.name}. All rights reserved.</p>
          <a
            href="#home"
            aria-label="Back to top"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white shadow-lift transition hover:-translate-y-0.5 hover:bg-brand-hover"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
