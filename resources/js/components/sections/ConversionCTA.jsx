import { Link } from '@inertiajs/react';
import MagneticButton from '../motion/MagneticButton';
import { CONTACT } from '../../data/contact';

/**
 * The single closing conversion block. `headline` carries the plain opening
 * words and `accent` the gradient-highlighted tail, so pages can set their own
 * copy without the component guessing at where the highlight belongs.
 */
export default function ConversionCTA({
    eyebrow = 'Next Engagement',
    headline = "Let's build",
    accent = "what's next.",
    description = 'Available for select branding, product UI/UX and web engineering projects.',
}) {
    return (
        <>
            <section className="final-cta relative overflow-hidden bg-[#0d0f12] pt-20 pb-20 sm:pt-24 sm:pb-24 lg:pt-32 lg:pb-32 text-white" data-cursor-theme="light">
                {/* Top subtle brand gradient line */}
                <div
                    className="absolute inset-x-0 top-0 h-[2px]"
                    aria-hidden
                    style={{ background: 'linear-gradient(90deg,#891FFB,#507AF4,#1BE2EB)' }}
                />

                <div className="container-x relative z-10 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
                    <div className="max-w-2xl">
                        <p className="font-display text-[11px] font-bold uppercase tracking-[0.24em] text-[#1be2eb]">
                            {eyebrow}
                        </p>
                        <h2 className="mt-4 font-display text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
                            {headline}
                            {accent && (
                                <>
                                    {' '}
                                    <br className="hidden sm:inline" />
                                    <span className="text-gradient">{accent}</span>
                                </>
                            )}
                        </h2>
                        <p className="mt-4 font-serif text-lg italic text-zinc-400 sm:text-xl">
                            {description}
                        </p>
                    </div>

                    <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center">
                        <MagneticButton strength={15}>
                            <Link
                                href="/contact"
                                data-cursor="cta"
                                className="btn-press inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-[13px] font-bold uppercase tracking-[0.16em] text-white shadow-xl sm:w-auto"
                                style={{ background: 'linear-gradient(90deg,#891FFB,#507AF4,#1BE2EB)' }}
                            >
                                Start a project <span aria-hidden>↗</span>
                            </Link>
                        </MagneticButton>
                        <a
                            href={`mailto:${CONTACT.email}`}
                            className="btn-press inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-[13px] font-bold uppercase tracking-[0.16em] text-white hover:bg-white/10 sm:w-auto"
                        >
                            {CONTACT.email.toUpperCase()}
                        </a>
                    </div>
                </div>
            </section>

            {/* Dedicated clean page background gap separating dark Final CTA from dark Footer:
                Generous whitespace ensures Final CTA and Footer are never perceived as one combined block */}
            <div className="h-16 sm:h-24 lg:h-32 w-full border-t border-[var(--line)] bg-[var(--bg)]" aria-hidden />
        </>
    );
}
