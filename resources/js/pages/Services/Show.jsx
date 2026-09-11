import { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { SectionLabel, Tag } from '../../components/ui/primitives';
import MagneticButton from '../../components/motion/MagneticButton';
import RevealText from '../../components/motion/RevealText';
import ConversionCTA from '../../components/sections/ConversionCTA';
import { SERVICES } from '../../data/services';
import { PROJECTS } from '../../data/projects';

export default function ServicePage({ slug }) {
    const canonicalSlug = slug === 'web-development' ? 'development' : slug;
    const s = SERVICES.find((x) => x.slug === canonicalSlug) ?? SERVICES[0];
    const isBranding = canonicalSlug === 'branding';
    const isUiUx = canonicalSlug === 'ui-ux';
    const isDev = canonicalSlug === 'development';

    // Interactive UI preview tab for UI/UX page
    const [activeUiTab, setActiveUiTab] = useState('dashboard');

    return (
        <>
            <Head title={`${s.name} — Marketorr`} />

            {/* =========================================================================
                01 HERO SECTION — BESPOKE EDITORIAL HEADLINE FOR EACH DISCIPLINE
               ========================================================================= */}
            <article className="bg-[var(--bg)] pt-12 pb-20 sm:pt-16 sm:pb-28">
                <div className="container-x">
                    <SectionLabel index={s.index} name={s.name.toUpperCase()} />

                    <div className="mt-8 max-w-5xl">
                        {isBranding && (
                            <>
                                <RevealText
                                    as="h1"
                                    className="display-xl uppercase text-[var(--ink-strong)]"
                                    lines={[
                                        'Brands should',
                                        'be recognized',
                                        "before they're read.",
                                    ]}
                                />
                                <p className="mt-6 font-serif text-2xl italic text-[var(--ink-faint)] sm:text-3xl">
                                    We build strategic identity systems designed to create recognition, consistency and long-term brand equity.
                                </p>
                            </>
                        )}

                        {isUiUx && (
                            <>
                                <RevealText
                                    as="h1"
                                    className="display-xl uppercase text-[var(--ink-strong)]"
                                    lines={[
                                        'Design that',
                                        'feels obvious',
                                        'to use.',
                                    ]}
                                />
                                <p className="mt-6 font-serif text-2xl italic text-[var(--ink-faint)] sm:text-3xl">
                                    We design high-clarity digital products that turn complex workflows into intuitive human journeys.
                                </p>
                            </>
                        )}

                        {isDev && (
                            <>
                                <RevealText
                                    as="h1"
                                    className="display-xl uppercase text-[var(--ink-strong)]"
                                    lines={[
                                        'Designed well.',
                                        'Built better.',
                                    ]}
                                />
                                <p className="mt-6 font-serif text-2xl italic text-[var(--ink-faint)] sm:text-3xl">
                                    Modern full-stack engineering engineered for performance, rock-solid scalability, and maintainability.
                                </p>
                            </>
                        )}

                        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[var(--mute)] sm:text-xl">
                            {s.description}
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <MagneticButton>
                                <Link
                                    href="/contact"
                                    data-cursor="cta"
                                    className="btn-press inline-flex items-center gap-2 rounded-full px-8 py-4 text-[13px] font-bold uppercase tracking-[0.16em] text-white shadow-xl"
                                    style={{ background: 'linear-gradient(90deg,#891FFB,#507AF4,#1BE2EB)' }}
                                >
                                    Start a {s.name.split(' ')[0]} Project <span aria-hidden>↗</span>
                                </Link>
                            </MagneticButton>
                            <Link
                                href="/work"
                                className="btn-press inline-flex items-center gap-2 rounded-full border border-[var(--field-line)] px-7 py-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[var(--ink)] hover:bg-[var(--invert-btn-hover)] hover:text-[var(--bg)] transition-colors"
                            >
                                View related work →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>

            {/* =========================================================================
                02 BRANDING EXPERIENCE (Only for /services/branding)
               ========================================================================= */}
            {isBranding && (
                <>
                    {/* Eight Scope Sections */}
                    <section className="bg-[var(--surface)] py-20 sm:py-28 border-y border-[var(--line)]">
                        <div className="container-x">
                            <div className="max-w-2xl">
                                <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#891FFB]">
                                    Identity Architecture
                                </span>
                                <h2 className="display-lg mt-3 uppercase text-[var(--ink-strong)]">
                                    The branding scope.
                                </h2>
                                <p className="mt-4 text-base text-[var(--mute)]">
                                    Every strategic layer required to transform ambitious companies into unmistakable market leaders.
                                </p>
                            </div>

                            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                                {[
                                    {
                                        title: 'Brand Strategy',
                                        desc: 'Audience definition, value positioning, market differentiation, and commercial messaging narrative.',
                                    },
                                    {
                                        title: 'Visual Identity',
                                        desc: 'Bespoke design language, spatial grids, compositional rules, and signature brand motifs.',
                                    },
                                    {
                                        title: 'Logo Systems',
                                        desc: 'Primary marks, monograms, secondary badges, and responsive favicons built for all contexts.',
                                    },
                                    {
                                        title: 'Typography',
                                        desc: 'Curated type hierarchies, editorial pairings, open-type features, and responsive scale ratios.',
                                    },
                                    {
                                        title: 'Colour Systems',
                                        desc: 'Calibrated primary, secondary, and functional palettes with strict contrast compliance.',
                                    },
                                    {
                                        title: 'Brand Guidelines',
                                        desc: 'Exhaustive codification manuals ensuring brand integrity persists across internal teams and vendors.',
                                    },
                                    {
                                        title: 'Packaging',
                                        desc: 'Physical packaging architecture, garment hangtags, sustainable kraft substrates, and print specs.',
                                    },
                                    {
                                        title: 'Corporate Collateral',
                                        desc: 'Business stationery, executive decks, digital keynote templates, and signage specifications.',
                                    },
                                ].map((item, idx) => (
                                    <div
                                        key={item.title}
                                        className="flex flex-col justify-between rounded-2xl border border-[var(--line)] bg-[var(--bg)] p-7 transition-colors hover:border-black/30 dark:hover:border-white/30"
                                    >
                                        <div>
                                            <span className="font-display text-xs font-bold text-[#891FFB]">
                                                0{idx + 1} // Scope
                                            </span>
                                            <h3 className="mt-3 font-display text-lg font-bold uppercase text-[var(--ink-strong)]">
                                                {item.title}
                                            </h3>
                                            <p className="mt-2 text-xs leading-relaxed text-[var(--mute)]">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Visual Work Showcase: Alarabi Fashion & Near to Nature */}
                    <section className="bg-[var(--bg)] py-20 sm:py-32">
                        <div className="container-x">
                            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
                                <div>
                                    <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#891FFB]">
                                        Visual Evidence
                                    </span>
                                    <h2 className="display-lg mt-3 uppercase text-[var(--ink-strong)]">
                                        Selected branding work.
                                    </h2>
                                </div>
                                <Link
                                    href="/work"
                                    className="btn-press group inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.16em] text-[var(--ink)] hover:text-gradient"
                                >
                                    All Case Studies <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                                </Link>
                            </div>

                            <div className="mt-14 grid gap-10 lg:grid-cols-2">
                                {/* Case 1: Alarabi Fashion */}
                                <Link
                                    href="/work/alarabi-fashion"
                                    data-cursor="view"
                                    className="group block overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--surface)] transition-all duration-300 hover:border-black/30 dark:hover:border-white/30 hover:shadow-2xl"
                                >
                                    <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0410]" data-cursor-theme="light">
                                        <img
                                            src="/images/projects/alarabi/real-showcase.webp"
                                            alt="Alarabi Fashion Brand Identity"
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                            loading="lazy"
                                        />
                                        <div className="absolute left-6 top-6">
                                            <span className="rounded-full bg-black/70 px-4 py-1.5 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
                                                Case Study · 2024
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-8 sm:p-10">
                                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                                            Alarabi Fashion Ltd. · Apparel &amp; Knitwear Export
                                        </p>
                                        <h3 className="mt-2 font-display text-2xl font-extrabold uppercase text-[var(--ink-strong)] sm:text-3xl">
                                            Export Identity &amp; Packaging System
                                        </h3>
                                        <p className="mt-3 text-sm leading-relaxed text-[var(--mute)]">
                                            Geometric AF monogram emblem, royal dark violet &amp; gold palette, and codified garment tags built for international buyers.
                                        </p>
                                        <div className="mt-6 flex items-center justify-between border-t border-[var(--line-soft)] pt-6">
                                            <div className="flex gap-2">
                                                <Tag accent="#891FFB">Monogram</Tag>
                                                <Tag accent="#891FFB">Packaging</Tag>
                                                <Tag accent="#891FFB">Guidelines</Tag>
                                            </div>
                                            <span className="text-xs font-bold uppercase tracking-wider text-[var(--ink)] group-hover:text-gradient">
                                                Explore Study ↗
                                            </span>
                                        </div>
                                    </div>
                                </Link>

                                {/* Case 2: Near to Nature */}
                                <Link
                                    href="/work/near-to-nature"
                                    data-cursor="view"
                                    className="group block overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--surface)] transition-all duration-300 hover:border-black/30 dark:hover:border-white/30 hover:shadow-2xl"
                                >
                                    <div className="relative aspect-[16/10] overflow-hidden bg-[#07130c]" data-cursor-theme="light">
                                        <img
                                            src="/images/projects/near-to-nature/real-showcase.webp"
                                            alt="Near to Nature Sustainable Identity"
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                            loading="lazy"
                                        />
                                        <div className="absolute left-6 top-6">
                                            <span className="rounded-full bg-black/70 px-4 py-1.5 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
                                                Case Study · 2023
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-8 sm:p-10">
                                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                                            Near to Nature · Sustainable Agriculture
                                        </p>
                                        <h3 className="mt-2 font-display text-2xl font-extrabold uppercase text-[var(--ink-strong)] sm:text-3xl">
                                            Organic Botanical Brand &amp; Retail Packaging
                                        </h3>
                                        <p className="mt-3 text-sm leading-relaxed text-[var(--mute)]">
                                            Bespoke agricultural emblem, earthy green and warm sand tones, and adaptable packaging guidelines for eco-friendly kraft materials.
                                        </p>
                                        <div className="mt-6 flex items-center justify-between border-t border-[var(--line-soft)] pt-6">
                                            <div className="flex gap-2">
                                                <Tag accent="#2EB872">Organic Mark</Tag>
                                                <Tag accent="#2EB872">Kraft Packaging</Tag>
                                                <Tag accent="#2EB872">Retail</Tag>
                                            </div>
                                            <span className="text-xs font-bold uppercase tracking-wider text-[var(--ink)] group-hover:text-gradient">
                                                Explore Study ↗
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* 5-Step Branding Process */}
                    <section className="bg-[var(--surface)] py-20 sm:py-32 border-t border-[var(--line)]">
                        <div className="container-x">
                            <div className="max-w-2xl">
                                <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#891FFB]">
                                    Structured Methodology
                                </span>
                                <h2 className="display-lg mt-3 uppercase text-[var(--ink-strong)]">
                                    Our branding process.
                                </h2>
                                <p className="mt-4 text-base text-[var(--mute)]">
                                    A disciplined five-step progression from initial commercial discovery to codified, production-grade brand systems.
                                </p>
                            </div>

                            <div className="mt-14 grid gap-6 sm:grid-cols-5">
                                {[
                                    {
                                        step: '01',
                                        name: 'Discover',
                                        desc: 'Stakeholder interviews, audience expectations, and competitive landscape research.',
                                    },
                                    {
                                        step: '02',
                                        name: 'Position',
                                        desc: 'Establishing the core value proposition, tone of voice, and distinct visual territory.',
                                    },
                                    {
                                        step: '03',
                                        name: 'Design',
                                        desc: 'Crafting the monogram, bespoke logo system, typographic scale, and curated palettes.',
                                    },
                                    {
                                        step: '04',
                                        name: 'Apply',
                                        desc: 'Testing and applying the system across real-world collateral, packaging, and digital assets.',
                                    },
                                    {
                                        step: '05',
                                        name: 'Systemise',
                                        desc: 'Codifying exhaustive guidelines, vector asset toolkits, and production specifications.',
                                    },
                                ].map((p) => (
                                    <div
                                        key={p.step}
                                        className="rounded-2xl border border-[var(--line)] bg-[var(--bg)] p-6 sm:p-7 flex flex-col justify-between"
                                    >
                                        <div>
                                            <span className="font-display text-2xl font-extrabold text-[#891FFB]">
                                                {p.step}
                                            </span>
                                            <h3 className="mt-3 font-display text-lg font-bold uppercase text-[var(--ink-strong)]">
                                                {p.name}
                                            </h3>
                                            <p className="mt-2 text-xs leading-relaxed text-[var(--mute)]">
                                                {p.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Dedicated Branding Closing CTA */}
                    <ConversionCTA
                        eyebrow="Identity Commission"
                        headline="Build a brand"
                        accent="people remember."
                        description="Partner with Marketorr to build a strategic, recognition-first visual identity system that scales."
                    />
                </>
            )}

            {/* =========================================================================
                03 UI/UX EXPERIENCE (Only for /services/ui-ux)
               ========================================================================= */}
            {isUiUx && (
                <>
                    {/* Seven Core UI/UX Areas */}
                    <section className="bg-[var(--surface)] py-20 sm:py-28 border-y border-[var(--line)]">
                        <div className="container-x">
                            <div className="max-w-2xl">
                                <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#507AF4]">
                                    Experience Architecture
                                </span>
                                <h2 className="display-lg mt-3 uppercase text-[var(--ink-strong)]">
                                    What we design.
                                </h2>
                                <p className="mt-4 text-base text-[var(--mute)]">
                                    From consumer digital products to dense data dashboards, we engineer interfaces that make software intuitive and obvious.
                                </p>
                            </div>

                            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {[
                                    {
                                        title: 'Web UI/UX',
                                        desc: 'Conversion-structured brand flagships, editorial websites, and responsive digital destinations.',
                                        tag: 'Responsive Web',
                                    },
                                    {
                                        title: 'Mobile App UI/UX',
                                        desc: 'Native iOS and Android user experiences with tactile micro-interactions and low cognitive load.',
                                        tag: 'iOS & Android',
                                    },
                                    {
                                        title: 'Software / SaaS Interfaces',
                                        desc: 'Cloud platforms, administrative tools, multi-tenant workflows, and workspace interfaces.',
                                        tag: 'SaaS Software',
                                    },
                                    {
                                        title: 'Dashboards',
                                        desc: 'High-density data visualization, analytics tables, reporting panels, and metric controls.',
                                        tag: 'Analytics & Data',
                                    },
                                    {
                                        title: 'Design Systems',
                                        desc: 'Atomic component libraries, tokenized color and spacing systems, and cross-platform specs.',
                                        tag: 'Atomic Tokens',
                                    },
                                    {
                                        title: 'Prototypes',
                                        desc: 'Interactive Figma simulations for stakeholder alignment, rapid validation, and user testing.',
                                        tag: 'Interactive Flow',
                                    },
                                    {
                                        title: 'Responsive Experiences',
                                        desc: 'Pixel-perfect typography and layouts calibrated across 360px mobile to 4K ultrawides.',
                                        tag: 'All Viewports',
                                    },
                                ].map((item, idx) => (
                                    <div
                                        key={item.title}
                                        className="flex flex-col justify-between rounded-2xl border border-[var(--line)] bg-[var(--bg)] p-7 transition-colors hover:border-black/30 dark:hover:border-white/30"
                                    >
                                        <div>
                                            <div className="flex items-center justify-between">
                                                <span className="font-display text-xs font-bold text-[#507AF4]">
                                                    0{idx + 1}
                                                </span>
                                                <span className="rounded-full bg-[var(--surface-2)] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--ink-faint)]">
                                                    {item.tag}
                                                </span>
                                            </div>
                                            <h3 className="mt-3 font-display text-lg font-bold uppercase text-[var(--ink-strong)]">
                                                {item.title}
                                            </h3>
                                            <p className="mt-2 text-xs leading-relaxed text-[var(--mute)]">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Interactive UI Mockup & Design System Spec Demo */}
                    <section className="bg-[var(--bg)] py-20 sm:py-32">
                        <div className="container-x">
                            <div className="max-w-3xl">
                                <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#507AF4]">
                                    Product Polish
                                </span>
                                <h2 className="display-lg mt-3 uppercase text-[var(--ink-strong)]">
                                    Interface craftsmanship in action.
                                </h2>
                                <p className="mt-4 text-base text-[var(--mute)]">
                                    Clean layout hierarchies, intentional visual contrast, and interactive feedback states built for clarity.
                                </p>
                            </div>

                            {/* Browser Mockup Window */}
                            <div className="mt-12 overflow-hidden rounded-2xl border border-[var(--line)] bg-[#0d0f14] shadow-2xl" data-cursor-theme="light">
                                {/* Browser Chrome Bar */}
                                <div className="flex items-center justify-between border-b border-white/10 bg-[#13151c] px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <span className="h-3 w-3 rounded-full bg-red-500/80" />
                                        <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                                        <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                                        <span className="ml-4 font-mono text-xs text-zinc-400">
                                            marketorr.design/preview · UI System
                                        </span>
                                    </div>
                                    <div className="flex gap-2">
                                        {['dashboard', 'components', 'tokens'].map((tab) => (
                                            <button
                                                key={tab}
                                                type="button"
                                                onClick={() => setActiveUiTab(tab)}
                                                className={`rounded-md px-3 py-1 text-xs font-bold uppercase tracking-wider transition-colors ${
                                                    activeUiTab === tab
                                                        ? 'bg-white text-black'
                                                        : 'text-zinc-400 hover:text-white bg-white/5'
                                                }`}
                                            >
                                                {tab}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Active Tab Content */}
                                <div className="p-8 text-white min-h-[360px]">
                                    {activeUiTab === 'dashboard' && (
                                        <div className="space-y-6">
                                            <div className="grid gap-4 sm:grid-cols-3">
                                                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                                                    <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">Active Sessions</p>
                                                    <p className="mt-2 font-display text-3xl font-extrabold text-white">48,290</p>
                                                    <span className="mt-1 inline-block text-xs text-emerald-400 font-semibold">+18.4% this cycle</span>
                                                </div>
                                                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                                                    <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">Avg. Interaction Speed</p>
                                                    <p className="mt-2 font-display text-3xl font-extrabold text-[#1BE2EB]">64ms</p>
                                                    <span className="mt-1 inline-block text-xs text-cyan-400 font-semibold">Sub-frame responsiveness</span>
                                                </div>
                                                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                                                    <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">Flow Completion</p>
                                                    <p className="mt-2 font-display text-3xl font-extrabold text-[#507AF4]">94.8%</p>
                                                    <span className="mt-1 inline-block text-xs text-indigo-300 font-semibold">Minimal drop-off</span>
                                                </div>
                                            </div>
                                            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
                                                <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">Real-Time Event Stream</p>
                                                <div className="mt-4 space-y-3 font-mono text-xs text-zinc-300">
                                                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                                                        <span>[00:01] User onboarded via responsive modal</span>
                                                        <span className="text-emerald-400">Verified</span>
                                                    </div>
                                                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                                                        <span>[00:03] Dark mode preference saved to local store</span>
                                                        <span className="text-cyan-400">Synced</span>
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <span>[00:07] Plan upgrade flow completed</span>
                                                        <span className="text-indigo-400">Success</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeUiTab === 'components' && (
                                        <div className="grid gap-6 sm:grid-cols-2">
                                            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                                                <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">Button State Variants</p>
                                                <div className="mt-4 flex flex-wrap gap-3">
                                                    <button type="button" className="rounded-full bg-gradient-to-r from-[#891FFB] to-[#507AF4] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white">
                                                        Primary CTA
                                                    </button>
                                                    <button type="button" className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white">
                                                        Secondary Ghost
                                                    </button>
                                                    <button type="button" className="rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase text-zinc-400">
                                                        Tertiary
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                                                <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">Input &amp; Selector Chips</p>
                                                <div className="mt-4 flex flex-wrap gap-2">
                                                    <span className="rounded-full border border-[#507AF4] bg-[#507AF4]/20 px-3 py-1 text-xs font-semibold text-white">
                                                        Selected Active
                                                    </span>
                                                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-400">
                                                        Inactive State
                                                    </span>
                                                    <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                                                        Validation OK
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeUiTab === 'tokens' && (
                                        <div className="space-y-4">
                                            <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">Atomic Color Scales &amp; Elevation</p>
                                            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                                                {[
                                                    { label: 'Violet 600', hex: '#891FFB' },
                                                    { label: 'Indigo 500', hex: '#507AF4' },
                                                    { label: 'Cyan 400', hex: '#1BE2EB' },
                                                    { label: 'Zinc 950', hex: '#090A0D' },
                                                    { label: 'Zinc 800', hex: '#1C1F26' },
                                                    { label: 'Paper White', hex: '#F7F7F5' },
                                                ].map((c) => (
                                                    <div key={c.hex} className="rounded-lg border border-white/10 p-3">
                                                        <div className="h-10 rounded" style={{ background: c.hex }} />
                                                        <p className="mt-2 text-[10px] font-bold uppercase text-zinc-300">{c.label}</p>
                                                        <p className="font-mono text-[9px] text-zinc-500">{c.hex}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* UI/UX Proof: AnimateUIX & City Online */}
                    <section className="bg-[var(--surface)] py-20 sm:py-32 border-t border-[var(--line)]">
                        <div className="container-x">
                            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
                                <div>
                                    <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#507AF4]">
                                        Digital Proof
                                    </span>
                                    <h2 className="display-lg mt-3 uppercase text-[var(--ink-strong)]">
                                        Selected UI/UX work.
                                    </h2>
                                </div>
                                <Link
                                    href="/work"
                                    className="btn-press group inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.16em] text-[var(--ink)] hover:text-gradient"
                                >
                                    All Case Studies <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                                </Link>
                            </div>

                            <div className="mt-14 grid gap-10 lg:grid-cols-2">
                                {/* AnimateUIX */}
                                <Link
                                    href="/work/animateuix"
                                    data-cursor="view"
                                    className="group block overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--bg)] transition-all duration-300 hover:border-black/30 dark:hover:border-white/30 hover:shadow-2xl"
                                >
                                    <div className="relative aspect-[16/10] overflow-hidden bg-[#060814]" data-cursor-theme="light">
                                        <img
                                            src="/images/projects/animateuix/real-showcase.webp"
                                            alt="AnimateUIX Motion UI/UX"
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                            loading="lazy"
                                        />
                                        <div className="absolute left-6 top-6">
                                            <span className="rounded-full bg-black/70 px-4 py-1.5 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
                                                Case Study · 2024
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-8 sm:p-10">
                                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                                            AnimateUIX · Motion Tooling &amp; Platform
                                        </p>
                                        <h3 className="mt-2 font-display text-2xl font-extrabold uppercase text-[var(--ink-strong)] sm:text-3xl">
                                            Kinetic Design System &amp; Web Platform
                                        </h3>
                                        <p className="mt-3 text-sm leading-relaxed text-[var(--mute)]">
                                            Motion-native interface architecture, live Lottie preview curves, and structured keyframe asset repositories.
                                        </p>
                                        <div className="mt-6 flex items-center justify-between border-t border-[var(--line-soft)] pt-6">
                                            <div className="flex gap-2">
                                                <Tag accent="#507AF4">UI/UX Design</Tag>
                                                <Tag accent="#507AF4">Motion System</Tag>
                                                <Tag accent="#507AF4">Lottie</Tag>
                                            </div>
                                            <span className="text-xs font-bold uppercase tracking-wider text-[var(--ink)] group-hover:text-gradient">
                                                Explore Study ↗
                                            </span>
                                        </div>
                                    </div>
                                </Link>

                                {/* City Online */}
                                <Link
                                    href="/work/city-online"
                                    data-cursor="view"
                                    className="group block overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--bg)] transition-all duration-300 hover:border-black/30 dark:hover:border-white/30 hover:shadow-2xl"
                                >
                                    <div className="relative aspect-[16/10] overflow-hidden bg-[#040e14]" data-cursor-theme="light">
                                        <img
                                            src="/images/projects/city-online/real-showcase.webp"
                                            alt="City Online Limited Customer Portal"
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                            loading="lazy"
                                        />
                                        <div className="absolute left-6 top-6">
                                            <span className="rounded-full bg-black/70 px-4 py-1.5 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
                                                Case Study · 2024
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-8 sm:p-10">
                                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                                            City Online Limited · ISP Telecommunications
                                        </p>
                                        <h3 className="mt-2 font-display text-2xl font-extrabold uppercase text-[var(--ink-strong)] sm:text-3xl">
                                            Customer Portal &amp; Self-Service UI
                                        </h3>
                                        <p className="mt-3 text-sm leading-relaxed text-[var(--mute)]">
                                            High-contrast internet plan comparison grids, fiber coverage locator, and streamlined customer account onboarding.
                                        </p>
                                        <div className="mt-6 flex items-center justify-between border-t border-[var(--line-soft)] pt-6">
                                            <div className="flex gap-2">
                                                <Tag accent="#1BE2EB">Customer Portal</Tag>
                                                <Tag accent="#1BE2EB">Plan Selection</Tag>
                                                <Tag accent="#1BE2EB">UI Flow</Tag>
                                            </div>
                                            <span className="text-xs font-bold uppercase tracking-wider text-[var(--ink)] group-hover:text-gradient">
                                                Explore Study ↗
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* Dedicated UI/UX Closing CTA */}
                    <ConversionCTA
                        eyebrow="Experience Commission"
                        headline="Interfaces that"
                        accent="users remember."
                        description="Let's craft high-clarity software, web applications, or mobile products engineered for retention."
                    />
                </>
            )}

            {/* =========================================================================
                04 DEVELOPMENT EXPERIENCE (Only for /services/development)
               ========================================================================= */}
            {isDev && (
                <>
                    {/* Ten Development Capabilities */}
                    <section className="bg-[var(--surface)] py-20 sm:py-28 border-y border-[var(--line)]">
                        <div className="container-x">
                            <div className="max-w-2xl">
                                <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#1BE2EB]">
                                    Production Technology
                                </span>
                                <h2 className="display-lg mt-3 uppercase text-[var(--ink-strong)]">
                                    The development scope.
                                </h2>
                                <p className="mt-4 text-base text-[var(--mute)]">
                                    Full-stack engineering focused on rock-solid architectures, fast load times, and long-term maintainability.
                                </p>
                            </div>

                            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                                {[
                                    { title: 'Frontend Development', desc: 'React, Vite, modern Tailwind CSS, and smooth interaction pipelines.' },
                                    { title: 'Responsive Websites', desc: 'Fluid layout structures tested on real mobile, tablet, and ultrawide viewports.' },
                                    { title: 'Web Applications', desc: 'Dynamic SPAs with Inertia.js, state management, and real-time responsiveness.' },
                                    { title: 'Business Platforms', desc: 'Internal operations portals, customer hubs, and secure role-based portals.' },
                                    { title: 'Custom Software', desc: 'Tailored business logic built with modern PHP 8.4 and Laravel framework architecture.' },
                                    { title: 'CMS Integration', desc: 'Intuitive editorial workflows with structured schemas and zero client friction.' },
                                    { title: 'API Integration', desc: 'REST and GraphQL service connections, webhooks, and third-party SaaS hooks.' },
                                    { title: 'Performance Optimization', desc: 'Sub-second page loads, asset minification, caching, and low Core Web Vitals.' },
                                    { title: 'Accessibility', desc: 'WCAG 2.1 AA conformance, screen reader landmarks, and keyboard navigation.' },
                                    { title: 'Maintenance', desc: 'Ongoing framework security updates, dependency audits, and uptime reliability.' },
                                ].map((cap, idx) => (
                                    <div
                                        key={cap.title}
                                        className="flex flex-col justify-between rounded-2xl border border-[var(--line)] bg-[var(--bg)] p-6 transition-colors hover:border-black/30 dark:hover:border-white/30"
                                    >
                                        <div>
                                            <span className="font-display text-xs font-bold text-[#1BE2EB]">
                                                0{idx + 1}
                                            </span>
                                            <h3 className="mt-3 font-display text-base font-bold uppercase text-[var(--ink-strong)]">
                                                {cap.title}
                                            </h3>
                                            <p className="mt-2 text-xs leading-relaxed text-[var(--mute)]">
                                                {cap.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Four Engineering Pillars */}
                    <section className="bg-[var(--bg)] py-20 sm:py-32">
                        <div className="container-x">
                            <div className="max-w-2xl">
                                <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#1BE2EB]">
                                    Architectural Rigor
                                </span>
                                <h2 className="display-lg mt-3 uppercase text-[var(--ink-strong)]">
                                    Four engineering pillars.
                                </h2>
                            </div>

                            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                                {[
                                    {
                                        name: 'Performance',
                                        metric: '95+ Lighthouse',
                                        desc: 'Sub-second First Contentful Paint, optimized WebP graphics, and lightweight JavaScript payloads.',
                                        accent: '#1BE2EB',
                                    },
                                    {
                                        name: 'Scalability',
                                        metric: 'Stateless Core',
                                        desc: 'Clean MVC separation, queueable background jobs, and cloud-ready database query optimization.',
                                        accent: '#507AF4',
                                    },
                                    {
                                        name: 'Accessibility',
                                        metric: 'WCAG 2.1 AA',
                                        desc: 'Semantic HTML5 structure, aria roles, high color contrast, and complete keyboard operability.',
                                        accent: '#891FFB',
                                    },
                                    {
                                        name: 'Maintainability',
                                        metric: 'Clean Code',
                                        desc: 'Strict PHP 8 types, standardized component contracts, automated linting with Pint, and test coverage.',
                                        accent: '#1BE2EB',
                                    },
                                ].map((p) => (
                                    <div
                                        key={p.name}
                                        className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-8 flex flex-col justify-between"
                                    >
                                        <div>
                                            <span className="font-display text-xs font-bold uppercase tracking-wider" style={{ color: p.accent }}>
                                                {p.metric}
                                            </span>
                                            <h3 className="mt-3 font-display text-2xl font-extrabold uppercase text-[var(--ink-strong)]">
                                                {p.name}
                                            </h3>
                                            <p className="mt-3 text-sm leading-relaxed text-[var(--mute)]">
                                                {p.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Development Proof: City Online & Jute for Good */}
                    <section className="bg-[var(--surface)] py-20 sm:py-32 border-t border-[var(--line)]">
                        <div className="container-x">
                            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
                                <div>
                                    <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#1BE2EB]">
                                        Technical Proof
                                    </span>
                                    <h2 className="display-lg mt-3 uppercase text-[var(--ink-strong)]">
                                        Engineering in production.
                                    </h2>
                                </div>
                                <Link
                                    href="/work"
                                    className="btn-press group inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.16em] text-[var(--ink)] hover:text-gradient"
                                >
                                    All Case Studies <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                                </Link>
                            </div>

                            <div className="mt-14 grid gap-10 lg:grid-cols-2">
                                <Link
                                    href="/work/city-online"
                                    data-cursor="view"
                                    className="group block overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--bg)] transition-all duration-300 hover:border-black/30 dark:hover:border-white/30 hover:shadow-2xl"
                                >
                                    <div className="relative aspect-[16/10] overflow-hidden bg-[#040e14]" data-cursor-theme="light">
                                        <img
                                            src="/images/projects/city-online/real-showcase.webp"
                                            alt="City Online Web Development"
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                            loading="lazy"
                                        />
                                        <div className="absolute left-6 top-6">
                                            <span className="rounded-full bg-black/70 px-4 py-1.5 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
                                                Web Engineering · 2024
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-8 sm:p-10">
                                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                                            City Online Limited · Nationwide ISP Platform
                                        </p>
                                        <h3 className="mt-2 font-display text-2xl font-extrabold uppercase text-[var(--ink-strong)] sm:text-3xl">
                                            High-Performance ISP Web Platform
                                        </h3>
                                        <p className="mt-3 text-sm leading-relaxed text-[var(--mute)]">
                                            Engineered with responsive customer comparison tools, coverage checker integrations, and lightweight web standards.
                                        </p>
                                        <div className="mt-6 flex items-center justify-between border-t border-[var(--line-soft)] pt-6">
                                            <div className="flex gap-2">
                                                <Tag accent="#1BE2EB">Full-Stack</Tag>
                                                <Tag accent="#1BE2EB">Responsive</Tag>
                                                <Tag accent="#1BE2EB">APIs</Tag>
                                            </div>
                                            <span className="text-xs font-bold uppercase tracking-wider text-[var(--ink)] group-hover:text-gradient">
                                                Explore Study ↗
                                            </span>
                                        </div>
                                    </div>
                                </Link>

                                <Link
                                    href="/work/jute-for-good"
                                    data-cursor="view"
                                    className="group block overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--bg)] transition-all duration-300 hover:border-black/30 dark:hover:border-white/30 hover:shadow-2xl"
                                >
                                    <div className="relative aspect-[16/10] overflow-hidden bg-[#141006]" data-cursor-theme="light">
                                        <img
                                            src="/images/projects/jute-for-good/real-showcase.webp"
                                            alt="Jute for Good Export Platform"
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                            loading="lazy"
                                        />
                                        <div className="absolute left-6 top-6">
                                            <span className="rounded-full bg-black/70 px-4 py-1.5 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
                                                Catalog Engineering · 2023
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-8 sm:p-10">
                                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                                            Jute for Good · Biodegradable Export Catalog
                                        </p>
                                        <h3 className="mt-2 font-display text-2xl font-extrabold uppercase text-[var(--ink-strong)] sm:text-3xl">
                                            Structured B2B Export Catalog Platform
                                        </h3>
                                        <p className="mt-3 text-sm leading-relaxed text-[var(--mute)]">
                                            Structured product spec schemas, technical export documentation sheets, and international RFQ quote pipelines.
                                        </p>
                                        <div className="mt-6 flex items-center justify-between border-t border-[var(--line-soft)] pt-6">
                                            <div className="flex gap-2">
                                                <Tag accent="#D4A359">Product Catalog</Tag>
                                                <Tag accent="#D4A359">RFQ System</Tag>
                                                <Tag accent="#D4A359">Web Dev</Tag>
                                            </div>
                                            <span className="text-xs font-bold uppercase tracking-wider text-[var(--ink)] group-hover:text-gradient">
                                                Explore Study ↗
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* Dedicated Development Closing CTA */}
                    <ConversionCTA
                        eyebrow="Engineering Commission"
                        headline="Code engineered"
                        accent="for what's next."
                        description="Partner with Marketorr to engineer high-speed websites, custom software, and robust web applications."
                    />
                </>
            )}

            {/* Cross-Navigation between Services */}
            <section className="bg-[var(--bg)] py-12 border-t border-[var(--line)]">
                <div className="container-x flex flex-wrap items-center justify-between gap-6">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                        Explore Other Disciplines:
                    </span>
                    <div className="flex flex-wrap gap-4">
                        {SERVICES.filter((x) => x.slug !== canonicalSlug).map((o) => (
                            <Link
                                key={o.slug}
                                href={`/services/${o.slug}`}
                                className="btn-press rounded-full border border-[var(--line)] px-6 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-[var(--ink)] hover:border-black/30 dark:hover:border-white/30"
                            >
                                {o.name} →
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
