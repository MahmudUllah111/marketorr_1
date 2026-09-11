import { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useReducedMotion } from 'framer-motion';
import { SectionLabel } from '../ui/primitives';

const CHAPTERS = [
    {
        id: 'idea',
        step: '01',
        label: 'IDEA',
        title: 'Strategy, Identity & Creative Direction',
        headline: 'From abstract ambition to unmistakable identity.',
        description:
            'We begin by uncovering the business core, defining clear market positioning, and formulating visual identities — monograms, typographic systems, and brand principles that build lasting recognition.',
        accent: '#891FFB',
        visual: {
            title: 'Alarabi Fashion · Identity Specimen',
            tags: ['Brand Positioning', 'Monogram System', 'Typography'],
            image: '/images/projects/alarabi/hero.svg',
            caption: 'Stage 01: Core geometry and monogram formulation',
        },
    },
    {
        id: 'experience',
        step: '02',
        label: 'EXPERIENCE',
        title: 'UI/UX Architecture & Human Interaction',
        headline: 'From static identity to living digital experiences.',
        description:
            'We transform brand guidelines into high-performance digital products — mapping intuitive user journeys, engineering responsive design systems, and crafting fluid micro-interactions.',
        accent: '#507AF4',
        visual: {
            title: 'City Online & AnimateUIX · Interface Systems',
            tags: ['Atomic Design Tokens', 'SaaS Workflows', 'Mobile Flow'],
            image: '/images/projects/animateuix/hero.svg',
            caption: 'Stage 02: Interactive design tokens and kinetic curves',
        },
    },
    {
        id: 'result',
        step: '03',
        label: 'RESULT',
        title: 'Production Build & Commercial Growth',
        headline: 'From digital craft to measurable business impact.',
        description:
            'We deploy rock-solid full-stack web platforms and customer portals that convert curiosity into demand, elevating brand equity and delivering tangible business results.',
        accent: '#1BE2EB',
        visual: {
            title: 'City Online Limited · Live Platform',
            tags: ['Full-Stack Deployment', 'High Performance', 'Scalable APIs'],
            image: '/images/projects/city-online/hero.svg',
            caption: 'Stage 03: Nationwide live broadband portal & web platform',
        },
    },
];

export default function CinematicScroll() {
    const containerRef = useRef(null);
    const reduce = useReducedMotion();
    const [manualChapter, setManualChapter] = useState(null);
    const [scrollChapter, setScrollChapter] = useState(0);

    // Scroll progress across container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        if (manualChapter !== null) return;
        if (latest < 0.35) {
            setScrollChapter(0);
        } else if (latest < 0.68) {
            setScrollChapter(1);
        } else {
            setScrollChapter(2);
        }
    });

    const activeIndex = manualChapter !== null ? manualChapter : scrollChapter;
    const current = CHAPTERS[activeIndex];

    return (
        <section
            ref={containerRef}
            id="narrative"
            className="relative bg-[#0b0c10] text-white"
            data-cursor-theme="light"
        >
            {/* Desktop Sticky Cinematic Scene */}
            <div className="hidden lg:block relative h-[250svh]">
                <div className="sticky top-0 flex h-svh flex-col justify-between overflow-hidden px-8 py-10 lg:px-16 lg:py-14">
                    {/* Top Section Header & Tab Controls */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                        <div className="flex items-center gap-3">
                            <span className="flex h-6 items-end gap-[3px]" aria-hidden>
                                <span className="h-3 w-[4px] rounded-[1px] bg-[#891FFB]" />
                                <span className="h-4 w-[4px] rounded-[1px] bg-[#507AF4]" />
                                <span className="h-6 w-[4px] rounded-[1px] bg-[#1BE2EB]" />
                            </span>
                            <span className="font-display text-xs font-bold uppercase tracking-[0.24em] text-white/60">
                                Operating System // Signature Capability
                            </span>
                        </div>
                        <div className="flex items-center gap-6 font-display text-xs font-bold tracking-[0.2em] text-white/50">
                            {CHAPTERS.map((c, i) => {
                                const isActive = activeIndex === i;
                                return (
                                    <button
                                        key={c.id}
                                        type="button"
                                        onClick={() => setManualChapter(i)}
                                        className="cursor-pointer transition-colors relative py-1"
                                        style={isActive ? { color: c.accent } : undefined}
                                    >
                                        <span>{c.step} {c.label}</span>
                                        {isActive && (
                                            <motion.span
                                                layoutId="chapterUnderline"
                                                className="absolute inset-x-0 -bottom-1 h-[2px]"
                                                style={{ background: c.accent }}
                                            />
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Main Stage: Left Editorial Story + Right Visual Frame */}
                    <div className="relative my-auto grid grid-cols-12 gap-12 items-center">
                        {/* Left: Strictly ONE Chapter at a time (Zero Overlap Bug) */}
                        <div className="relative col-span-5 min-h-[340px] flex items-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={current.id}
                                    initial={{ opacity: 0, y: 14 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -14 }}
                                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                                    className="flex flex-col justify-center"
                                >
                                    <span className="font-display text-sm font-extrabold tracking-widest" style={{ color: current.accent }}>
                                        {current.step} // {current.label}
                                    </span>
                                    <h3 className="mt-3 font-display text-3xl font-extrabold uppercase leading-tight md:text-4xl text-white">
                                        {current.headline}
                                    </h3>
                                    <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                                        {current.description}
                                    </p>
                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {current.visual.tags.map((t) => (
                                            <span
                                                key={t}
                                                className="rounded-md border px-2.5 py-1 text-xs font-semibold text-white/90"
                                                style={{
                                                    borderColor: `${current.accent}50`,
                                                    backgroundColor: `${current.accent}18`,
                                                }}
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Right: Layered Visual Media Frame */}
                        <div className="relative col-span-7 aspect-[16/10] overflow-hidden rounded-2xl border border-white/15 bg-black/60 shadow-2xl">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={current.id}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.01 }}
                                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                    className="absolute inset-0 flex flex-col"
                                >
                                    <img
                                        src={current.visual.image}
                                        alt={current.visual.title}
                                        className="h-full w-full object-cover"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6">
                                        <p className="text-xs font-bold uppercase tracking-wider" style={{ color: current.accent }}>
                                            {current.visual.caption}
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Bottom Progress Footnote */}
                    <div className="flex items-center justify-between border-t border-white/10 pt-4 text-[11px] text-white/50">
                        <span>Marketorr Capability Operating System</span>
                        <div className="flex items-center gap-2">
                            <span>Stage {activeIndex + 1} of 3</span>
                            <span aria-hidden>·</span>
                            <span>Scroll to advance</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile / Tablet & Reduced-Motion Fallback: Clean stacked 3-step cards */}
            <div className="block lg:hidden container-x py-16">
                <div className="mb-10 text-center">
                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-gradient">
                        Operating System
                    </p>
                    <h2 className="mt-2 font-display text-3xl font-extrabold uppercase text-white">
                        Idea → Experience → Result
                    </h2>
                </div>

                <div className="space-y-8">
                    {CHAPTERS.map((ch) => (
                        <div
                            key={ch.id}
                            className="overflow-hidden rounded-2xl border border-white/15 bg-black/60 p-6 shadow-xl"
                        >
                            <div className="aspect-[16/10] overflow-hidden rounded-xl bg-black">
                                <img
                                    src={ch.visual.image}
                                    alt={ch.visual.title}
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <div className="mt-5">
                                <span className="font-display text-xs font-bold uppercase tracking-widest" style={{ color: ch.accent }}>
                                    {ch.step} // {ch.label}
                                </span>
                                <h3 className="mt-2 font-display text-2xl font-bold uppercase text-white">
                                    {ch.headline}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                                    {ch.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
