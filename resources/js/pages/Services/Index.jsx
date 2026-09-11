import { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { SectionLabel } from '../../components/ui/primitives';
import RevealText from '../../components/motion/RevealText';
import ConversionCTA from '../../components/sections/ConversionCTA';
import { SERVICES } from '../../data/services';
import { PROJECTS } from '../../data/projects';
import { FAQS } from '../../data/faqs';

export default function ServicesIndex() {
    const [openFaq, setOpenFaq] = useState(null);

    // Pair each service with authentic project proof
    const serviceProofs = {
        branding: PROJECTS.find((p) => p.slug === 'alarabi-fashion'),
        'ui-ux': PROJECTS.find((p) => p.slug === 'animateuix'),
        development: PROJECTS.find((p) => p.slug === 'city-online'),
    };

    return (
        <>
            <Head title="Services — Marketorr" />

            {/* Hero Section */}
            <section className="bg-[var(--bg)] pt-12 pb-20 sm:pt-16 sm:pb-28">
                <div className="container-x">
                    <SectionLabel index="01" name="SERVICES" />
                    
                    <div className="mt-8">
                        <RevealText
                            as="h1"
                            className="display-xl uppercase text-[var(--ink-strong)]"
                            lines={['Branding,', 'UI/UX', '& Development.']}
                        />
                        <p className="mt-6 max-w-4xl font-serif text-2xl italic text-[var(--ink-faint)] sm:text-3xl">
                            Strategic identity systems, intuitive digital products, and robust web engineering.
                        </p>
                        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[var(--mute)] sm:text-xl">
                            We unite brand strategy, interface design, and modern full-stack development under one roof — ensuring every digital touchpoint builds recognition and drives business results.
                        </p>
                    </div>
                </div>
            </section>

            {/* Three Core Disciplines — alternating editorial rows, hairline-separated */}
            <section className="bg-[var(--surface)] py-24 sm:py-32">
                <div className="container-x">
                    {SERVICES.map((s, i) => {
                        const grad = s.accentTo
                            ? `linear-gradient(90deg, ${s.accent}, ${s.accentTo})`
                            : s.accent;
                        const proof = serviceProofs[s.slug];
                        const flipped = i % 2 === 1;

                        return (
                            <article
                                key={s.slug}
                                className="border-t border-[var(--line)] py-16 first:border-t-0 first:pt-0 sm:py-24"
                            >
                                <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
                                    <div className={`lg:col-span-6 ${flipped ? 'lg:order-2' : ''}`}>
                                        <div className="flex items-center gap-4">
                                            <span
                                                className="font-display text-base font-extrabold tabular-nums"
                                                style={{ color: s.accent }}
                                            >
                                                {s.index}
                                            </span>
                                            <span className="h-px w-10 bg-[var(--line)]" aria-hidden />
                                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                                                Discipline
                                            </span>
                                        </div>

                                        <h2 className="mt-5 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-[var(--ink-strong)] sm:text-5xl">
                                            {s.name}
                                        </h2>
                                        <p className="mt-3 font-serif text-xl italic text-[var(--ink-faint)]">
                                            {s.headline}
                                        </p>
                                        <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--mute)]">
                                            {s.description}
                                        </p>

                                        <div className="mt-8">
                                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                                                Key Capabilities
                                            </p>
                                            <ul className="mt-4 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                                                {s.capabilities.map((c) => (
                                                    <li
                                                        key={c}
                                                        className="flex items-start gap-2.5 text-[13px] leading-relaxed text-[var(--ink)]"
                                                    >
                                                        <span
                                                            className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full"
                                                            style={{ background: s.accent }}
                                                            aria-hidden
                                                        />
                                                        {c}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="mt-10">
                                            <Link
                                                href={`/services/${s.slug}`}
                                                data-cursor="explore"
                                                className="btn-press group inline-flex items-center gap-2 rounded-full px-7 py-3 text-[13px] font-bold uppercase tracking-[0.16em] text-white"
                                                style={{ background: grad }}
                                            >
                                                Explore {s.name}
                                                <span
                                                    aria-hidden
                                                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                                >
                                                    ↗
                                                </span>
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Proof canvas — one uninterrupted image, meta set below it */}
                                    <div className={`lg:col-span-6 ${flipped ? 'lg:order-1' : ''}`}>
                                        {proof && (
                                            <Link
                                                href={`/work/${proof.slug}`}
                                                data-cursor="view"
                                                className="group block"
                                            >
                                                <div className="relative overflow-hidden rounded-2xl bg-black">
                                                    <div className="relative aspect-[16/10] overflow-hidden">
                                                        <img
                                                            src={proof.heroImage}
                                                            alt={`${s.name} proof — ${proof.title}`}
                                                            className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <span className="absolute left-5 top-5 rounded-full bg-black/70 px-3.5 py-1.5 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur-md">
                                                        {proof.client}
                                                    </span>
                                                </div>

                                                <div className="mt-5 flex items-end justify-between gap-6 border-t border-[var(--line)] pt-5">
                                                    <div>
                                                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                                                            Featured Implementation
                                                        </p>
                                                        <h3 className="mt-1.5 font-display text-xl font-bold text-[var(--ink-strong)]">
                                                            {proof.title}
                                                        </h3>
                                                    </div>
                                                    <span className="flex flex-shrink-0 items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--ink-faint)] transition-colors duration-300 group-hover:text-[var(--ink)]">
                                                        View Study
                                                        <span
                                                            aria-hidden
                                                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                                        >
                                                            ↗
                                                        </span>
                                                    </span>
                                                </div>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-[var(--bg)] py-24 sm:py-32">
                <div className="container-x max-w-4xl">
                    <div>
                        <SectionLabel index="02" name="COMMONLY ASKED" />
                        <h2 className="display-lg mt-6 uppercase text-[var(--ink-strong)]">
                            Frequently asked.
                        </h2>
                    </div>

                    <div className="mt-14 divide-y divide-[var(--line-soft)] border-y border-[var(--line-soft)]">
                        {FAQS.map((faq, idx) => {
                            const isOpen = openFaq === idx;
                            return (
                                <div key={faq.question} className="py-6">
                                    <button
                                        type="button"
                                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                                        className="flex w-full items-center justify-between text-left font-display text-lg font-bold text-[var(--ink-strong)] sm:text-xl hover:text-gradient transition-colors cursor-pointer"
                                        aria-expanded={isOpen}
                                        aria-controls={`faq-panel-${idx}`}
                                        id={`faq-trigger-${idx}`}
                                    >
                                        <span>{faq.question}</span>
                                        <span className="ml-4 font-mono text-xl font-normal text-[var(--ink-faint)]">
                                            {isOpen ? '−' : '+'}
                                        </span>
                                    </button>
                                    {isOpen && (
                                        <p
                                            id={`faq-panel-${idx}`}
                                            role="region"
                                            aria-labelledby={`faq-trigger-${idx}`}
                                            className="mt-4 text-sm leading-relaxed text-[var(--mute)] sm:text-base"
                                        >
                                            {faq.answer}
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Conversion CTA */}
            <ConversionCTA
                eyebrow="Commission Our Disciplines"
                description="Whether you need a complete rebrand, a digital product design sprint, or modern web engineering."
            />
        </>
    );
}
