import { useEffect, useState } from 'react';
import { Head } from '@inertiajs/react';
import { SectionLabel } from '../components/ui/primitives';
import RevealText from '../components/motion/RevealText';
import ConversionCTA from '../components/sections/ConversionCTA';

export default function Process() {
    const [activePhase, setActivePhase] = useState('IDEA');

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

    useEffect(() => {
        const handleScroll = () => {
            const stepElements = steps.map((s) => document.getElementById(`step-${s.num}`));
            const scrollPos = window.scrollY + window.innerHeight * 0.45;

            for (let i = stepElements.length - 1; i >= 0; i--) {
                const el = stepElements[i];
                if (el && el.offsetTop <= scrollPos) {
                    setActivePhase(steps[i].phase);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Head title="Our Process — Marketorr" />

            {/* 01 Hero Section */}
            <section className="bg-[var(--bg)] pt-12 pb-16 sm:pt-16 sm:pb-24">
                <div className="container-x">
                    <SectionLabel index="04" name="OPERATING SYSTEM" />

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
            <div className="sticky top-[72px] lg:top-[88px] z-30 border-y border-[var(--line)] bg-[var(--surface)]/90 backdrop-blur-md py-4">
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

            {/* 03 Six-Stage Detailed Workflow */}
            <section className="bg-[var(--surface)] py-20 sm:py-32">
                <div className="container-x space-y-12 sm:space-y-16">
                    {steps.map((s) => (
                        <div
                            key={s.num}
                            id={`step-${s.num}`}
                            className="rounded-3xl border border-[var(--line)] bg-[var(--bg)] p-8 sm:p-14 shadow-xl transition-all duration-300"
                        >
                            <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                                {/* Step number & phase badge */}
                                <div className="lg:col-span-2">
                                    <span
                                        className="font-display text-5xl font-extrabold sm:text-6xl"
                                        style={{ color: s.accent }}
                                    >
                                        {s.num}
                                    </span>
                                    <div className="mt-2">
                                        <span className="rounded-full bg-[var(--surface-2)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--ink-faint)]">
                                            Phase // {s.phase}
                                        </span>
                                    </div>
                                </div>

                                {/* Step Title, Subtitle, and Description */}
                                <div className="lg:col-span-5">
                                    <h2 className="font-display text-2xl font-extrabold uppercase text-[var(--ink-strong)] sm:text-3xl">
                                        {s.name}
                                    </h2>
                                    <p className="mt-2 font-serif text-lg italic text-[var(--ink-faint)]">
                                        {s.subtitle}
                                    </p>
                                    <p className="mt-4 text-sm leading-relaxed text-[var(--mute)] sm:text-base">
                                        {s.desc}
                                    </p>
                                </div>

                                {/* Deliverables list */}
                                <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8 lg:col-span-5">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                                        Key Stage Deliverables
                                    </p>
                                    <ul className="mt-4 space-y-3 text-sm text-[var(--ink)]">
                                        {s.deliverables.map((d) => (
                                            <li key={d} className="flex items-center gap-3">
                                                <span
                                                    className="h-2 w-2 rounded-full flex-shrink-0"
                                                    style={{ background: s.accent }}
                                                    aria-hidden
                                                />
                                                <span>{d}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 04 Collaboration Principles */}
            <section className="bg-[var(--bg)] py-20 sm:py-32 border-t border-[var(--line)]">
                <div className="container-x">
                    <div className="max-w-2xl">
                        <SectionLabel index="05" name="COLLABORATION MODEL" />
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
                headline="Let's build what's next."
                description="Ready to begin with stakeholder discovery, strategy, and system architecture?"
            />
        </>
    );
}
