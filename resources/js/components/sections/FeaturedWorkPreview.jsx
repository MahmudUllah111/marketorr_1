import { Link } from '@inertiajs/react';
import { SectionLabel, Tag } from '../ui/primitives';
import { PROJECTS } from '../../data/projects';

export default function FeaturedWorkPreview() {
    const dominant = PROJECTS.find((p) => p.slug === 'alarabi-fashion') || PROJECTS[0];
    const secondary = PROJECTS.filter((p) => p.slug === 'city-online' || p.slug === 'animateuix');

    return (
        <section id="work" className="relative bg-[var(--bg)] py-24 sm:py-32">
            <div className="container-x">
                <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
                    <div>
                        <SectionLabel index="03" name="PORTFOLIO HIGHLIGHTS" />
                        <h2 className="display-lg mt-6 uppercase text-[var(--ink-strong)]">
                            Featured <br className="hidden sm:inline" />
                            <span className="text-gradient">case studies.</span>
                        </h2>
                    </div>
                    <Link
                        href="/work"
                        data-cursor="view"
                        className="btn-press group inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.16em] text-[var(--ink)] hover:text-gradient"
                    >
                        View All Work <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </Link>
                </div>

                {/* Dominant Featured Project */}
                <div className="mt-14">
                    <Link
                        href={`/work/${dominant.slug}`}
                        data-cursor="view"
                        className="group btn-press block overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] transition-all duration-300 hover:border-black/30 dark:hover:border-white/30 hover:shadow-2xl"
                    >
                        <div className="grid gap-0 lg:grid-cols-12">
                            <div className="relative aspect-[16/10] overflow-hidden bg-[#140721] lg:col-span-7 lg:aspect-auto" data-cursor-theme="light">
                                <img
                                    src={dominant.heroImage}
                                    alt={`${dominant.title} — ${dominant.client}`}
                                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                                    loading="lazy"
                                />
                                <div className="absolute left-6 top-6">
                                    <span className="rounded-full bg-black/70 px-3.5 py-1.5 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-[#d4af37] backdrop-blur-md">
                                        Primary Case Study · {dominant.year}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between p-8 sm:p-12 lg:col-span-5">
                                <div>
                                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                                        {dominant.client} · {dominant.year}
                                    </p>
                                    <h3 className="mt-3 font-display text-3xl font-extrabold uppercase text-[var(--ink-strong)] sm:text-4xl">
                                        {dominant.title}
                                    </h3>
                                    <p className="mt-4 text-sm leading-relaxed text-[var(--mute)] sm:text-base">
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
                                <div className="mt-8 flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.16em] text-[var(--ink)] group-hover:text-gradient">
                                    <span>Read case study</span>
                                    <span className="transition-transform duration-200 group-hover:translate-x-1">↗</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Secondary Asymmetric Projects Grid */}
                <div className="mt-8 grid gap-8 md:grid-cols-2">
                    {secondary.map((p) => (
                        <Link
                            key={p.slug}
                            href={`/work/${p.slug}`}
                            data-cursor="view"
                            className="group btn-press block overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] transition-all duration-300 hover:border-black/30 dark:hover:border-white/30 hover:shadow-xl"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden bg-black">
                                <img
                                    src={p.heroImage}
                                    alt={`${p.title} — ${p.client}`}
                                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                                    loading="lazy"
                                />
                                <div className="absolute left-5 top-5">
                                    <span className="rounded-full bg-black/70 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur-md">
                                        {p.client}
                                    </span>
                                </div>
                            </div>
                            <div className="p-7">
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                                    {p.disciplines ? p.disciplines.join(' · ') : p.tags.join(' · ')}
                                </p>
                                <h3 className="mt-2 font-display text-2xl font-extrabold uppercase text-[var(--ink-strong)]">
                                    {p.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-[var(--mute)]">
                                    {p.summary}
                                </p>
                                <div className="mt-4 flex flex-wrap gap-1.5">
                                    {p.tags.slice(0, 3).map((t) => (
                                        <Tag key={t} accent={p.accent}>
                                            {t}
                                        </Tag>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
