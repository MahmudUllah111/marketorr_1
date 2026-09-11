import { useState } from 'react';
import { useForm } from '@inertiajs/react';
import MagneticButton from '../motion/MagneticButton';
import { SectionLabel } from '../ui/primitives';
import RevealText from '../motion/RevealText';
import { CONTACT } from '../../data/contact';
import { SOCIAL_LINKS } from '../../data/navigation';

const DISCIPLINE_CHIPS = [
    'Branding & Identity',
    'UI/UX',
    'Development',
    'Multiple Disciplines',
];

const BUDGET_OPTIONS = [
    '$2,500 – $5,000',
    '$5,000 – $15,000',
    '$15,000+',
    'Not sure yet',
];

const TIMELINE_OPTIONS = [
    'Immediately (< 1 Month)',
    '1 – 3 Months',
    '3 – 6 Months',
    'Flexible / Exploring',
];

export default function Contact() {
    const { data, setData, post, processing, wasSuccessful, errors, reset } = useForm({
        name: '',
        email: '',
        company: '',
        type: DISCIPLINE_CHIPS[0],
        budget: BUDGET_OPTIONS[0],
        timeline: TIMELINE_OPTIONS[1],
        message: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post('/contact', {
            preserveScroll: true,
            onSuccess: () => reset('message'),
        });
    };

    const verifiedSocials = SOCIAL_LINKS.filter((s) => s.status === 'verified');

    return (
        <section id="contact" className="relative overflow-hidden bg-[var(--bg)] section-pad">
            <div className="container-x relative">
                <SectionLabel index="04" name="CONTACT" />
                <RevealText
                    as="h2"
                    className="display-lg mt-8 uppercase text-[var(--ink-strong)]"
                    lines={['Have a project?', "Let's make", 'it matter.']}
                />
                <p className="mt-2 font-serif text-xl italic text-[var(--ink-faint)]">
                    Direct communication with the creative leadership team.
                </p>

                <div className="mt-12 grid gap-12 lg:grid-cols-12">
                    {/* Left Column: Direct Contact & Office Channels */}
                    <div className="lg:col-span-5 flex flex-col justify-between">
                        <div>
                            <MagneticButton strength={10}>
                                <a
                                    href={`mailto:${CONTACT.email}`}
                                    data-cursor="cta"
                                    className="btn-press group relative flex items-center justify-between overflow-hidden rounded-2xl border border-[var(--field-line)] bg-[var(--surface)] p-6 transition-all duration-300 hover:border-black/30 dark:hover:border-white/30"
                                >
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                                            Direct Inquiries
                                        </p>
                                        <p className="mt-1 font-display text-lg font-bold text-[var(--ink-strong)]">
                                            {CONTACT.email}
                                        </p>
                                    </div>
                                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--surface-2)] text-base font-bold group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
                                        ↗
                                    </span>
                                </a>
                            </MagneticButton>

                            <div className="mt-8 space-y-6 text-sm">
                                <div>
                                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">Phone</p>
                                    <a href={`tel:${CONTACT.phone}`} className="link-underline btn-press mt-1 inline-block font-semibold text-[var(--ink)]">
                                        {CONTACT.phoneFormatted}
                                    </a>
                                </div>
                                <div>
                                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">Location</p>
                                    <p className="mt-1 font-semibold text-[var(--ink)]">
                                        Dhaka, Bangladesh · Remote Worldwide
                                    </p>
                                </div>
                                <div>
                                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">Studio Hours</p>
                                    <p className="mt-1 text-xs text-[var(--mute)]">
                                        {CONTACT.hours}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">Verified Channels</p>
                                    <div className="mt-2 flex flex-wrap gap-4 font-semibold text-[var(--ink)]">
                                        {verifiedSocials.map((s) => (
                                            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="link-underline btn-press text-xs uppercase tracking-wider">
                                                {s.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 rounded-xl border border-[var(--line)] bg-[var(--surface-2)] p-5">
                            <p className="text-xs font-semibold text-[var(--ink)]">
                                Commercial Transparency
                            </p>
                            <p className="mt-1 text-xs leading-relaxed text-[var(--mute)]">
                                Inquiries are confidential and reviewed directly by our founding team. We do not share client contact information.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Upgraded Inquiry Form */}
                    <form onSubmit={submit} className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-9 lg:col-span-7 shadow-sm" aria-label="Project inquiry form">
                        {/* 1. Project Discipline Chips */}
                        <div>
                            <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--ink-faint)]">
                                01 // Select Primary Discipline
                            </span>
                            <div className="flex flex-wrap gap-2.5">
                                {DISCIPLINE_CHIPS.map((chip) => {
                                    const selected = data.type === chip;
                                    return (
                                        <button
                                            type="button"
                                            key={chip}
                                            onClick={() => setData('type', chip)}
                                            className={`btn-press rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                                                selected
                                                    ? 'bg-black text-white dark:bg-white dark:text-black shadow-md'
                                                    : 'border border-[var(--line)] bg-[var(--surface-2)] text-[var(--ink-faint)] hover:text-[var(--ink)]'
                                            }`}
                                        >
                                            {chip}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* 2. Text Fields */}
                        <div className="mt-8 grid gap-6 sm:grid-cols-2">
                            {[
                                ['Your Name*', 'name', 'text', 'e.g. Sarah Jenkins'],
                                ['Email Address*', 'email', 'email', 'e.g. sarah@company.com'],
                                ['Company / Brand', 'company', 'text', 'e.g. Studio Inc.'],
                            ].map(([label, key, type, ph]) => (
                                <label key={key} className="field-wrap block">
                                    <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--ink-faint)]">
                                        {label}
                                    </span>
                                    <input
                                        type={type}
                                        value={data[key]}
                                        onChange={(e) => setData(key, e.target.value)}
                                        placeholder={ph}
                                        className="field-underline w-full bg-transparent pb-3 text-[14px]"
                                    />
                                    {errors[key] && <span className="mt-1 block text-[11px] text-red-500">{errors[key]}</span>}
                                </label>
                            ))}

                            <label className="field-wrap block">
                                <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--ink-faint)]">
                                    Approximate Budget
                                </span>
                                <select
                                    value={data.budget}
                                    onChange={(e) => setData('budget', e.target.value)}
                                    className="field-underline w-full bg-transparent pb-3 text-[14px]"
                                >
                                    {BUDGET_OPTIONS.map((b) => (
                                        <option key={b} value={b} className="bg-[var(--surface)] text-[var(--ink)]">
                                            {b}
                                        </option>
                                    ))}
                                </select>
                            </label>

                            <label className="field-wrap block">
                                <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--ink-faint)]">
                                    Expected Timeline
                                </span>
                                <select
                                    value={data.timeline}
                                    onChange={(e) => setData('timeline', e.target.value)}
                                    className="field-underline w-full bg-transparent pb-3 text-[14px]"
                                >
                                    {TIMELINE_OPTIONS.map((t) => (
                                        <option key={t} value={t} className="bg-[var(--surface)] text-[var(--ink)]">
                                            {t}
                                        </option>
                                    ))}
                                </select>
                            </label>

                            <label className="field-wrap block sm:col-span-2">
                                <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--ink-faint)]">
                                    Project Scope &amp; Goals*
                                </span>
                                <textarea
                                    rows={4}
                                    value={data.message}
                                    onChange={(e) => setData('message', e.target.value)}
                                    placeholder="Tell us about your brand context, primary objectives, expected timeline, and target deliverables…"
                                    className="field-underline w-full resize-none bg-transparent pb-3 text-[14px]"
                                />
                                {errors.message && <span className="mt-1 block text-[11px] text-red-500">{errors.message}</span>}
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={processing || wasSuccessful}
                            data-cursor="cta"
                            className="btn-press mt-8 flex w-full items-center justify-center gap-3 rounded-full py-4 text-[13px] font-bold uppercase tracking-[0.18em] text-white disabled:opacity-60"
                            style={{ background: 'linear-gradient(90deg,#891FFB,#507AF4,#1BE2EB)' }}
                        >
                            {processing ? (
                                <>
                                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden />
                                    Submitting inquiry…
                                </>
                            ) : wasSuccessful ? (
                                'Inquiry recorded ✓'
                            ) : (
                                'Send project inquiry →'
                            )}
                        </button>

                        <p className="mt-3 text-center text-[11px] text-[var(--ink-faint)]">
                            {wasSuccessful
                                ? 'Thank you — we have received your project details and will review them carefully.'
                                : 'All inquiries reviewed by our core strategy team.'}
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
