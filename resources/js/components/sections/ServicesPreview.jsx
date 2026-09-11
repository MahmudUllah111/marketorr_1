import { Link } from '@inertiajs/react';
import { SectionLabel } from '../ui/primitives';
import { SERVICES } from '../../data/services';

/**
 * The three disciplines read as full-width editorial rows rather than equal
 * cards: the index and discipline name carry the scale, and the whole row is a
 * single target so the hover state has one unambiguous meaning.
 */
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

                <div className="mt-16 border-b border-[var(--line)]">
                    {SERVICES.map((s) => {
                        const accentFill = s.accentTo
                            ? `linear-gradient(135deg, ${s.accent}, ${s.accentTo})`
                            : s.accent;

                        return (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                data-cursor="explore"
                                className="group relative block border-t border-[var(--line)] py-10 transition-colors duration-300 hover:bg-[var(--bg)] sm:py-12 lg:pr-20"
                            >
                                {/* Accent rule draws itself across the row on hover */}
                                <span
                                    className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                                    style={{
                                        background: s.accentTo
                                            ? `linear-gradient(90deg, ${s.accent}, ${s.accentTo})`
                                            : s.accent,
                                    }}
                                    aria-hidden
                                />

                                <div className="grid gap-6 lg:grid-cols-12 lg:items-start lg:gap-10">
                                    {/* Index shares a line with the arrow while stacked; at lg the
                                        arrow parks against the row's right edge instead. */}
                                    <div className="flex items-center justify-between lg:col-span-1 lg:block">
                                        <span
                                            className="font-display text-sm font-extrabold tabular-nums tracking-[0.1em]"
                                            style={{ color: s.accent }}
                                        >
                                            {s.index}
                                        </span>

                                        <span
                                            className="relative inline-flex h-11 w-11 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border border-[var(--field-line)] text-[var(--ink)] transition-colors duration-300 group-hover:border-transparent group-hover:text-white lg:absolute lg:right-0 lg:top-12"
                                            aria-hidden
                                        >
                                            <span
                                                className="absolute inset-0 origin-bottom scale-y-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100"
                                                style={{ background: accentFill }}
                                            />
                                            <span className="relative transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                                                ↗
                                            </span>
                                        </span>
                                    </div>

                                    <div className="lg:col-span-5">
                                        <h3 className="font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-tight text-[var(--ink-strong)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:text-5xl lg:group-hover:translate-x-2">
                                            {s.name}
                                        </h3>
                                        <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--mute)] sm:text-base">
                                            {s.short || s.description}
                                        </p>
                                    </div>

                                    <div className="lg:col-span-5">
                                        <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
                                            {s.capabilities.slice(0, 6).map((c) => (
                                                <li
                                                    key={c}
                                                    className="flex items-start gap-2.5 text-[13px] leading-relaxed text-[var(--ink-faint)] transition-colors duration-300 group-hover:text-[var(--ink)]"
                                                >
                                                    <span
                                                        className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full"
                                                        style={{ background: s.accent }}
                                                        aria-hidden
                                                    />
                                                    {c}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
