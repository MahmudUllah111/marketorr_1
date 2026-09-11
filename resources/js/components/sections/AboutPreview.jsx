import { Link } from '@inertiajs/react';
import { SectionLabel } from '../ui/primitives';
import RevealText from '../motion/RevealText';
import { COMPANY } from '../../data/company';

export default function AboutPreview() {
    const pillars = [
        {
            num: '01',
            label: 'Brand Recognition',
            summary: 'Distinctive visual systems that establish immediate authority and lasting market equity.',
            accent: '#891FFB',
        },
        {
            num: '02',
            label: 'Interface Intuition',
            summary: 'High-clarity UX and responsive digital products engineered for effortless human interaction.',
            accent: '#507AF4',
        },
        {
            num: '03',
            label: 'Engineering Scale',
            summary: 'Production-ready full-stack architectures built for high speed, reliability, and continuous growth.',
            accent: '#1BE2EB',
        },
    ];

    return (
        <section id="overview" className="relative bg-[var(--bg)] py-24 sm:py-32">
            <div className="container-x">
                <SectionLabel index="01" name="STUDIO OVERVIEW" />

                <div className="mt-8 max-w-4xl">
                    <RevealText
                        as="h2"
                        className="display-lg uppercase text-[var(--ink-strong)]"
                        lines={[
                            'We build brands',
                            'and digital experiences',
                            'that people remember.',
                        ]}
                    />
                    <p className="mt-5 font-serif text-xl italic text-[var(--ink-faint)] sm:text-2xl">
                        Strategy, identity, interface, and technology — connected.
                    </p>
                    <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--mute)] sm:text-lg">
                        {COMPANY.proposition}
                    </p>
                </div>

                {/* Three Pillars */}
                <div className="mt-16 grid gap-6 sm:grid-cols-3">
                    {pillars.map((p) => (
                        <div
                            key={p.num}
                            className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-8 transition-colors duration-200 hover:border-black/20 dark:hover:border-white/20"
                        >
                            <span className="font-display text-sm font-extrabold" style={{ color: p.accent }}>
                                {p.num}
                            </span>
                            <h3 className="mt-4 font-display text-xl font-extrabold uppercase text-[var(--ink-strong)]">
                                {p.label}
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-[var(--mute)]">
                                {p.summary}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Direct Page Link */}
                <div className="mt-12 flex items-center justify-between border-t border-[var(--line-soft)] pt-8">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                        Independent Creative &amp; Engineering Studio
                    </p>
                    <Link
                        href="/about"
                        data-cursor="explore"
                        className="btn-press group inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.16em] text-[var(--ink)] hover:text-gradient"
                    >
                        Explore Marketorr <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
