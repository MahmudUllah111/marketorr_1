import { useEffect, useState } from 'react';
import { Head } from '@inertiajs/react';
import { SectionLabel } from '../components/ui/primitives';
import RevealText from '../components/motion/RevealText';
import ConversionCTA from '../components/sections/ConversionCTA';

export default function Process() {
    const [activePhase, setActivePhase] = useState('IDEA');
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            num: '01',
            name: 'DISCOVER',
            phase: 'IDEA',
            subtitle: 'Understand business, users and context.',
            desc: 'Deep investigation into stakeholder vision, commercial objectives, user psychology, and competitive landscape before any visual or technical decisions are made.',
            deliverables: [
                'Stakeholder interviews & business model alignment',
                'User persona & problem space definition',
                'Competitive landscape & market gap analysis',
                'Technical requirements & constraint mapping',
            ],
            accent: '#891FFB',
        },
        {
            num: '02',
            name: 'DEFINE',
            phase: 'IDEA',
            subtitle: 'Establish strategy, objectives and direction.',
            desc: 'Formulating the strategic foundation, value proposition, creative territory, and architectural blueprint that guides all subsequent design and engineering.',
            deliverables: [
                'Strategic positioning brief & brand narrative',
                'Information architecture & customer user journeys',
                'Technical architecture & component scope plan',
                'Key performance metrics & milestone roadmap',
            ],
            accent: '#6D4CF8',
        },
        {
            num: '03',
            name: 'DESIGN',
            phase: 'EXPERIENCE',
            subtitle: 'Create identity or interface systems.',
            desc: 'Translating strategy into high-contrast visual identities, responsive interface components, spatial layouts, and interactive prototypes built for clarity.',
            deliverables: [
                'Visual identity system, marks, & typographic scale',
                'Curated color palettes & tokenized asset libraries',
                'High-fidelity screen layouts across all viewports',
                'Interactive Figma prototypes for rapid validation',
            ],
            accent: '#507AF4',
        },
        {
            num: '04',
            name: 'BUILD',
            phase: 'EXPERIENCE',
            subtitle: 'Turn the system into production-ready experiences.',
            desc: 'Engineering approved designs into production-grade code using modern Laravel, React, and Tailwind CSS with strict attention to performance and security.',
            deliverables: [
                'Production-ready codebase with clean architecture',
                'Accessible, semantic HTML5 & responsive execution',
                'Fast API integrations & content management schemas',
                'Fluid micro-interactions & GPU-accelerated motion',
            ],
            accent: '#35AEEF',
        },
        {
            num: '05',
            name: 'REFINE',
            phase: 'RESULT',
            subtitle: 'Test, optimize and polish.',
            desc: 'Rigorous cross-browser testing, device audits, Core Web Vitals optimization, typography contrast checks, and iterative polishing cycles.',
            deliverables: [
                'Cross-device testing (iOS, Android, macOS, Windows)',
                'Sub-second load time & Core Web Vitals optimization',
                'Accessibility (WCAG 2.1 AA) compliance review',
                'Pre-release staging QA & stakeholder review',
            ],
            accent: '#26C7DD',
        },
        {
            num: '06',
            name: 'DELIVER',
            phase: 'RESULT',
            subtitle: 'Launch with documentation and scalable systems.',
            desc: 'Seamless zero-downtime production deployment, comprehensive asset handoff, codified style guides, and documentation for internal teams.',
            deliverables: [
                'Production deployment & SSL/DNS configuration',
                'Comprehensive brand guidelines or dev handbook',
                'Master asset library & export kit handoff',
                'Post-launch stability monitoring & support',
            ],
            accent: '#1BE2EB',
        },
    ];

    /**
     * Tracks which stage is under the reading line so the sticky rail and the
     * workflow bar stay in sync. Reads are batched into a single rAF frame to
     * keep the scroll handler off the layout-thrashing path.
     */
    useEffect(() => {
        let frame = null;

        const measure = () => {
            frame = null;
            const line = window.innerHeight * 0.45;
            let current = 0;

            for (let i = 0; i < steps.length; i++) {
                const el = document.getElementById(`step-${steps[i].num}`);
                if (el && el.getBoundingClientRect().top <= line) {
                    current = i;
                }
            }

            setActiveStep(current);
            setActivePhase(steps[current].phase);
        };

        const handleScroll = () => {
            if (frame === null) {
                frame = window.requestAnimationFrame(measure);
            }
        };

        measure();
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
            if (frame !== null) {
                window.cancelAnimationFrame(frame);
            }
        };
    }, []);

    return (
        <>
            <Head title="Our Process — Marketorr" />

            {/* 01 Hero Section */}
            <section className="bg-[var(--bg)] pt-12 pb-16 sm:pt-16 sm:pb-24">
                <div className="container-x">
                    <SectionLabel index="01" name="OPERATING SYSTEM" />

                    <div className="mt-8 max-w-5xl">
                        <RevealText
                            as="h1"
                            className="display-xl uppercase text-[var(--ink-strong)]"
                            lines={['From idea', 'to experience', 'to result.']}
                        />
                        <p className="mt-6 font-serif text-2xl italic text-[var(--ink-faint)] sm:text-3xl">
                            A disciplined six-stage progression from discovery to measurable impact.
                        </p>
                        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[var(--mute)] sm:text-xl">
                            Every brand identity and digital platform we build moves through a rigorous workflow that connects commercial insight with uncompromised design craft and full-stack engineering.
                        </p>
                    </div>
                </div>
            </section>

            {/* 02 Sticky / Progressive Activation Motif Bar */}
            <div className="sticky top-[64px] lg:top-[78px] z-30 border-y border-[var(--line)] bg-[var(--surface)]/90 backdrop-blur-md py-4">
                <div className="container-x flex flex-wrap items-center justify-between gap-4">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                        Workflow Progression:
                    </span>
                    <div className="flex items-center gap-6 font-display text-sm font-extrabold tracking-wider">
                        <span
                            className={`transition-all duration-300 ${
                                activePhase === 'IDEA'
                                    ? 'text-[#891FFB] scale-110'
                                    : 'text-[var(--ink-faint)] opacity-60'
                            }`}
                        >
                            01–02 IDEA
                        </span>
                        <span className="text-[var(--ink-faint)]">→</span>
                        <span
                            className={`transition-all duration-300 ${
                                activePhase === 'EXPERIENCE'
                                    ? 'text-[#507AF4] scale-110'
                                    : 'text-[var(--ink-faint)] opacity-60'
                            }`}
                        >
                            03–04 EXPERIENCE
                        </span>
                        <span className="text-[var(--ink-faint)]">→</span>
                        <span
                            className={`transition-all duration-300 ${
                                activePhase === 'RESULT'
                                    ? 'text-[#1BE2EB] scale-110'
                                    : 'text-[var(--ink-faint)] opacity-60'
                            }`}
                        >
                            05–06 RESULT
                        </span>
                    </div>
                </div>
            </div>

            {/* 03 Six-Stage Workflow — sticky stage rail beside a scrolling editorial column */}
            <section className="bg-[var(--surface)] py-20 sm:py-28">
                <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
                    {/* Sticky stage rail (desktop only — it has no meaning once the columns stack) */}
                    <aside className="hidden lg:col-span-4 lg:block" aria-hidden>
                        <div className="sticky top-[172px]">
                            <span
                                className="block font-display text-[9rem] font-extrabold leading-[0.8] tabular-nums transition-colors duration-500"
                                style={{ color: steps[activeStep].accent }}
                            >
                                {steps[activeStep].num}
                            </span>
                            <p className="mt-4 font-display text-3xl font-extrabold uppercase tracking-tight text-[var(--ink-strong)] transition-opacity duration-500">
                                {steps[activeStep].name}
                            </p>
                            <p className="mt-2 font-serif text-lg italic text-[var(--ink-faint)]">
                                {steps[activeStep].subtitle}
                            </p>

                            <ol className="mt-10 space-y-px border-l border-[var(--line)]">
                                {steps.map((s, i) => (
                                    <li key={s.num} className="relative">
                                        <span
                                            className="absolute -left-px top-0 h-full w-[2px] origin-top transition-transform duration-500"
                                            style={{
                                                background: s.accent,
                                                transform: `scaleY(${i <= activeStep ? 1 : 0})`,
                                            }}
                                        />
                                        <span
                                            className={`flex items-baseline gap-4 py-2.5 pl-5 font-display text-[12px] font-bold uppercase tracking-[0.18em] transition-colors duration-300 ${
                                                i === activeStep
                                                    ? 'text-[var(--ink-strong)]'
                                                    : 'text-[var(--ink-faint)]'
                                            }`}
                                        >
                                            <span className="tabular-nums opacity-60">{s.num}</span>
                                            {s.name}
                                        </span>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </aside>

                    {/* Scrolling stage column — hairline rules instead of repeated heavy cards */}
                    <div className="lg:col-span-8">
                        {steps.map((s, i) => (
                            <article
                                key={s.num}
                                id={`step-${s.num}`}
                                className={`border-t border-[var(--line)] py-12 first:border-t-0 first:pt-0 sm:py-16 ${
                                    i === activeStep ? '' : 'lg:opacity-60'
                                } transition-opacity duration-500`}
                            >
                                <div className="flex items-baseline gap-5">
                                    <span
                                        className="font-display text-4xl font-extrabold tabular-nums lg:hidden"
                                        style={{ color: s.accent }}
                                    >
                                        {s.num}
                                    </span>
                                    <div>
                                        <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-[var(--ink-strong)] sm:text-4xl">
                                            {s.name}
                                        </h2>
                                        <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                                            Phase — {s.phase}
                                        </p>
                                    </div>
                                </div>

                                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--mute)]">
                                    {s.desc}
                                </p>

                                <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                                    {s.deliverables.map((d) => (
                                        <li key={d} className="flex items-start gap-3 text-sm leading-relaxed text-[var(--ink)]">
                                            <span
                                                className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full"
                                                style={{ background: s.accent }}
                                                aria-hidden
                                            />
                                            <span>{d}</span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* 04 Collaboration Principles */}
            <section className="bg-[var(--bg)] py-20 sm:py-32 border-t border-[var(--line)]">
                <div className="container-x">
                    <div className="max-w-2xl">
                        <SectionLabel index="02" name="COLLABORATION MODEL" />
                        <h2 className="display-lg mt-4 uppercase text-[var(--ink-strong)]">
                            How we partner.
                        </h2>
                        <p className="mt-4 text-base text-[var(--mute)]">
                            Direct, transparent, and senior-led collaboration built to eliminate agency bureaucracy.
                        </p>
                    </div>

                    <div className="mt-14 grid gap-8 sm:grid-cols-2">
                        {[
                            {
                                title: 'Direct Senior Leadership',
                                desc: 'You collaborate directly with the creative and technical partners making the decisions. No junior buffers or filtered telephone games.',
                            },
                            {
                                title: 'Radical Transparency',
                                desc: 'Weekly milestone reviews, open design staging, and clear communication channels so you always know project status.',
                            },
                            {
                                title: 'Iterative Review Cadence',
                                desc: 'Structured feedback checkpoints that surface key decisions early, avoiding costly late-stage surprises or scope churn.',
                            },
                            {
                                title: 'Production-Grade Handoff',
                                desc: 'We deliver clean, scalable systems — standardized vector assets, organized tokens, and documented repositories.',
                            },
                        ].map((c) => (
                            <div
                                key={c.title}
                                className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-8 sm:p-10 flex flex-col justify-between"
                            >
                                <div>
                                    <h3 className="font-display text-xl font-bold uppercase text-[var(--ink-strong)]">
                                        {c.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-[var(--mute)] sm:text-base">
                                        {c.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Single Conversion CTA */}
            <ConversionCTA
                eyebrow="Initiate Stage 01"
                description="Ready to begin with stakeholder discovery, strategy, and system architecture?"
            />
        </>
    );
}
