import { Link } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { SERVICES } from '../../lib/services';
import { SectionLabel, Tag } from '../ui/primitives';
import RevealText from '../motion/RevealText';

function ServiceVisualProof({ slug }) {
    if (slug === 'branding') {
        return (
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-xl border border-[var(--line)] bg-[#140721] p-4" data-cursor-theme="light">
                    <img
                        src="/images/projects/alarabi/hero.svg"
                        alt="Alarabi Fashion Branding"
                        className="aspect-[16/10] w-full rounded-lg object-cover transition-transform duration-300 hover:scale-[1.02]"
                        loading="lazy"
                    />
                    <div className="mt-3 flex items-center justify-between text-[11px] font-semibold text-[var(--ink-faint)]">
                        <span>Alarabi Fashion · Monogram System</span>
                        <span className="font-display text-[#891FFB]">Brand Strategy</span>
                    </div>
                </div>
                <div className="overflow-hidden rounded-xl border border-[var(--line)] bg-[#0c2317] p-4" data-cursor-theme="light">
                    <img
                        src="/images/projects/near-to-nature/hero.svg"
                        alt="Near to Nature Sustainable Packaging"
                        className="aspect-[16/10] w-full rounded-lg object-cover transition-transform duration-300 hover:scale-[1.02]"
                        loading="lazy"
                    />
                    <div className="mt-3 flex items-center justify-between text-[11px] font-semibold text-[var(--ink-faint)]">
                        <span>Near to Nature · Sustainable Packaging</span>
                        <span className="font-display text-[#2eb872]">Visual Identity</span>
                    </div>
                </div>
            </div>
        );
    }

    if (slug === 'ui-ux') {
        return (
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-xl border border-[var(--line)] bg-[#040d1a] p-4" data-cursor-theme="light">
                    <img
                        src="/images/projects/city-online/hero.svg"
                        alt="City Online Portal UI/UX"
                        className="aspect-[16/10] w-full rounded-lg object-cover transition-transform duration-300 hover:scale-[1.02]"
                        loading="lazy"
                    />
                    <div className="mt-3 flex items-center justify-between text-[11px] font-semibold text-[var(--ink-faint)]">
                        <span>City Online · Customer Portal Architecture</span>
                        <span className="font-display text-[#1be2eb]">Web UI/UX</span>
                    </div>
                </div>
                <div className="overflow-hidden rounded-xl border border-[var(--line)] bg-[#0c0d14] p-4" data-cursor-theme="light">
                    <img
                        src="/images/projects/animateuix/hero.svg"
                        alt="AnimateUIX Motion Curve Interface"
                        className="aspect-[16/10] w-full rounded-lg object-cover transition-transform duration-300 hover:scale-[1.02]"
                        loading="lazy"
                    />
                    <div className="mt-3 flex items-center justify-between text-[11px] font-semibold text-[var(--ink-faint)]">
                        <span>AnimateUIX · Kinetic Design Systems</span>
                        <span className="font-display text-[#507af4]">Product UX</span>
                    </div>
                </div>
            </div>
        );
    }

    // Development discipline
    return (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-xl border border-[var(--line)] bg-[#081426] p-4" data-cursor-theme="light">
                <img
                    src="/images/projects/city-online/hero.svg"
                    alt="City Online Live Web Platform"
                    className="aspect-[16/10] w-full rounded-lg object-cover transition-transform duration-300 hover:scale-[1.02]"
                    loading="lazy"
                />
                <div className="mt-3 flex items-center justify-between text-[11px] font-semibold text-[var(--ink-faint)]">
                    <span>Full-Stack Responsive Web Architecture</span>
                    <span className="font-display text-[#1be2eb]">Production Build</span>
                </div>
            </div>
            <div className="flex flex-col justify-between rounded-xl border border-[var(--line)] bg-[var(--surface-2)] p-6">
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--ink-faint)]">
                        Engineering Standards
                    </p>
                    <h4 className="mt-2 font-display text-lg font-bold uppercase text-[var(--ink-strong)]">
                        Performance First
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-[var(--mute)]">
                        Clean semantic markup, optimized asset pipelines, high accessibility ratings, and rock-solid backend APIs.
                    </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                    <span className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-2.5 py-1 text-[11px] font-mono text-[var(--ink)]">
                        React 19 + Vite 8
                    </span>
                    <span className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-2.5 py-1 text-[11px] font-mono text-[var(--ink)]">
                        Laravel Framework
                    </span>
                    <span className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-2.5 py-1 text-[11px] font-mono text-[var(--ink)]">
                        Core Web Vitals
                    </span>
                </div>
            </div>
        </div>
    );
}

export default function Services() {
    const [active, setActive] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <section id="services" className="relative overflow-hidden bg-[var(--bg)] section-pad">
            <div className="container-x relative">
                <SectionLabel index="02" name="SERVICES" />
                <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <RevealText
                            as="h2"
                            className="display-lg uppercase text-[var(--ink-strong)]"
                            lines={['Branding, UI/UX', '& Development']}
                        />
                        <p className="mt-2 font-serif text-xl italic text-[var(--ink-faint)]">
                            Distinct identity, intuitive interaction, and modern engineering.
                        </p>
                    </div>
                    <p className="max-w-md text-[15px] leading-relaxed text-[var(--mute)]">
                        We build distinct brands, intuitive digital products, and high-performance web systems designed to create measurable impact.
                    </p>
                </div>

                <div className="mt-14 border-t border-[var(--line)]">
                    {SERVICES.map((s) => {
                        const isOpen = active === s.slug;
                        const isHover = hover === s.slug;
                        const grad = s.accentTo
                            ? `linear-gradient(90deg, ${s.accent}, ${s.accentTo})`
                            : s.accent;

                        const actionLabel = `Explore ${s.name.split(' ')[0]} ↗`;

                        return (
                            <div key={s.slug} className="group relative border-b border-[var(--line)]">
                                <div
                                    onMouseEnter={() => setHover(s.slug)}
                                    onMouseLeave={() => setHover(null)}
                                    className="relative grid gap-4 rounded-xl px-3 py-8 transition-colors duration-200 md:grid-cols-[64px_1fr_auto] md:items-center md:gap-8 md:px-4 md:py-10"
                                >
                                    {/* Accent edge indicator */}
                                    <span
                                        className="absolute left-0 top-0 h-full w-[3px] origin-top transition-transform duration-200"
                                        style={{
                                            background: grad,
                                            transform: isHover || isOpen ? 'scaleY(1)' : 'scaleY(0)',
                                        }}
                                        aria-hidden
                                    />
                                    <span
                                        className="font-display text-sm font-bold text-[var(--ink-faint)] transition-colors duration-300"
                                        style={isHover || isOpen ? { color: s.accent } : undefined}
                                    >
                                        {s.index}
                                    </span>
                                    <div>
                                        <div className="flex flex-wrap items-center gap-4">
                                            <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight text-[var(--ink-strong)] transition-colors duration-300 md:text-4xl">
                                                {s.name}
                                            </h3>
                                            <button
                                                onClick={() => setActive(isOpen ? null : s.slug)}
                                                className="btn-press rounded-full border border-[var(--line)] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--ink-faint)] hover:text-[var(--ink)]"
                                            >
                                                {isOpen ? 'Close preview' : 'View proof'}
                                            </button>
                                        </div>
                                        <p className="mt-2 max-w-xl text-[14px] text-[var(--mute)]">{s.short}</p>

                                        <AnimatePresence initial={false}>
                                            {(isHover || isOpen) && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="mt-4 text-[14px] leading-relaxed text-[var(--mute)]">
                                                        {s.description}
                                                    </p>
                                                    <div className="mt-4 flex flex-wrap gap-2">
                                                        {s.capabilities.slice(0, 6).map((c) => (
                                                            <Tag key={c} accent={s.accent}>
                                                                {c}
                                                            </Tag>
                                                        ))}
                                                    </div>

                                                    {/* Real Visual Proof per discipline */}
                                                    <ServiceVisualProof slug={s.slug} />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <Link
                                            href={`/services/${s.slug}`}
                                            data-cursor="explore"
                                            className="btn-press inline-flex items-center gap-2 rounded-full border border-[var(--field-line)] px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--ink)] hover:border-transparent hover:text-white"
                                            style={isHover ? { background: grad } : undefined}
                                        >
                                            {actionLabel}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
