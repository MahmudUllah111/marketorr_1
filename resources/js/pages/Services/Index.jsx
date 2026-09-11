import { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { SectionLabel, Tag } from '../../components/ui/primitives';
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
                    <SectionLabel index="02" name="SERVICES" />
                    
                    <div className="mt-8 max-w-5xl">
                        <RevealText
                            as="h1"
                            className="display-xl uppercase text-[var(--ink-strong)]"
                            lines={['Branding,', 'UI/UX', '& Development.']}
                        />
                        <p className="mt-6 font-serif text-2xl italic text-[var(--ink-faint)] sm:text-3xl">
                            Strategic identity systems, intuitive digital products, and robust web engineering.
                        </p>
                        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[var(--mute)] sm:text-xl">
                            We unite brand strategy, interface design, and modern full-stack development under one roof — ensuring every digital touchpoint builds recognition and drives business results.
                        </p>
                    </div>
                </div>
            </section>

            {/* Three Core Disciplines Deep Dives */}
            <section className="bg-[var(--surface)] py-24 sm:py-32">
                <div className="container-x space-y-20 sm:space-y-32">
                    {SERVICES.map((s) => {
                        const grad = s.accentTo
                            ? `linear-gradient(90deg, ${s.accent}, ${s.accentTo})`
                            : s.accent;
                        const proof = serviceProofs[s.slug];

                        return (
                            <article
                                key={s.slug}
                                className="rounded-3xl border border-[var(--line)] bg-[var(--bg)] p-8 sm:p-14 shadow-xl"
                            >
                                <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
                                    {/* Left Discipline Information */}
                                    <div className="lg:col-span-6 flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center gap-4">
                                                <span className="font-display text-base font-extrabold" style={{ color: s.accent }}>
                                                    {s.index} //
                                                </span>
                                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                                                    Discipline
                                                </span>
                                            </div>
                                            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase text-[var(--ink-strong)] sm:text-4xl">
                                                {s.name}
                                            </h2>
                                            <p className="mt-2 font-serif text-lg italic text-[var(--ink-faint)]">
                                                {s.headline}
                                            </p>
                                            <p className="mt-6 text-sm leading-relaxed text-[var(--mute)] sm:text-base">
                                                {s.description}
                                            </p>

                                            {/* Capabilities Tags */}
                                            <div className="mt-8">
                                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                                                    Key Capabilities
                                                </p>
                                                <div className="mt-3 flex flex-wrap gap-2">
                                                    {s.capabilities.map((c) => (
                                                        <Tag key={c} accent={s.accent}>
                                                            {c}
                                                        </Tag>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Action Button */}
                                        <div className="mt-10 flex items-center gap-4 border-t border-[var(--line-soft)] pt-6">
                                            <Link
                                                href={`/services/${s.slug}`}
                                                data-cursor="explore"
                                                className="btn-press inline-flex items-center gap-2 rounded-full px-7 py-3 text-[13px] font-bold uppercase tracking-[0.16em] text-white shadow-lg"
                                                style={{ background: grad }}
                                            >
                                                Explore {s.name} ↗
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Right Discipline Visual Proof */}
                                    <div className="lg:col-span-6">
                                        {proof && (
                                            <Link
                                                href={`/work/${proof.slug}`}
                                                data-cursor="view"
                                                className="group block overflow-hidden rounded-2xl border border-[var(--line)] bg-black shadow-2xl transition-transform duration-300 hover:scale-[1.01]"
                                            >
                                                <div className="relative aspect-[16/10] overflow-hidden">
                                                    <img
                                                        src={proof.heroImage}
                                                        alt={`${s.name} Proof — ${proof.title}`}
                                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                                        loading="lazy"
                                                    />
                                                    <div className="absolute left-5 top-5">
                                                        <span className="rounded-full bg-black/70 px-3.5 py-1.5 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur-md">
                                                            Visual Proof · {proof.client}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="p-6 bg-[var(--surface-2)]">
                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                                                                Featured Implementation
                                                            </p>
                                                            <h3 className="mt-1 font-display text-lg font-bold text-[var(--ink-strong)]">
                                                                {proof.title}
                                                            </h3>
                                                        </div>
                                                        <span className="text-xs font-bold text-[var(--ink-faint)] group-hover:text-[var(--ink)]">
                                                            View Study ↗
                                                        </span>
                                                    </div>
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
                    <div className="text-center">
                        <SectionLabel index="03" name="COMMONLY ASKED" />
                        <h2 className="display-lg mt-4 uppercase text-[var(--ink-strong)]">
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
                                    >
                                        <span>{faq.question}</span>
                                        <span className="ml-4 font-mono text-xl font-normal text-[var(--ink-faint)]">
                                            {isOpen ? '−' : '+'}
                                        </span>
                                    </button>
                                    {isOpen && (
                                        <p className="mt-4 text-sm leading-relaxed text-[var(--mute)] sm:text-base">
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
                headline="Let's build what's next."
                description="Whether you need a complete rebrand, a digital product design sprint, or modern web engineering."
            />
        </>
    );
}
