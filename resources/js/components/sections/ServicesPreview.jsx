import { Link } from '@inertiajs/react';
import { SectionLabel, Tag } from '../ui/primitives';
import { SERVICES } from '../../data/services';

export default function ServicesPreview() {
    return (
        <section id="services" className="relative bg-[var(--surface)] py-24 sm:py-32">
            <div className="container-x">
                <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
                    <div>
                        <SectionLabel index="02" name="SERVICES &amp; DISCIPLINES" />
                        <h2 className="display-lg mt-6 uppercase text-[var(--ink-strong)]">
                            Three connected <br className="hidden sm:inline" />
                            <span className="text-gradient">disciplines.</span>
                        </h2>
                    </div>
                    <Link
                        href="/services"
                        data-cursor="explore"
                        className="btn-press group inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.16em] text-[var(--ink)] hover:text-gradient"
                    >
                        View All Services <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </Link>
                </div>

                <p className="mt-6 max-w-2xl text-base text-[var(--mute)] sm:text-lg">
                    We do not treat strategy, design, and code as separate silos. Every engagement is built with cohesive creative craft and technical precision.
                </p>

                {/* Three Core Disciplines Grid */}
                <div className="mt-16 grid gap-8 lg:grid-cols-3">
                    {SERVICES.map((s) => {
                        const grad = s.accentTo
                            ? `linear-gradient(90deg, ${s.accent}, ${s.accentTo})`
                            : s.accent;

                        return (
                            <div
                                key={s.slug}
                                className="group flex flex-col justify-between rounded-2xl border border-[var(--line)] bg-[var(--bg)] p-8 transition-all duration-300 hover:border-black/30 dark:hover:border-white/30 hover:shadow-xl"
                            >
                                <div>
                                    <div className="flex items-center justify-between">
                                        <span className="font-display text-sm font-extrabold" style={{ color: s.accent }}>
                                            {s.index}
                                        </span>
                                        <Link
                                            href={`/services/${s.slug}`}
                                            data-cursor="explore"
                                            className="text-xs font-bold text-[var(--ink-faint)] group-hover:text-[var(--ink)]"
                                        >
                                            ↗
                                        </Link>
                                    </div>
                                    <h3 className="mt-5 font-display text-2xl font-extrabold uppercase text-[var(--ink-strong)]">
                                        {s.name}
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-[var(--mute)]">
                                        {s.short || s.description}
                                    </p>

                                    <div className="mt-6 flex flex-wrap gap-1.5">
                                        {s.capabilities.slice(0, 4).map((c) => (
                                            <Tag key={c} accent={s.accent}>
                                                {c}
                                            </Tag>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-8 border-t border-[var(--line-soft)] pt-6">
                                    <Link
                                        href={`/services/${s.slug}`}
                                        data-cursor="explore"
                                        className="btn-press inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.14em] text-white"
                                        style={{ background: grad }}
                                    >
                                        Explore {s.name.split(' ')[0]} ↗
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
