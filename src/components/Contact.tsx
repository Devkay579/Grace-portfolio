// components/Contact.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Send, MapPin, Clock, CheckCircle, XCircle, UserRound } from 'lucide-react';
import { Section, SectionHeader, Reveal, Card, IconTile } from './ui';
import { profile } from '../data/profile';

const references = [
  {
    name: 'Olorunsola Emmanuel',
    position: 'Senior Social Media Manager',
    company: 'Switchfest',
    phone: '+234 9058958353',
  },
  {
    name: 'Binuyo Damitare',
    position: 'Co-Founder',
    company: 'PluggedNg',
    phone: '+234 9091913144',
  },
];

const contactInfo = [
  {
    icon: <Mail className="h-5 w-5" />,
    title: 'Email',
    content: profile.email,
    link: `mailto:${profile.email}`,
  },
  ...profile.phones.map((phone) => ({
    icon: <Phone className="h-5 w-5" />,
    title: 'Phone',
    content: phone.display,
    link: `tel:${phone.tel}`,
  })),
  {
    icon: <MapPin className="h-5 w-5" />,
    title: 'Location',
    content: profile.location,
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: 'Response time',
    content: 'Within 24 hours',
  },
];

const inputClass =
  'w-full rounded-xl border border-line bg-surface-2 px-4 py-3.5 text-ink placeholder:text-subtle transition focus:border-brand focus:bg-surface focus:outline-none focus:ring-4 focus:ring-brand/15 disabled:cursor-not-allowed disabled:opacity-60';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const showToast = (type: 'success' | 'error', message: string) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 4000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mbdazlzj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        showToast('success', 'Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        showToast('error', 'Failed to send message. Please try again.');
      }
    } catch {
      showToast('error', 'Network error. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Section id="contact">
      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            role="status"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed left-1/2 top-20 z-[60] flex -translate-x-1/2 items-center gap-3 rounded-full px-5 py-3 text-sm font-medium text-white shadow-lift ${
              toast.type === 'success' ? 'bg-emerald-600' : 'bg-red-600'
            }`}
          >
            {toast.type === 'success' ? <CheckCircle size={18} /> : <XCircle size={18} />}
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      <SectionHeader
        eyebrow="Get in touch"
        title={
          <>
            Let's <span className="text-brand-ink">connect</span>
          </>
        }
        description="Ready to elevate your brand's social media presence? Let's talk about how we can work together."
      />

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        {/* Contact details + references */}
        <div className="space-y-8">
          <Reveal>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {contactInfo.map((info, index) => {
                const inner = (
                  <>
                    <IconTile>{info.icon}</IconTile>
                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-wider text-subtle">{info.title}</p>
                      <p className="truncate font-semibold text-ink">{info.content}</p>
                    </div>
                  </>
                );
                const base =
                  'flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 shadow-card';
                return (
                  <li key={index}>
                    {info.link ? (
                      <a
                        href={info.link}
                        className={`${base} transition hover:-translate-y-0.5 hover:border-brand/40`}
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className={base}>{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <h3 className="mb-4 text-lg font-bold text-ink">Professional references</h3>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {references.map((ref) => (
                <li key={ref.name}>
                  <Card className="flex items-start gap-4 p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface-2 text-subtle">
                      <UserRound className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-ink">{ref.name}</p>
                      <p className="text-sm text-muted">
                        {ref.position}, {ref.company}
                      </p>
                      <a
                        href={`tel:${ref.phone.replace(/\s/g, '')}`}
                        className="mt-1 inline-block text-sm font-medium text-brand-ink hover:underline"
                      >
                        {ref.phone}
                      </a>
                    </div>
                  </Card>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal delay={0.1}>
          <Card className="p-6 sm:p-9">
            <h3 className="text-2xl font-bold text-ink">Send me a message</h3>
            <p className="mt-2 text-muted">Fill out the form and I'll get back to you as soon as possible.</p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">
                    Full name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={inputClass}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={inputClass}
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-ink">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={inputClass}
                  placeholder="What is this regarding?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  rows={6}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell me about your brand, goals, and how I can help..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-brand px-6 py-4 font-semibold text-white shadow-lift transition hover:-translate-y-0.5 hover:bg-brand-hover disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send message
                  </>
                )}
              </button>

              <p className="text-center text-sm text-subtle">All fields are required. I typically respond within 24 hours.</p>
            </form>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
};

export default Contact;
