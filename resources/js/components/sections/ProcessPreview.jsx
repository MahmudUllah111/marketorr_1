import { Link } from '@inertiajs/react';
import { SectionLabel } from '../ui/primitives';
import { GLOBAL_PROCESS } from '../../data/services';

export default function ProcessPreview() {
    return (
        <section id="process" className="relative bg-[var(--surface)] py-24 sm:py-32">
            <div className="container-x">
                <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
                    <div>
                        <SectionLabel index="04" name="OPERATING SYSTEM" />
                        <h2 className="display-lg mt-6 uppercase text-[var(--ink-strong)]">
                            Measured craft. <br className="hidden sm:inline" />
                            <span className="text-gradient">Systematic execution.</span>
                        </h2>
                    </div>
                    <Link
                        href="/process"
                        data-cursor="explore"
                        className="btn-press group inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.16em] text-[var(--ink)] hover:text-gradient"
                    >
                        Explore Our Process <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </Link>
                </div>

                <p className="mt-6 max-w-2xl text-base text-[var(--mute)] sm:text-lg">
                    Every brand, design system, and web platform we engineer moves through an intentional 6-stage framework from initial discovery to measurable, production-grade results.
                </p>

                {/* 6-Stage Process Cards */}
                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                    {GLOBAL_PROCESS.map((p, idx) => {
                        const accents = ['#891FFB', '#6D4CF8', '#507AF4', '#35AEEF', '#26C7DD', '#1BE2EB'];
                        const accent = accents[idx] || '#891FFB';

                        return (
                            <div
                                key={p.step}
                                className="group flex flex-col justify-between rounded-2xl border border-[var(--line)] bg-[var(--bg)] p-6 transition-all duration-200 hover:border-black/20 dark:hover:border-white/20"
                            >
                                <div>
                                    <span className="font-display text-2xl font-extrabold" style={{ color: accent }}>
                                        {p.step}
                                    </span>
                                    <h3 className="mt-3 font-display text-lg font-extrabold uppercase text-[var(--ink-strong)]">
                                        {p.name}
                                    </h3>
                                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--ink-faint)]">
                                        {p.phase}
                                    </p>
                                    <p className="mt-3 text-xs leading-relaxed text-[var(--mute)]">
                                        {p.summary}
                                    </p>
                                </div>
                                <div className="mt-6 border-t border-[var(--line-soft)] pt-4">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--ink-faint)]">
                                        Stage {p.step} of 06
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
