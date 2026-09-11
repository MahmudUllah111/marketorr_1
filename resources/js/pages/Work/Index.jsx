import { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionLabel, Tag } from '../../components/ui/primitives';
import RevealText from '../../components/motion/RevealText';
import ConversionCTA from '../../components/sections/ConversionCTA';
import { PROJECTS } from '../../data/projects';

const CATEGORIES = ['All', 'Branding', 'UI/UX', 'Development'];

export default function WorkIndex() {
    const [activeCat, setActiveCat] = useState('All');

    const filtered = PROJECTS.filter((p) => {
        if (activeCat === 'All') return true;
        if (activeCat === 'Branding') return p.services?.includes('branding') || p.tags?.includes('Branding') || p.tags?.includes('Visual Identity');
        if (activeCat === 'UI/UX') return p.services?.includes('ui-ux') || p.tags?.some((t) => t.includes('UI/UX'));
        if (activeCat === 'Development') return p.services?.includes('web-development') || p.tags?.some((t) => t.includes('Development') || t.includes('Catalog'));
        return true;
    });

    // Chunk filtered projects into editorial rhythm:
    // BIG FEATURED PROJECT -> PROJECT | PROJECT -> LARGE REVERSED PROJECT -> PROJECT | PROJECT
    const blocks = [];
    let i = 0;
    while (i < filtered.length) {
        const cycle = blocks.length % 4;
        if (cycle === 0) {
            blocks.push({ type: 'large', item: filtered[i] });
            i += 1;
        } else if (cycle === 1) {
            const pair = [filtered[i]];
            if (i + 1 < filtered.length) pair.push(filtered[i + 1]);
            blocks.push({ type: 'duo', items: pair });
            i += pair.length;
        } else if (cycle === 2) {
            blocks.push({ type: 'large-reversed', item: filtered[i] });
            i += 1;
        } else {
            const pair = [filtered[i]];
            if (i + 1 < filtered.length) pair.push(filtered[i + 1]);
            blocks.push({ type: 'duo', items: pair });
            i += pair.length;
        }
    }

    return (
        <>
            <Head title="Our Work — Marketorr" />

            {/* Hero Section */}
            <section className="bg-[var(--bg)] pt-12 pb-16 sm:pt-16 sm:pb-24">
                <div className="container-x">
                    <SectionLabel index="03" name="PORTFOLIO ARCHIVE" />

                    <div className="mt-8 max-w-4xl">
                        <RevealText
                            as="h1"
                            className="display-xl uppercase text-[var(--ink-strong)]"
                            lines={['Work that', 'creates impact.']}
                        />
                        <p className="mt-6 font-serif text-2xl italic text-[var(--ink-faint)] sm:text-3xl">
                            Verified client case studies across branding, digital products, and web platforms.
                        </p>
                    </div>

                    {/* Filter Pills */}
                    <div className="mt-14 flex flex-wrap items-center gap-3 border-b border-[var(--line-soft)] pb-6" role="tablist">
                        {CATEGORIES.map((cat) => {
                            const active = activeCat === cat;
                            return (
                                <button
                                    key={cat}
                                    type="button"
                                    onClick={() => setActiveCat(cat)}
                                    role="tab"
                                    aria-selected={active}
                                    className={`relative cursor-pointer rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] transition-all duration-200 ${
                                        active
                                            ? 'text-white shadow-md'
                                            : 'text-[var(--ink-faint)] hover:text-[var(--ink)] bg-[var(--surface)]'
                                    }`}
                                    style={active ? { background: 'linear-gradient(90deg,#891FFB,#507AF4,#1BE2EB)' } : undefined}
                                >
                                    {cat}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Asymmetric Editorial Portfolio Archive */}
            <section className="bg-[var(--bg)] pb-24 sm:pb-32">
                <div className="container-x space-y-12 sm:space-y-16">
                    <AnimatePresence mode="popLayout">
                        {blocks.map((block, bIdx) => {
                            if (block.type === 'large' || block.type === 'large-reversed') {
                                const p = block.item;
                                const isReversed = block.type === 'large-reversed';

                                return (
                                    <motion.div
                                        key={`block-${p.slug}-${bIdx}`}
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.98 }}
                                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <Link
                                            href={`/work/${p.slug}`}
                                            data-cursor="view"
                                            className="group block overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-10 transition-all duration-300 hover:border-black/30 dark:hover:border-white/30 hover:shadow-2xl"
                                        >
                                            <div className={`grid gap-8 lg:grid-cols-12 lg:items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                                                {/* Visual (8 cols) */}
                                                <div className={`lg:col-span-8 overflow-hidden rounded-2xl bg-black ${isReversed ? 'lg:order-2' : 'lg:order-1'}`} data-cursor-theme="light">
                                                    <div className="relative aspect-[16/9] overflow-hidden">
                                                        {p.heroImage ? (
                                                            <img
                                                                src={p.heroImage}
                                                                alt={`${p.title} — ${p.client}`}
                                                                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                                                                loading="lazy"
                                                            />
                                                        ) : (
                                                            <div
                                                                className="absolute inset-0"
                                                                style={{
                                                                    background: `radial-gradient(120% 100% at 20% 10%, ${p.accent}44, transparent 55%), linear-gradient(160deg,#18181F,#08080A)`,
                                                                }}
                                                            />
                                                        )}
                                                        <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                                        <div className="absolute left-6 top-6">
                                                            <span className="rounded-full border border-white/20 bg-black/60 px-4 py-1.5 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
                                                                {p.year} · {p.disciplines?.[0] || 'Selected Case'}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Editorial Details (4 cols) */}
                                                <div className={`lg:col-span-4 flex flex-col justify-between py-2 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                                                    <div>
                                                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                                                            {p.client} · {p.year}
                                                        </p>
                                                        <h2 className="mt-3 font-display text-3xl font-extrabold uppercase text-[var(--ink-strong)] transition-transform duration-300 group-hover:translate-x-1 sm:text-4xl">
                                                            {p.title}
                                                        </h2>
                                                        <p className="mt-2 font-serif text-sm italic text-[var(--ink-faint)]">
                                                            {p.disciplines ? p.disciplines.join(' · ') : p.tags?.join(' · ')}
                                                        </p>
                                                        <p className="mt-4 text-sm leading-relaxed text-[var(--mute)] sm:text-base">
                                                            {p.summary}
                                                        </p>
                                                        <div className="mt-6 flex flex-wrap gap-2">
                                                            {p.tags?.map((t) => (
                                                                <Tag key={t} accent={p.accent}>
                                                                    {t}
                                                                </Tag>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div className="mt-8 flex items-center gap-2 border-t border-[var(--line-soft)] pt-6 font-display text-xs font-bold uppercase tracking-wider text-[var(--ink)] group-hover:text-gradient">
                                                        <span>View Project</span>
                                                        <span className="text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                                                            ↗
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                );
                            }

                            // Duo: 2-column paired projects
                            return (
                                <div key={`duo-${bIdx}`} className="grid gap-8 md:grid-cols-2">
                                    {block.items.map((p) => (
                                        <motion.div
                                            key={p.slug}
                                            layout
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.98 }}
                                            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                        >
                                            <Link
                                                href={`/work/${p.slug}`}
                                                data-cursor="view"
                                                className="group block overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8 transition-all duration-300 hover:border-black/30 dark:hover:border-white/30 hover:shadow-2xl h-full flex flex-col justify-between"
                                            >
                                                <div>
                                                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-black" data-cursor-theme="light">
                                                        {p.heroImage ? (
                                                            <img
                                                                src={p.heroImage}
                                                                alt={`${p.title} — ${p.client}`}
                                                                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                                                                loading="lazy"
                                                            />
                                                        ) : (
                                                            <div
                                                                className="absolute inset-0"
                                                                style={{
                                                                    background: `radial-gradient(120% 100% at 20% 10%, ${p.accent}44, transparent 55%), linear-gradient(160deg,#18181F,#08080A)`,
                                                                }}
                                                            />
                                                        )}
                                                        <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                                        <div className="absolute left-5 top-5">
                                                            <span className="rounded-full border border-white/20 bg-black/60 px-3.5 py-1.5 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
                                                                {p.year}
                                                            </span>
                                                        </div>
                                                        <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform duration-300 group-hover:scale-110" data-cursor-theme="dark">
                                                            <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                                                ↗
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="pt-6">
                                                        <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                                                            <span>{p.client}</span>
                                                            <span>{p.year}</span>
                                                        </div>
                                                        <h2 className="mt-2 font-display text-2xl font-extrabold uppercase text-[var(--ink-strong)] transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
                                                            {p.title}
                                                        </h2>
                                                        <p className="mt-1 font-serif text-sm italic text-[var(--ink-faint)]">
                                                            {p.disciplines ? p.disciplines.join(' · ') : p.tags?.join(' · ')}
                                                        </p>
                                                        <p className="mt-3 text-sm leading-relaxed text-[var(--mute)]">
                                                            {p.summary}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="mt-6 flex flex-wrap gap-2 border-t border-[var(--line-soft)] pt-4">
                                                    {p.tags?.map((t) => (
                                                        <Tag key={t} accent={p.accent}>
                                                            {t}
                                                        </Tag>
                                                    ))}
                                                </div>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </section>

            {/* Single Conversion CTA */}
            <ConversionCTA
                eyebrow="Commission a Case Study"
                headline="Let's build what's next."
                description="Partner with Marketorr to engineer an unmistakable visual identity, digital product, or web platform."
            />
        </>
    );
}
