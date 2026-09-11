import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../../lib/projects';
import { SectionLabel, Tag } from '../ui/primitives';
import RevealText from '../motion/RevealText';

function ProjectVisual({ p, ratio = 'aspect-[16/10]' }) {
    return (
        <div className={`relative ${ratio} w-full overflow-hidden bg-[#0c0d14]`} data-cursor-theme="light">
            {p.heroImage ? (
                <img
                    src={p.heroImage}
                    alt={`${p.title} — ${p.client}`}
                    className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                />
            ) : (
                <div
                    className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    style={{
                        background: `radial-gradient(120% 100% at 20% 10%, ${p.accent}44, transparent 60%), linear-gradient(160deg, #18181F, #08080A)`,
                    }}
                    aria-hidden
                />
            )}

            {/* Discipline badge overlay */}
            <div className="absolute left-4 top-4 md:left-5 md:top-5" aria-hidden>
                <span className="rounded-full border border-white/20 bg-black/60 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
                    {p.tags?.[0] || 'Case Study'}
                </span>
            </div>

            {/* Arrow action */}
            <div className="group absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-lg text-black shadow-lg transition-transform duration-300 group-hover:scale-110 md:bottom-5 md:right-5 md:h-12 md:w-12" aria-hidden>
                <span data-arrow>↗</span>
            </div>
            <span className="absolute inset-0 rounded-[inherit] border border-transparent transition-colors duration-200 group-hover:border-white/20" aria-hidden />
            <span className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" style={{ background: 'linear-gradient(90deg,#891FFB,#507AF4,#1BE2EB)' }} aria-hidden />
        </div>
    );
}

function Card({ p, className = '', ratio = 'aspect-[16/10]' }) {
    if (!p) return null;
    return (
        <motion.div whileTap={{ scale: 0.985 }} transition={{ duration: 0.18 }} className={className}>
            <Link href={`/work/${p.slug}`} data-cursor="view" className="group block" aria-label={`View ${p.title} case study`}>
                <div className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] transition-all duration-300 hover:border-black/20 dark:hover:border-white/20">
                    <ProjectVisual p={p} ratio={ratio} />
                </div>
                <div className="mt-4 flex flex-wrap items-start justify-between gap-4 px-1">
                    <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                            {p.client} · {p.year}
                        </p>
                        <h3 className="mt-1 font-display text-2xl font-extrabold uppercase text-[var(--ink-strong)] md:text-3xl">
                            <span className="bg-[linear-gradient(90deg,#891FFB,#507AF4,#1BE2EB)] bg-[length:0%_100%] bg-no-repeat bg-clip-text transition-[background-size,color] duration-200 group-hover:bg-[length:100%_100%] group-hover:text-transparent">
                                {p.title}
                            </span>
                        </h3>
                        <p className="mt-2 max-w-md text-[14px] leading-relaxed text-[var(--mute)]">
                            {p.summary || p.description}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {p.tags?.map((t) => (
                                <Tag key={t} accent={p.accent}>
                                    {t}
                                </Tag>
                            ))}
                        </div>
                    </div>
                    <div className="text-right">
                        <span className="font-display text-2xl font-extrabold" style={{ color: p.accent }}>
                            {p.year}
                        </span>
                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--ink-faint)]">
                            {p.status || 'Delivered'}
                        </p>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

export default function OurWork() {
    return (
        <section id="work" className="relative overflow-hidden bg-[var(--bg)] section-pad">
            <div className="container-x relative">
                <SectionLabel index="03" name="OUR WORK" />

                <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <RevealText
                            as="h2"
                            className="display-lg uppercase text-[var(--ink-strong)]"
                            lines={['Work that', 'creates impact.']}
                        />
                        <p className="mt-2 font-serif text-xl italic text-[var(--ink-faint)]">
                            Selected brand identity, product UI/UX, and web engineering.
                        </p>
                    </div>
                    <p className="max-w-md text-[15px] leading-relaxed text-[var(--mute)]">
                        Every project represents an integrated collaboration — sharp strategic positioning, crafted interfaces, and production-grade engineering.
                    </p>
                </div>

                <div className="mt-14 space-y-12 lg:space-y-16">
                    {/* 1. Featured Lead Project: Alarabi Fashion */}
                    <Card p={PROJECTS[0]} ratio="aspect-[16/9]" />

                    {/* 2. Asymmetric Pair: AnimateUIX & Near to Nature */}
                    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-start">
                        <Card p={PROJECTS[1]} className="lg:col-span-6" ratio="aspect-[16/11]" />
                        <Card p={PROJECTS[2]} className="lg:col-span-6" ratio="aspect-[16/11]" />
                    </div>

                    {/* 3. Full Wide Showcase: City Online Limited */}
                    <Card p={PROJECTS[3]} ratio="aspect-[21/10]" />

                    {/* 4. Split Pair: Jute for Good + High Impact Conversion Composition */}
                    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-center">
                        <Card p={PROJECTS[4]} className="lg:col-span-6" ratio="aspect-[16/11]" />

                        {/* Strong Conversion Composition (Replaces empty bordered box) */}
                        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d14] p-8 text-white shadow-2xl lg:col-span-6 md:p-12" data-cursor-theme="light">
                            <div
                                className="absolute inset-0 opacity-20 pointer-events-none"
                                style={{
                                    background: 'radial-gradient(circle at 80% 20%, #891ffb, transparent 60%)',
                                }}
                                aria-hidden
                            />
                            <div className="relative z-10">
                                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#1be2eb]">
                                    New Engagements
                                </p>
                                <h3 className="mt-4 font-display text-3xl font-extrabold uppercase leading-tight md:text-4xl">
                                    Your brand <br />
                                    <span className="text-gradient">could be next.</span>
                                </h3>
                                <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400">
                                    We partner with a limited roster of ambitious businesses each quarter to ensure uncompromised quality, craft, and attention.
                                </p>
                                <div className="mt-8 flex flex-wrap items-center gap-4">
                                    <Link
                                        href="/#contact"
                                        data-cursor="cta"
                                        className="btn-press inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[13px] font-bold uppercase tracking-[0.16em] text-white"
                                        style={{ background: 'linear-gradient(90deg,#891FFB,#507AF4,#1BE2EB)' }}
                                    >
                                        Start a project ↗
                                    </Link>
                                    <Link
                                        href="/work"
                                        className="btn-press inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-[13px] font-bold uppercase tracking-[0.16em] text-white hover:bg-white/10"
                                    >
                                        View all work →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
