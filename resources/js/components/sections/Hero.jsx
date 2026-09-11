import { Link } from '@inertiajs/react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { EASE } from '../../lib/motion';
import MagneticButton from '../motion/MagneticButton';
import Stage from '../decor/Stage';

/**
 * Curated layered composition of authentic Marketorr client work:
 * - Alarabi Fashion (Branding / Monogram)
 * - City Online Limited (Desktop Platform / Web UI)
 * - Near to Nature (Botanical Packaging & Identity)
 * - AnimateUIX (Motion Curve Interface)
 */
function HeroWorkComposition({ scrollProgress, reduce }) {
    const yCenter = useTransform(scrollProgress, [0, 1], [0, -32]);
    const yLeft = useTransform(scrollProgress, [0, 1], [0, -18]);
    const yRight = useTransform(scrollProgress, [0, 1], [0, -42]);

    const motionStyle = reduce
        ? {}
        : { y: yCenter };

    return (
        <div className="relative mx-auto mt-12 w-full max-w-6xl px-2 sm:mt-16 sm:px-4">
            <div className="relative grid grid-cols-12 gap-3 sm:gap-6 items-center">
                {/* 1. Left Card: Alarabi Fashion Monogram Specimen */}
                <motion.div
                    style={reduce ? undefined : { y: yLeft }}
                    initial={{ opacity: 0, y: 24, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.35, ease: [...EASE] }}
                    className="col-span-12 sm:col-span-4 -rotate-1 transform rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-2 sm:p-3 shadow-xl transition-transform duration-300 hover:rotate-0 hover:scale-[1.02]"
                >
                    <div className="relative aspect-[16/11] overflow-hidden rounded-xl bg-[#140721]" data-cursor-theme="light">
                        <img
                            src="/images/projects/alarabi/hero.svg"
                            alt="Alarabi Fashion Brand Monogram"
                            className="h-full w-full object-cover"
                            loading="eager"
                        />
                        <div className="absolute left-2.5 top-2.5">
                            <span className="rounded-full bg-black/70 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#d4af37] backdrop-blur-md">
                                Identity · Alarabi
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between px-2 pt-2.5 text-[11px] font-semibold text-[var(--ink-faint)]">
                        <span>AF Monogram &amp; Packaging</span>
                        <span className="font-display font-bold text-[#891FFB]">01</span>
                    </div>
                </motion.div>

                {/* 2. Center Dominant Card: City Online Web Platform */}
                <motion.div
                    style={motionStyle}
                    initial={{ opacity: 0, y: 28, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.55, delay: 0.25, ease: [...EASE] }}
                    className="col-span-12 sm:col-span-5 z-20 transform rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-2 sm:p-3 shadow-2xl transition-transform duration-300 hover:scale-[1.01]"
                >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#040d1a]" data-cursor-theme="light">
                        <img
                            src="/images/projects/city-online/hero.svg"
                            alt="City Online ISP Web Platform & Portal"
                            className="h-full w-full object-cover"
                            loading="eager"
                        />
                        <div className="absolute left-3 top-3">
                            <span className="rounded-full bg-black/70 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#1be2eb] backdrop-blur-md">
                                Platform UI · City Online
                            </span>
                        </div>
                        <div className="absolute bottom-3 right-3">
                            <span className="rounded-full bg-[#1be2eb] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-black">
                                Live Build ↗
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between px-2 pt-2.5 text-[11px] font-semibold text-[var(--ink-faint)]">
                        <span>Broadband Portal &amp; Web Platform</span>
                        <span className="font-display font-bold text-[#1BE2EB]">02</span>
                    </div>
                </motion.div>

                {/* 3. Right Card: Near to Nature & AnimateUIX */}
                <motion.div
                    style={reduce ? undefined : { y: yRight }}
                    initial={{ opacity: 0, y: 24, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.45, ease: [...EASE] }}
                    className="col-span-12 sm:col-span-3 rotate-1 transform rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-2 sm:p-3 shadow-xl transition-transform duration-300 hover:rotate-0 hover:scale-[1.02]"
                >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#0c0d14]" data-cursor-theme="light">
                        <img
                            src="/images/projects/animateuix/hero.svg"
                            alt="AnimateUIX Motion Identity System"
                            className="h-full w-full object-cover"
                            loading="eager"
                        />
                        <div className="absolute left-2.5 top-2.5">
                            <span className="rounded-full bg-black/70 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#507af4] backdrop-blur-md">
                                Motion · UIX
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between px-2 pt-2.5 text-[11px] font-semibold text-[var(--ink-faint)]">
                        <span>Kinetic Design System</span>
                        <span className="font-display font-bold text-[#507AF4]">03</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default function Hero() {
    const ref = useRef(null);
    const reduce = useReducedMotion();
    const [desktopMotion, setDesktopMotion] = useState(false);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
    const contentY = useTransform(scrollYProgress, [0, 1], [0, -60]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.88]);

    useEffect(() => {
        const query = window.matchMedia('(min-width: 1024px)');
        const update = () => setDesktopMotion(query.matches);
        update();
        query.addEventListener('change', update);

        return () => query.removeEventListener('change', update);
    }, []);

    const exitMotion = desktopMotion && !reduce
        ? { y: contentY, opacity: contentOpacity }
        : undefined;

    return (
        <section ref={ref} id="home" className="relative flex min-h-[calc(100svh-72px)] lg:min-h-[calc(100svh-88px)] flex-col overflow-x-clip bg-[var(--bg)]">
            <motion.div
                initial={{ opacity: 0, scale: 1.015 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.32, ease: [...EASE] }}
                className="absolute inset-0"
                aria-hidden
            >
                <Stage variant="hero" />
                <div className="grid-bg absolute inset-0" />
            </motion.div>

            <motion.div style={exitMotion} className="container-x relative z-10 flex flex-1 flex-col justify-center pb-8 pt-6 sm:pt-10 lg:pt-12">
                <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.12, ease: [...EASE] }}
                    className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--ink-faint)] sm:mb-6 sm:text-[12px] sm:tracking-[0.28em]"
                >
                    <span className="inline-block h-[2px] w-8 bg-brand sm:w-10" aria-hidden />
                    Independent creative &amp; digital agency
                </motion.p>

                <h1 className="display-xl uppercase text-[var(--ink-strong)]">
                    {[
                        ['We turn', ''],
                        ['attention', ''],
                        ['into results.', 'text-gradient'],
                    ].map(([line, className], index) => (
                        <span key={line} className="mask-line">
                            <motion.span
                                className={`mask-inner ${className}`}
                                initial={{ y: '110%' }}
                                animate={{ y: '0%' }}
                                transition={{ duration: 0.52, delay: 0.2 + index * 0.08, ease: [...EASE] }}
                            >
                                {line}
                            </motion.span>
                        </span>
                    ))}
                </h1>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.42, delay: 0.48, ease: [...EASE] }}
                    className="mt-6 h-[3px] w-full max-w-xl origin-left sm:mt-8"
                    style={{ background: 'linear-gradient(90deg,#891FFB,#507AF4,#1BE2EB)' }}
                    aria-hidden
                />

                <div className="mt-6 flex flex-col gap-7 lg:mt-8 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.38, delay: 0.6, ease: [...EASE] }}
                        className="max-w-md text-[15px] leading-relaxed text-[var(--mute)] sm:text-[16px]"
                    >
                        Marketorr builds brands, digital products, and web platforms designed to create measurable recognition and growth.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.38, delay: 0.7, ease: [...EASE] }}
                        className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4"
                    >
                        <MagneticButton className="w-full sm:w-auto">
                            <Link href="/work" data-cursor="cta" className="btn-press group inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[13px] font-bold uppercase tracking-[0.16em] text-white sm:w-auto" style={{ background: 'linear-gradient(90deg,#891FFB,#507AF4,#1BE2EB)' }}>
                                View our work <span data-arrow aria-hidden>↗</span>
                            </Link>
                        </MagneticButton>
                        <MagneticButton className="w-full sm:w-auto">
                            <Link href="/contact" data-cursor="cta" className="btn-press group inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--field-line)] px-7 py-3.5 text-[13px] font-bold uppercase tracking-[0.16em] text-[var(--ink)] hover:border-transparent hover:bg-[var(--invert-btn-hover)] hover:text-[var(--bg)] sm:w-auto">
                                Start a project <span data-arrow="horizontal" aria-hidden>→</span>
                            </Link>
                        </MagneticButton>
                    </motion.div>
                </div>

                {/* Layered Work Composition replaces the old abstract glowing bars */}
                <HeroWorkComposition scrollProgress={scrollYProgress} reduce={reduce} />
            </motion.div>

            {/* Subtle secondary motif & scroll indicator */}
            <div className="container-x relative z-10 flex items-center justify-between pb-8 pt-4 sm:pb-10">
                <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--ink-faint)]" aria-hidden>
                    <span>Idea <span className="text-[#891FFB]">●</span></span>
                    <span>Experience <span className="text-[#507AF4]">●</span></span>
                    <span>Result <span className="text-[#1BE2EB]">●</span></span>
                </div>
                <a
                    href="#overview"
                    className="btn-press flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--ink-faint)] hover:text-[var(--ink)]"
                >
                    Scroll to explore <span data-arrow aria-hidden>↓</span>
                </a>
            </div>
        </section>
    );
}
