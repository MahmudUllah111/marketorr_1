import { Link } from '@inertiajs/react';
import { SectionLabel, Tag } from '../ui/primitives';
import { PROJECTS } from '../../data/projects';

export default function FeaturedWorkPreview() {
    const dominant = PROJECTS.find((p) => p.slug === 'alarabi-fashion') || PROJECTS[0];
    const secondary = PROJECTS.filter((p) => p.slug === 'city-online' || p.slug === 'animateuix');

    return (
        <section id="work" className="relative bg-[var(--bg)] py-24 sm:py-32">
            <div className="container-x">
                {/* Section Header */}
                <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
                    <div>
                        <SectionLabel index="03" name="PORTFOLIO HIGHLIGHTS" />
                        <h2 className="display-lg mt-6 uppercase text-[var(--ink-strong)]">
                            Featured <br className="hidden sm:inline" />
                            <span className="text-gradient">case studies.</span>
                        </h2>
                        <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--mute)] sm:text-lg">
                            Selected engagements across brand systems, interactive digital products, and high-performance web platforms.
                        </p>
                    </div>
                    <Link
                        href="/work"
                        data-cursor="explore"
                        className="btn-press group inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.16em] text-[var(--ink)] hover:text-gradient"
                    >
                        View All Work ({PROJECTS.length})
                        <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </Link>
                </div>

                {/* Dominant Flagship Case Study */}
                <div className="mt-14">
                    <Link
                        href={`/work/${dominant.slug}`}
                        data-cursor="view"
                        className="group btn-press block overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--surface)] transition-all duration-300 hover:border-black/30 dark:hover:border-white/30 hover:shadow-2xl"
                    >
                        <div className="grid gap-0 lg:grid-cols-12">
                            {/* Media Canvas (7 cols) */}
                            <div
                                className="relative aspect-[16/10] overflow-hidden bg-[#0e0717] sm:aspect-[16/9] lg:col-span-7 lg:aspect-auto lg:min-h-[460px]"
                                data-cursor-theme="light"
                            >
                                <div
                                    className="absolute inset-0 pointer-events-none opacity-40 transition-opacity duration-500 group-hover:opacity-70"
                                    style={{
                                        background: `radial-gradient(circle at 30% 30%, ${dominant.accent}35, transparent 65%)`,
                                    }}
                                />
                                <img
                                    src={dominant.heroImage}
                                    alt={`${dominant.title} — ${dominant.client}`}
                                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                                    loading="lazy"
                                />

                                {/* Glassmorphic Top Pill */}
                                <div className="absolute left-6 top-6 flex items-center gap-2">
                                    <span className="rounded-full border border-white/20 bg-black/60 px-4 py-1.5 font-display text-[10px] font-bold uppercase tracking-[0.2em] text-white/90 backdrop-blur-md">
                                        01 / Flagship · {dominant.year}
                                    </span>
                                </div>

                                {/* Hover Action Pill */}
                                <div className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-xl transition-all duration-300 group-hover:scale-110">
                                    <span className="text-base transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                        ↗
                                    </span>
                                </div>
                            </div>

                            {/* Editorial Description (5 cols) */}
                            <div className="flex flex-col justify-between p-8 sm:p-12 lg:col-span-5 lg:p-12">
                                <div>
                                    <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                                        <span className="h-2 w-2 rounded-full" style={{ background: dominant.accent }} />
                                        <span>{dominant.client}</span>
                                        <span>·</span>
                                        <span>{dominant.year}</span>
                                    </div>

                                    <h3 className="mt-4 font-display text-3xl font-extrabold uppercase text-[var(--ink-strong)] transition-transform duration-300 group-hover:translate-x-1 sm:text-4xl lg:text-5xl">
                                        {dominant.title}
                                    </h3>

                                    <p className="mt-3 font-serif text-base italic text-[var(--ink-faint)] sm:text-lg">
                                        {dominant.disciplines ? dominant.disciplines.join(', ') : 'Brand Strategy & Packaging'}
                                    </p>

                                    <p className="mt-5 text-sm leading-relaxed text-[var(--mute)] sm:text-base">
                                        {dominant.summary}
                                    </p>

                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {dominant.tags.map((t) => (
                                            <Tag key={t} accent={dominant.accent}>
                                                {t}
                                            </Tag>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-10 flex items-center justify-between border-t border-[var(--line-soft)] pt-6">
                                    <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[var(--ink)] group-hover:text-gradient">
                                        Read Case Study ↗
                                    </span>
                                    {dominant.deliverables && (
                                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--ink-faint)]">
                                            {dominant.deliverables.length} Key Deliverables
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Secondary Asymmetric Duo */}
                <div className="mt-8 grid gap-8 md:grid-cols-2">
                    {secondary.map((p, pIdx) => (
                        <Link
                            key={p.slug}
                            href={`/work/${p.slug}`}
                            data-cursor="view"
                            className="group btn-press flex flex-col justify-between overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--surface)] transition-all duration-300 hover:border-black/30 dark:hover:border-white/30 hover:shadow-xl"
                        >
                            <div>
                                <div
                                    className="relative aspect-[16/10] overflow-hidden bg-black"
                                    data-cursor-theme="light"
                                >
                                    <div
                                        className="absolute inset-0 pointer-events-none opacity-40 transition-opacity duration-500 group-hover:opacity-60"
                                        style={{
                                            background: `radial-gradient(circle at 30% 30%, ${p.accent}30, transparent 65%)`,
                                        }}
                                    />
                                    <img
                                        src={p.heroImage}
                                        alt={`${p.title} — ${p.client}`}
                                        className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                                        loading="lazy"
                                    />
                                    <div className="absolute left-5 top-5">
                                        <span className="rounded-full border border-white/20 bg-black/60 px-3.5 py-1.5 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
                                            0{pIdx + 2} / {p.client}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform duration-300 group-hover:scale-110">
                                        <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                            ↗
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8 sm:p-9">
                                    <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                                        <span>{p.disciplines ? p.disciplines.slice(0, 2).join(' · ') : p.tags.slice(0, 2).join(' · ')}</span>
                                        <span>{p.year}</span>
                                    </div>

                                    <h3 className="mt-3 font-display text-2xl font-extrabold uppercase text-[var(--ink-strong)] transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
                                        {p.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-relaxed text-[var(--mute)]">
                                        {p.summary}
                                    </p>

                                    <div className="mt-5 flex flex-wrap gap-1.5">
                                        {p.tags.slice(0, 3).map((t) => (
                                            <Tag key={t} accent={p.accent}>
                                                {t}
                                            </Tag>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-[var(--line-soft)] px-8 py-5 sm:px-9">
                                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.16em] text-[var(--ink)] group-hover:text-gradient">
                                    <span>Explore Case Study</span>
                                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Bottom Archive Prompt */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-[var(--line)] bg-[var(--surface-2)] p-6 sm:flex-row sm:px-8">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)] text-center sm:text-left">
                        Explore all {PROJECTS.length} verified case studies across branding, UI/UX, and web engineering.
                    </p>
                    <Link
                        href="/work"
                        data-cursor="explore"
                        className="btn-press inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--bg)] px-6 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-[var(--ink)] transition-colors duration-200 hover:border-black/30 dark:hover:border-white/30"
                    >
                        Browse Archive ↗
                    </Link>
                </div>
            </div>
        </section>
    );
}

