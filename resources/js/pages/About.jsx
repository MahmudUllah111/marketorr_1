import { Head, Link } from '@inertiajs/react';
import { SectionLabel, Tag } from '../components/ui/primitives';
import RevealText from '../components/motion/RevealText';
import ConversionCTA from '../components/sections/ConversionCTA';
import { COMPANY } from '../data/company';
import { PROJECTS } from '../data/projects';

export default function About() {
    const disciplineRoles = [
        {
            num: '01',
            title: 'Branding & Identity',
            desc: 'Commercial positioning, audience research, and brand narrative resolved into a visual identity system — monograms, typographic hierarchy, colour, and packaging architecture.',
            href: '/services/branding',
            accent: '#891FFB',
        },
        {
            num: '02',
            title: 'UI/UX Design',
            desc: 'Information architecture, responsive web products, mobile applications, design systems, and prototypes built from the positioning rather than alongside it.',
            href: '/services/ui-ux',
            accent: '#507AF4',
        },
        {
            num: '03',
            title: 'Development',
            desc: 'Modern full-stack engineering on production Laravel and React platforms, carrying the same identity and interface decisions through to shipped code.',
            href: '/services/development',
            accent: '#1BE2EB',
        },
    ];

    const principles = [
        {
            title: 'CLARITY',
            summary: 'Eliminate ambiguity. We strip away superficial decoration to build identities and interfaces that communicate purpose immediately.',
            accent: '#891FFB',
        },
        {
            title: 'CRAFT',
            summary: 'Obsessive attention to geometry, typographic balance, responsive breakpoints, and code standards. Good enough is never the goal.',
            accent: '#507AF4',
        },
        {
            title: 'INTUITION',
            summary: 'Digital experiences should feel natural on the first visit. We reduce cognitive friction so users navigate effortlessly.',
            accent: '#1BE2EB',
        },
        {
            title: 'PERFORMANCE',
            summary: 'Aesthetic excellence backed by technical velocity. Clean architectures, fast load times, and rock-solid production stability.',
            accent: '#891FFB',
        },
    ];

    const proofs = PROJECTS.slice(0, 3);

    return (
        <>
            <Head title="About — Marketorr" />

            {/* 01 Hero Section */}
            <section className="bg-[var(--bg)] pt-12 pb-20 sm:pt-16 sm:pb-28">
                <div className="container-x">
                    <SectionLabel index="01" name="ABOUT MARKETORR" />

                    <div className="mt-8 max-w-5xl">
                        <RevealText
                            as="h1"
                            className="display-xl uppercase text-[var(--ink-strong)]"
                            lines={['Small team.', 'Serious craft.']}
                        />
                        <p className="mt-6 font-serif text-2xl italic text-[var(--ink-faint)] sm:text-3xl">
                            An independent creative &amp; digital agency from Bangladesh working with ambitious brands.
                        </p>
                        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[var(--mute)] sm:text-xl">
                            Marketorr unites strategic brand identity, digital product design, and modern full-stack web engineering under one roof. We work directly with visionary founders and established companies to turn attention into long-term commercial equity.
                        </p>
                    </div>

                    {/* Studio Snapshot Grid */}
                    <div className="mt-16 grid grid-cols-2 gap-6 border-y border-[var(--line)] py-10 sm:grid-cols-4">
                        <div>
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">Agency Model</p>
                            <p className="mt-2 font-display text-base font-extrabold uppercase text-[var(--ink-strong)] sm:text-lg">Independent Studio</p>
                        </div>
                        <div>
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">Location</p>
                            <p className="mt-2 font-display text-base font-extrabold uppercase text-[var(--ink-strong)] sm:text-lg">Dhaka, Bangladesh · Global</p>
                        </div>
                        <div>
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">Core Philosophy</p>
                            <p className="mt-2 font-display text-base font-extrabold text-gradient sm:text-lg">Idea → Experience → Result</p>
                        </div>
                        <div>
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">Engagement</p>
                            <p className="mt-2 font-display text-base font-extrabold uppercase text-[var(--ink-strong)] sm:text-lg">Direct Senior Access</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 02 How the three disciplines connect — asymmetric statement + ruled entries */}
            <section className="bg-[var(--surface)] py-24 sm:py-32 border-t border-[var(--line)]">
                <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
                    <div className="lg:col-span-5">
                        <div className="lg:sticky lg:top-[140px]">
                            <SectionLabel index="02" name="CORE DISCIPLINES" />
                            <h2 className="display-lg mt-6 uppercase text-[var(--ink-strong)]">
                                Three disciplines. <span className="text-gradient">One team.</span>
                            </h2>
                            <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--mute)]">
                                We don't separate design from engineering. The same people carry a project from positioning through interface design into production code, so nothing is lost in a handover between agencies.
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        {disciplineRoles.map((d) => (
                            <Link
                                key={d.title}
                                href={d.href}
                                data-cursor="explore"
                                className="group block border-t border-[var(--line)] py-10 last:border-b last:border-[var(--line)] transition-colors duration-300 hover:bg-[var(--bg)] px-2 sm:px-4 -mx-2 sm:-mx-4 rounded-xl"
                            >
                                <div className="flex items-baseline gap-5">
                                    <span
                                        className="font-display text-sm font-extrabold tabular-nums tracking-[0.1em]"
                                        style={{ color: d.accent }}
                                    >
                                        {d.num}
                                    </span>
                                    <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight text-[var(--ink-strong)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:text-3xl lg:group-hover:translate-x-1.5">
                                        {d.title}
                                    </h3>
                                    <span
                                        aria-hidden
                                        className="ml-auto text-[var(--ink-faint)] transition-all duration-300 group-hover:text-[var(--ink)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    >
                                        ↗
                                    </span>
                                </div>
                                <p className="mt-4 max-w-xl pl-0 text-sm leading-relaxed text-[var(--mute)] sm:pl-10 sm:text-base">
                                    {d.desc}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 03 Principles — oversized numbered entries, deliberately unlike the section above */}
            <section className="bg-[var(--bg)] py-24 sm:py-32 border-t border-[var(--line)]">
                <div className="container-x">
                    <div className="max-w-2xl">
                        <SectionLabel index="03" name="FOUNDATIONAL PRINCIPLES" />
                        <h2 className="display-lg mt-6 uppercase text-[var(--ink-strong)]">
                            How we think &amp; build.
                        </h2>
                        <p className="mt-4 text-base text-[var(--mute)]">
                            Four uncompromised standards that govern every brand identity, digital interface, and production code deployment.
                        </p>
                    </div>

                    <div className="mt-16 grid gap-x-16 gap-y-14 sm:grid-cols-2">
                        {principles.map((pr, i) => (
                            <div key={pr.title} className="group flex flex-col justify-between">
                                <div>
                                    <span
                                        className="font-display text-4xl sm:text-5xl font-extrabold leading-none tabular-nums opacity-30 block"
                                        style={{ color: pr.accent }}
                                        aria-hidden
                                    >
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <h3 className="mt-3 font-display text-2xl font-extrabold uppercase tracking-tight text-[var(--ink-strong)] sm:text-3xl">
                                        {pr.title}
                                    </h3>
                                    <div className="mt-4 h-[2px] w-10" style={{ background: pr.accent }} aria-hidden />
                                    <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--mute)] sm:text-base">
                                        {pr.summary}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 04 Proof of Craft */}
            <section className="bg-[var(--surface)] py-24 sm:py-32 border-t border-[var(--line)]">
                <div className="container-x">
                    <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
                        <div>
                            <SectionLabel index="04" name="VERIFIED WORK" />
                            <h2 className="display-lg mt-4 uppercase text-[var(--ink-strong)]">
                                Proof of craft.
                            </h2>
                        </div>
                        <Link
                            href="/work"
                            className="btn-press group inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.16em] text-[var(--ink)] hover:text-gradient"
                        >
                            All Case Studies <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                        </Link>
                    </div>

                    <div className="mt-14 grid gap-8 md:grid-cols-3">
                        {proofs.map((p) => (
                            <Link
                                key={p.slug}
                                href={`/work/${p.slug}`}
                                data-cursor="view"
                                className="group btn-press block overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--bg)] transition-all duration-300 hover:border-black/30 dark:hover:border-white/30 hover:shadow-xl"
                            >
                                <div className="relative aspect-[16/10] overflow-hidden bg-black" data-cursor-theme="light">
                                    <img
                                        src={p.heroImage}
                                        alt={`${p.title} — ${p.client}`}
                                        className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                                        loading="lazy"
                                    />
                                    <div className="absolute left-4 top-4">
                                        <span className="rounded-full bg-black/70 px-3 py-1 font-display text-[9px] font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur-md">
                                            {p.year}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                                        {p.client}
                                    </p>
                                    <h3 className="mt-2 font-display text-xl font-extrabold uppercase text-[var(--ink-strong)]">
                                        {p.title}
                                    </h3>
                                    <p className="mt-2 text-xs leading-relaxed text-[var(--mute)]">
                                        {p.summary}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Single Conversion CTA */}
            <ConversionCTA
                eyebrow="Start a Dialogue"
                description="Share your brand vision, digital product goals, or web engineering scope with our studio team."
            />
        </>
    );
}
