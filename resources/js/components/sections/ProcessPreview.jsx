import { Link } from '@inertiajs/react';
import { SectionLabel } from '../ui/primitives';

export default function ProcessPreview() {
    const phases = [
        {
            num: '01',
            phase: 'PHASE 01 // FOUNDATION',
            title: 'IDEA',
            subtitle: 'Discover & Define',
            accent: '#891FFB',
            summary:
                'We uncover stakeholder vision, map real customer journeys, and formulate the strategic and architectural blueprint before writing code or drawing vectors.',
            steps: [
                { num: '01', name: 'Discover', desc: 'Commercial alignment, user context & competitive landscape' },
                { num: '02', name: 'Define', desc: 'Brand positioning, information architecture & technical blueprint' },
            ],
            deliverable: 'Strategy Brief · Architecture Plan',
        },
        {
            num: '02',
            phase: 'PHASE 02 // CREATION',
            title: 'EXPERIENCE',
            subtitle: 'Design & Build',
            accent: '#507AF4',
            summary:
                'We translate strategy into high-contrast visual identities, responsive interface systems, and robust full-stack production code engineered for speed.',
            steps: [
                { num: '03', name: 'Design', desc: 'Design systems, screen layouts & interactive Figma prototypes' },
                { num: '04', name: 'Build', desc: 'Production-ready Laravel, React & GPU-accelerated motion' },
            ],
            deliverable: 'Design System · Production Platform',
        },
        {
            num: '03',
            phase: 'PHASE 03 // IMPACT',
            title: 'RESULT',
            subtitle: 'Refine & Deliver',
            accent: '#1BE2EB',
            summary:
                'We test across devices, tune Core Web Vitals to sub-second speeds, and execute seamless production deployment backed by exhaustive documentation.',
            steps: [
                { num: '05', name: 'Refine', desc: 'Device testing, WCAG 2.1 AA accessibility & speed tuning' },
                { num: '06', name: 'Deliver', desc: 'Production launch, SSL/DNS setup & master asset handoff' },
            ],
            deliverable: 'Sub-second Speed · Live Launch',
        },
    ];

    return (
        <section id="process" className="relative bg-[var(--surface)] py-24 sm:py-32">
            <div className="container-x">
                {/* Header */}
                <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
                    <div>
                        <SectionLabel index="04" name="PROCESS ARCHITECTURE" />
                        <h2 className="display-lg mt-6 uppercase text-[var(--ink-strong)]">
                            Measured craft. <br className="hidden sm:inline" />
                            <span className="text-gradient">Systematic execution.</span>
                        </h2>
                        <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--mute)] sm:text-lg">
                            Every brand identity and digital product moves through a transparent 6-stage framework organized across 3 disciplined milestones.
                        </p>
                    </div>
                    <Link
                        href="/process"
                        data-cursor="explore"
                        className="btn-press group inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.16em] text-[var(--ink)] hover:text-gradient"
                    >
                        Explore Process Guide <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </Link>
                </div>

                {/* Linear Connected Stepper Strip */}
                <div className="mt-14 hidden lg:block rounded-2xl border border-[var(--line)] bg-[var(--bg)] p-6">
                    <div className="grid grid-cols-6 gap-4 text-center">
                        {[
                            { num: '01', name: 'DISCOVER', phase: 'Idea', accent: '#891FFB' },
                            { num: '02', name: 'DEFINE', phase: 'Idea', accent: '#6D4CF8' },
                            { num: '03', name: 'DESIGN', phase: 'Experience', accent: '#507AF4' },
                            { num: '04', name: 'BUILD', phase: 'Experience', accent: '#35AEEF' },
                            { num: '05', name: 'REFINE', phase: 'Result', accent: '#26C7DD' },
                            { num: '06', name: 'DELIVER', phase: 'Result', accent: '#1BE2EB' },
                        ].map((s, idx) => (
                            <div key={s.num} className="relative flex flex-col items-center">
                                {idx < 5 && (
                                    <div
                                        className="absolute left-[50%] top-3.5 h-[2px] w-full bg-[var(--line)]"
                                        aria-hidden
                                    />
                                )}
                                <span
                                    className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full font-display text-[11px] font-extrabold text-white shadow-sm"
                                    style={{ background: s.accent }}
                                >
                                    {s.num}
                                </span>
                                <span className="mt-3 font-display text-xs font-bold uppercase tracking-wider text-[var(--ink-strong)]">
                                    {s.name}
                                </span>
                                <span className="text-[10px] font-semibold uppercase tracking-widest text-[var(--ink-faint)]">
                                    Phase {s.phase}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Three Editorial Phase Pillars */}
                <div className="mt-8 grid gap-8 lg:grid-cols-3">
                    {phases.map((p) => (
                        <div
                            key={p.num}
                            className="group flex flex-col justify-between rounded-3xl border border-[var(--line)] bg-[var(--bg)] p-8 sm:p-10 transition-all duration-300 hover:border-black/30 dark:hover:border-white/30 hover:shadow-xl"
                        >
                            <div>
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                                        {p.phase}
                                    </span>
                                    <span
                                        className="font-display text-sm font-extrabold tracking-widest"
                                        style={{ color: p.accent }}
                                    >
                                        {p.num}
                                    </span>
                                </div>

                                <h3 className="mt-5 font-display text-3xl font-extrabold uppercase text-[var(--ink-strong)] transition-transform duration-300 group-hover:translate-x-1 sm:text-4xl">
                                    {p.title}
                                </h3>

                                <p className="mt-1 font-serif text-sm italic text-[var(--ink-faint)] sm:text-base">
                                    {p.subtitle}
                                </p>

                                <p className="mt-4 text-sm leading-relaxed text-[var(--mute)]">
                                    {p.summary}
                                </p>

                                {/* Nested Stages */}
                                <div className="mt-8 space-y-4 border-t border-[var(--line-soft)] pt-6">
                                    {p.steps.map((s) => (
                                        <div key={s.num} className="flex items-start gap-3">
                                            <span
                                                className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full font-display text-[10px] font-bold text-white"
                                                style={{ background: p.accent }}
                                            >
                                                {s.num}
                                            </span>
                                            <div>
                                                <p className="font-display text-xs font-bold uppercase tracking-wider text-[var(--ink-strong)]">
                                                    {s.name}
                                                </p>
                                                <p className="mt-0.5 text-xs text-[var(--mute)]">
                                                    {s.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8 border-t border-[var(--line-soft)] pt-5">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--ink-faint)]">
                                    Key Milestone:
                                </span>
                                <p className="mt-1 text-xs font-semibold text-[var(--ink)]">
                                    {p.deliverable}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Process Link Bar */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-[var(--line)] bg-[var(--surface-2)] p-6 sm:flex-row sm:px-8">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)] text-center sm:text-left">
                        Review detailed deliverables, stage timelines, and direct senior collaboration standards.
                    </p>
                    <Link
                        href="/process"
                        data-cursor="explore"
                        className="btn-press inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--bg)] px-6 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-[var(--ink)] transition-colors duration-200 hover:border-black/30 dark:hover:border-white/30"
                    >
                        Detailed Process Breakdown ↗
                    </Link>
                </div>
            </div>
        </section>
    );
}

