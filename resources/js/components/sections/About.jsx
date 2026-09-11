import { motion } from 'framer-motion';
import RevealText from '../motion/RevealText';
import { SectionLabel } from '../ui/primitives';
import { COMPANY } from '../../data/company';

const DISCIPLINE_PILLARS = [
    {
        tag: 'BRANDING',
        title: 'Recognition',
        discipline: 'Brand Strategy & Identity',
        description: 'Distinctive visual characters, monograms, and typography systems built to make ambitious businesses unmistakable.',
        accent: '#891FFB',
        specimen: 'AF / MONOGRAM',
    },
    {
        tag: 'UI/UX DESIGN',
        title: 'Intuition',
        discipline: 'Web & Product Experience',
        description: 'Human-centered digital interfaces, component design systems, and friction-free user journeys across web and mobile.',
        accent: '#507AF4',
        specimen: 'DESIGN TOKENS',
    },
    {
        tag: 'DEVELOPMENT',
        title: 'Performance',
        discipline: 'Modern Web Engineering',
        description: 'High-speed frontend architectures, robust full-stack platforms, and clean codebases built for scale and SEO authority.',
        accent: '#1BE2EB',
        specimen: 'CORE WEB VITALS',
    },
    {
        tag: 'IMPACT',
        title: 'Trust',
        discipline: 'Commercial Outcomes',
        description: 'Enduring customer confidence created by connecting strategic vision to meticulous digital craft across every touchpoint.',
        accent: '#891FFB',
        specimen: 'EQUITY & CONVERSION',
    },
];

export default function About() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-[var(--bg)] section-pad"
        >
            <div className="container-x relative">
                <SectionLabel index="01" name="ABOUT MARKETORR" />
                
                <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:items-end">
                    <div className="lg:col-span-8">
                        <RevealText
                            as="h2"
                            className="font-display text-3xl font-extrabold uppercase leading-[1.08] tracking-tight text-[var(--ink-strong)] sm:text-4xl md:text-5xl"
                            lines={[
                                'We build brands',
                                'and digital experiences',
                                'that people remember.',
                            ]}
                        />
                        <p className="mt-3 font-serif text-xl italic text-[var(--ink-faint)] sm:text-2xl">
                            Strategy, identity, interface, and technology — connected.
                        </p>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-6 h-[2px] w-36 origin-left"
                            style={{ background: 'linear-gradient(90deg,#891FFB,#507AF4,#1BE2EB)' }}
                            aria-hidden
                        />
                    </div>
                    <div className="lg:col-span-4">
                        <p className="text-[15px] leading-relaxed text-[var(--mute)]">
                            {COMPANY.philosophy.summary}
                        </p>
                        <a
                            href="#services"
                            data-cursor="explore"
                            className="link-underline btn-press mt-5 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--ink)]"
                        >
                            Explore capabilities <span data-arrow aria-hidden>→</span>
                        </a>
                    </div>
                </div>

                {/* Visual Typography & Craft Specimen Strip */}
                <div className="mt-14 overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface-2)] p-6 sm:p-8">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:items-center">
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--ink-faint)]">
                                Studio Focus
                            </p>
                            <p className="mt-1 font-display text-lg font-extrabold uppercase text-[var(--ink-strong)]">
                                Three Disciplines. Zero Silos.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 sm:justify-center">
                            <span className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 py-1 text-xs font-semibold text-[var(--ink)]">
                                Editorial Typography
                            </span>
                            <span className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 py-1 text-xs font-semibold text-[var(--ink)]">
                                Atomic UI Systems
                            </span>
                            <span className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 py-1 text-xs font-semibold text-[var(--ink)]">
                                Scalable Code
                            </span>
                        </div>
                        <div className="text-left sm:text-right">
                            <span className="font-display text-sm font-bold tracking-wider text-gradient">
                                IDEA → EXPERIENCE → RESULT
                            </span>
                        </div>
                    </div>
                </div>

                {/* Disciplined Pillars */}
                <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
                    {DISCIPLINE_PILLARS.map((p) => (
                        <div key={p.title} className="group bg-[var(--surface)] p-7 transition-colors duration-200 hover:bg-[var(--surface-2)] md:p-8">
                            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                                <span>{p.tag}</span>
                                <span className="font-mono text-[9px] text-[var(--mute)]">{p.specimen}</span>
                            </div>
                            <h3 className="mt-4 font-display text-2xl font-extrabold uppercase text-[var(--ink-strong)]">
                                {p.title}
                            </h3>
                            <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: p.accent }}>
                                {p.discipline}
                            </p>
                            <p className="mt-3 text-[13px] leading-relaxed text-[var(--mute)]">
                                {p.description}
                            </p>
                            <span
                                className="mt-6 block h-[2px] w-8 transition-[width] duration-300 group-hover:w-16"
                                style={{ background: p.accent }}
                                aria-hidden
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
