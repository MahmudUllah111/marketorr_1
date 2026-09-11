import { SectionLabel } from '../ui/primitives';
import RevealText from '../motion/RevealText';
import { BRANDING_PROCESS } from '../../data/services';

export default function ProcessSection() {
    return (
        <section id="process" className="relative overflow-hidden bg-[var(--bg-soft)] section-pad border-t border-[var(--line)]">
            <div className="container-x relative">
                <SectionLabel index="03" name="DELIVERY FRAMEWORK" />
                <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <RevealText
                            as="h2"
                            className="display-lg uppercase text-[var(--ink-strong)]"
                            lines={['Five-Stage', 'Creative Process']}
                        />
                        <p className="mt-2 font-serif text-xl italic text-[var(--ink-faint)]">
                            Rigorous craft from initial discovery to lasting brand standards.
                        </p>
                    </div>
                    <p className="max-w-md text-[15px] leading-relaxed text-[var(--mute)]">
                        Every brand and digital engagement moves through a structured five-stage framework designed to eliminate ambiguity, align stakeholders, and guarantee excellence.
                    </p>
                </div>

                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                    {BRANDING_PROCESS.map((p, idx) => {
                        const accents = ['#891FFB', '#891FFB', '#507AF4', '#507AF4', '#1BE2EB'];
                        const accent = accents[idx] || '#891FFB';
                        return (
                            <div
                                key={p.step}
                                className="group rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 transition-all duration-300 hover:border-black/20 dark:hover:border-white/20 hover:shadow-lg"
                            >
                                <span className="font-display text-3xl font-extrabold" style={{ color: accent }}>
                                    {p.step}
                                </span>
                                <h3 className="mt-3 font-display text-lg font-bold uppercase text-[var(--ink-strong)]">
                                    {p.name}
                                </h3>
                                <p className="mt-2 text-xs leading-relaxed text-[var(--mute)]">
                                    {p.summary}
                                </p>
                                <div className="mt-5 border-t border-[var(--line-soft)] pt-3">
                                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                                        Outputs
                                    </p>
                                    <p className="mt-1 text-[11px] font-medium text-[var(--ink)]">
                                        {p.deliverables[0]}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
