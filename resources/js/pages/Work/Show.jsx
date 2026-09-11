import { Head, Link } from '@inertiajs/react';
import { getProjectBySlug, PROJECTS } from '../../data/projects';
import { SectionLabel, Tag } from '../../components/ui/primitives';
import ConversionCTA from '../../components/sections/ConversionCTA';

export default function CaseStudy({ slug }) {
    const p = getProjectBySlug(slug) ?? PROJECTS[0];
    const isConcept = p.verificationStatus === 'studio-concept';

    const currentIndex = PROJECTS.findIndex((x) => x.slug === p.slug);
    const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

    return (
        <>
            <Head title={`${p.title} — Marketorr Case Study`} />

            {/* =========================================================================
                01 PROJECT HERO
               ========================================================================= */}
            <article className="bg-[var(--bg)] pt-12 pb-16 sm:pt-16 sm:pb-24">
                <div className="container-x">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <SectionLabel index="03" name="CASE STUDY" />
                        {isConcept && (
                            <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-amber-300">
                                Studio concept — exploratory design
                            </span>
                        )}
                    </div>

                    <div className="mt-8 max-w-5xl">
                        <h1 className="display-xl uppercase text-[var(--ink-strong)]">
                            {p.title}
                        </h1>
                        <p className="mt-6 font-serif text-2xl italic text-[var(--ink-faint)] sm:text-3xl">
                            {p.disciplines ? p.disciplines.join(' · ') : p.tags?.join(' · ')}
                        </p>
                        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--mute)] sm:text-xl">
                            {p.summary}
                        </p>
                    </div>

                    {/* Project Metadata Grid */}
                    <div className="mt-14 grid grid-cols-2 gap-6 border-y border-[var(--line)] py-8 sm:grid-cols-4">
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">Client</p>
                            <p className="mt-1.5 font-display text-sm sm:text-base font-bold text-[var(--ink-strong)]">{p.client}</p>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">Year</p>
                            <p className="mt-1.5 font-display text-sm sm:text-base font-bold text-[var(--ink-strong)]">{p.year}</p>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">Industry</p>
                            <p className="mt-1.5 font-display text-sm sm:text-base font-bold text-[var(--ink-strong)]">{p.industry || 'Commercial Enterprise'}</p>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">Services</p>
                            <p className="mt-1.5 font-display text-sm sm:text-base font-bold text-[var(--ink-strong)]">{p.services?.join(', ') || 'Branding & UI/UX'}</p>
                        </div>
                    </div>

                    {/* Dominant Hero Artwork Frame */}
                    <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-3xl border border-[var(--line)] bg-[#0c0d14] shadow-2xl" data-cursor-theme="light">
                        {p.heroImage ? (
                            <img
                                src={p.heroImage}
                                alt={`${p.title} case study artwork`}
                                className="h-full w-full object-cover object-center"
                            />
                        ) : (
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: `radial-gradient(120% 100% at 20% 10%, ${p.accent}40, transparent 60%), linear-gradient(160deg,#18181F,#08080A)`,
                                }}
                            />
                        )}
                        <div className="absolute left-6 top-6">
                            <span className="rounded-full bg-black/70 px-4 py-1.5 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
                                Delivered Engagement · {p.year}
                            </span>
                        </div>
                    </div>
                </div>
            </article>

            {/* =========================================================================
                SIGNATURE MOTIF BAR: IDEA → EXPERIENCE → RESULT
               ========================================================================= */}
            <div className="border-y border-[var(--line)] bg-[var(--surface-2)] py-4" aria-hidden>
                <div className="container-x flex flex-wrap items-center justify-between gap-4 text-xs font-bold uppercase tracking-[0.2em]">
                    <span className="text-[var(--ink-faint)]">Marketorr Methodology</span>
                    <div className="flex items-center gap-4 text-gradient font-display text-sm font-extrabold tracking-wider">
                        <span>IDEA</span>
                        <span>→</span>
                        <span>EXPERIENCE</span>
                        <span>→</span>
                        <span>RESULT</span>
                    </div>
                </div>
            </div>

            {/* =========================================================================
                01 / CHALLENGE
               ========================================================================= */}
            <section className="bg-[var(--bg)] py-20 sm:py-28 border-b border-[var(--line)]">
                <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-start">
                    <div className="lg:col-span-4 lg:sticky lg:top-28">
                        <span className="font-display text-xs font-bold uppercase tracking-widest text-[#891FFB]">
                            Phase 01 //
                        </span>
                        <h2 className="display-md mt-2 uppercase text-[var(--ink-strong)]">
                            The Challenge.
                        </h2>
                        <div className="mt-4 h-[2px] w-12 bg-[#891FFB]" />
                    </div>
                    <div className="lg:col-span-8 space-y-6">
                        <p className="font-serif text-2xl italic leading-snug text-[var(--ink)] sm:text-3xl">
                            "{p.challenge}"
                        </p>
                        <p className="text-base leading-relaxed text-[var(--mute)] sm:text-lg">
                            Prior to engagement, the client faced a structural discrepancy between their market scale and how their digital presence was perceived. A generic identity and fragmented touchpoints undermined their commercial authority during key partner and buyer interactions.
                        </p>
                    </div>
                </div>
            </section>

            {/* =========================================================================
                02 / IDEA
               ========================================================================= */}
            <section className="bg-[var(--surface)] py-20 sm:py-28 border-b border-[var(--line)]">
                <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-start">
                    <div className="lg:col-span-4 lg:sticky lg:top-28">
                        <span className="font-display text-xs font-bold uppercase tracking-widest text-[#507AF4]">
                            Phase 02 //
                        </span>
                        <h2 className="display-md mt-2 uppercase text-[var(--ink-strong)]">
                            The Idea.
                        </h2>
                        <div className="mt-4 h-[2px] w-12 bg-[#507AF4]" />
                    </div>
                    <div className="lg:col-span-8 space-y-6">
                        <p className="font-serif text-2xl italic leading-snug text-[var(--ink)] sm:text-3xl">
                            "{p.idea || p.approach || 'Translate core commercial strengths into an unmistakable visual and digital system.'}"
                        </p>
                        <p className="text-base leading-relaxed text-[var(--mute)] sm:text-lg">
                            We bypassed superficial redesigns to establish a singular strategic concept. By identifying the exact visual and experiential markers of leadership in their domain, we engineered a foundation built to withstand international scrutiny and long-term expansion.
                        </p>
                    </div>
                </div>
            </section>

            {/* =========================================================================
                03 / EXPERIENCE
               ========================================================================= */}
            <section className="bg-[var(--bg)] py-20 sm:py-28 border-b border-[var(--line)]">
                <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-start">
                    <div className="lg:col-span-4 lg:sticky lg:top-28">
                        <span className="font-display text-xs font-bold uppercase tracking-widest text-[#1BE2EB]">
                            Phase 03 //
                        </span>
                        <h2 className="display-md mt-2 uppercase text-[var(--ink-strong)]">
                            The Experience.
                        </h2>
                        <div className="mt-4 h-[2px] w-12 bg-[#1BE2EB]" />
                    </div>
                    <div className="lg:col-span-8 space-y-8">
                        <p className="font-serif text-2xl italic leading-snug text-[var(--ink)] sm:text-3xl">
                            "{p.experience || 'Crafting tactile collateral, responsive interfaces, and production-grade design systems.'}"
                        </p>

                        {/* Tangible Deliverables Card */}
                        <div className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-8 sm:p-10 shadow-lg">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                                Scope Delivered
                            </p>
                            <h3 className="mt-2 font-display text-2xl font-extrabold uppercase text-[var(--ink-strong)]">
                                Project Deliverables
                            </h3>
                            <ul className="mt-6 space-y-3.5 text-sm sm:text-base text-[var(--mute)]">
                                {p.deliverables?.map((d) => (
                                    <li key={d} className="flex items-center gap-3">
                                        <span className="h-2 w-2 rounded-full flex-shrink-0" style={{ background: p.accent }} aria-hidden />
                                        <span>{d}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================================
                04 / RESULT
               ========================================================================= */}
            <section className="bg-[var(--surface)] py-20 sm:py-28 border-b border-[var(--line)]">
                <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-start">
                    <div className="lg:col-span-4 lg:sticky lg:top-28">
                        <span className="font-display text-xs font-bold uppercase tracking-widest text-gradient">
                            Phase 04 //
                        </span>
                        <h2 className="display-md mt-2 uppercase text-[var(--ink-strong)]">
                            The Result.
                        </h2>
                        <div className="mt-4 h-[2px] w-12" style={{ background: 'linear-gradient(90deg,#891FFB,#507AF4,#1BE2EB)' }} />
                    </div>
                    <div className="lg:col-span-8 space-y-8">
                        <p className="font-serif text-2xl italic leading-snug text-[var(--ink)] sm:text-3xl">
                            "{p.result || 'Unified global identity deployed across factory and corporate touchpoints.'}"
                        </p>

                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="rounded-2xl border border-[var(--line)] bg-[var(--bg)] p-7">
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                                    Operational Impact
                                </p>
                                <ul className="mt-4 space-y-2.5 text-sm text-[var(--mute)]">
                                    {p.outcomes?.map((o) => (
                                        <li key={o} className="flex items-start gap-2.5">
                                            <span className="text-emerald-500 font-bold">✓</span>
                                            <span>{o}</span>
                                        </li>
                                    )) || (
                                        <li className="flex items-start gap-2.5">
                                            <span className="text-emerald-500 font-bold">✓</span>
                                            <span>Full production release across approved touchpoints</span>
                                        </li>
                                    )}
                                </ul>
                            </div>

                            <div className="rounded-2xl border border-[var(--line)] bg-[var(--bg)] p-7">
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                                    Tools &amp; Technology Stack
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {p.technology?.map((tech) => (
                                        <span key={tech} className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 py-1 text-xs font-semibold text-[var(--ink-strong)]">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================================
                05 NEXT CASE STUDY NAVIGATION
               ========================================================================= */}
            {nextProject && (
                <section className="bg-[var(--bg)] py-16 sm:py-24 border-b border-[var(--line)]">
                    <div className="container-x flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                        <div>
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                                Next Case Study
                            </p>
                            <h3 className="mt-2 font-display text-3xl font-extrabold uppercase text-[var(--ink-strong)] sm:text-4xl">
                                {nextProject.title}
                            </h3>
                            <p className="mt-1 text-sm text-[var(--mute)]">
                                {nextProject.client} · {nextProject.year}
                            </p>
                        </div>
                        <Link
                            href={`/work/${nextProject.slug}`}
                            data-cursor="view"
                            className="btn-press inline-flex items-center gap-2 rounded-full border border-[var(--field-line)] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[var(--ink)] hover:bg-[var(--invert-btn-hover)] hover:text-[var(--bg)] transition-colors"
                        >
                            View Case Study <span aria-hidden>↗</span>
                        </Link>
                    </div>
                </section>
            )}

            {/* =========================================================================
                06 CONVERSION CTA
               ========================================================================= */}
            <ConversionCTA
                eyebrow="Commission Your Project"
                headline="Let's build what's next."
                description="Ready to elevate your brand identity, user interface, or digital engineering platform?"
            />
        </>
    );
}
