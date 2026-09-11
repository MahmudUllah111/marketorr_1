import { Link } from '@inertiajs/react';
import { SOCIAL_LINKS, FOOTER_NAV } from '../../data/navigation';
import { COMPANY } from '../../data/company';

export default function Footer() {
    const year = new Date().getFullYear();
    const verifiedSocials = SOCIAL_LINKS.filter((s) => s.status === 'verified');

    return (
        <footer className="relative bg-[#060709] text-white" data-cursor-theme="light">
            {/* Top Accent Gradient Border */}
            <div className="h-[2px] w-full" aria-hidden style={{ background: 'linear-gradient(90deg,#891FFB,#507AF4,#1BE2EB)' }} />

            {/* Dark Structured Footer */}
            <div className="container-x grid gap-12 py-14 sm:py-16 lg:py-20 sm:grid-cols-2 lg:grid-cols-12">
                {/* Brand & Purpose */}
                <div className="lg:col-span-5">
                    <div className="flex items-center gap-3">
                        <span className="flex h-8 items-end gap-[4px]" aria-hidden>
                            <span className="h-4 w-[6px] rounded-[2px] bg-[#891FFB]" />
                            <span className="h-6 w-[6px] rounded-[2px] bg-[#507AF4]" />
                            <span className="h-8 w-[6px] rounded-[2px] bg-[#1BE2EB]" />
                        </span>
                        <span className="font-display text-lg font-extrabold text-white">MARKETORR.</span>
                    </div>
                    <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
                        {COMPANY.proposition}
                    </p>
                    <div className="mt-6">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                            Contact
                        </p>
                        <p className="mt-1 text-sm font-semibold text-zinc-300">
                            {COMPANY.contact.email} · {COMPANY.contact.phone}
                        </p>
                    </div>
                </div>

                {/* Explore Navigation */}
                <nav className="lg:col-span-3" aria-label="Footer Navigation">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                        Explore
                    </p>
                    <div className="mt-4 flex flex-col gap-2.5 text-sm font-semibold text-zinc-300">
                        {FOOTER_NAV.sitemap.map((s) => (
                            <Link key={s.label} href={s.href} className="btn-press w-fit hover:text-white transition-colors">
                                {s.label}
                            </Link>
                        ))}
                        <Link href="/work" className="btn-press w-fit hover:text-white transition-colors">
                            All Case Studies
                        </Link>
                    </div>
                </nav>

                {/* Services */}
                <div className="lg:col-span-2">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                        Services
                    </p>
                    <div className="mt-4 flex flex-col gap-2.5 text-sm font-semibold text-zinc-300">
                        {FOOTER_NAV.services.map((s) => (
                            <Link key={s.label} href={s.href} className="btn-press w-fit hover:text-white transition-colors">
                                {s.label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Connect */}
                <div className="lg:col-span-2">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                        Connect
                    </p>
                    <div className="mt-4 flex flex-col gap-2.5 text-sm font-semibold text-zinc-300">
                        {verifiedSocials.map((s) => (
                            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="link-underline btn-press w-fit hover:text-white transition-colors">
                                {s.label} ↗
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Copyright & Closing Motif */}
            <div className="border-t border-white/10">
                <div className="container-x flex flex-col gap-3 py-6 text-[11px] text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
                    <span>© {year} Marketorr. All rights reserved.</span>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy" className="btn-press hover:text-white transition-colors">Privacy</Link>
                        <Link href="/terms" className="btn-press hover:text-white transition-colors">Terms</Link>
                        <span className="font-display font-bold tracking-wider text-gradient">
                            IDEA → EXPERIENCE → RESULT
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
