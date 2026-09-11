import { Link, usePage } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import MagneticButton from '../motion/MagneticButton';
import ThemeToggle from './ThemeToggle';
import { PRIMARY_NAV } from '../../data/navigation';

const LINKS = PRIMARY_NAV;

function Logo({ url }) {
    const inner = (
        <>
            <span className="flex h-9 items-end gap-[4px]" aria-hidden>
                <span className="h-5 w-[7px] rounded-[2px] bg-[#891FFB] transition-[height] duration-200 group-hover:h-9" />
                <span className="h-7 w-[7px] rounded-[2px] bg-[#507AF4] transition-[height] duration-200 group-hover:h-9" />
                <span className="h-9 w-[7px] rounded-[2px] bg-[#1BE2EB] transition-[height] duration-200 group-hover:h-9" />
            </span>
            <span className="font-display text-[19px] font-extrabold tracking-tight text-[var(--ink)]">
                MARKETORR<span className="text-gradient">.</span>
            </span>
        </>
    );
    const cls = 'btn-press group flex items-center gap-3';
    return (
        <Link
            href="/"
            onClick={() => {
                if (url === '/') {
                    window.dispatchEvent(new CustomEvent('marketorr:preloader'));
                }
            }}
            className={cls}
            aria-label="Marketorr home"
        >
            {inner}
        </Link>
    );
}

const SERVICES_MENU = [
    {
        label: 'Branding & Identity',
        href: '/services/branding',
        desc: 'Brand Strategy, Logo Systems & Packaging',
        accent: '#891FFB',
    },
    {
        label: 'UI/UX Design',
        href: '/services/ui-ux',
        desc: 'Web, Mobile & SaaS Experience Architecture',
        accent: '#507AF4',
    },
    {
        label: 'Development',
        href: '/services/development',
        desc: 'Modern Web Engineering & Full-Stack Platforms',
        accent: '#1BE2EB',
    },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [servicesDropdown, setServicesDropdown] = useState(false);
    const dropdownTimer = useRef(null);
    const reduce = useReducedMotion();
    const { url } = usePage();

    useEffect(() => {
        if (!open) return undefined;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.__lenis?.stop();

        return () => {
            document.body.style.overflow = previousOverflow;
            window.__lenis?.start();
        };
    }, [open]);

    useEffect(() => {
        setOpen(false);
        setServicesDropdown(false);
    }, [url]);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 36);
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleMouseEnter = () => {
        if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
        setServicesDropdown(true);
    };

    const handleMouseLeave = () => {
        dropdownTimer.current = setTimeout(() => {
            setServicesDropdown(false);
        }, 180);
    };

    return (
        <header
            data-cursor-theme="dark"
            className={`fixed inset-x-0 top-0 z-[1000] transition-all duration-300 ease-out ${
                scrolled && !open
                    ? 'border-b border-[var(--header-border-scrolled)] bg-[var(--header-bg-scrolled)] shadow-[var(--header-shadow-scrolled)] backdrop-blur-[14px]'
                    : 'border-b border-[var(--line-soft)] bg-[var(--header-bg)] backdrop-blur-[14px]'
            }`}
        >
            <div
                className={`container-x flex items-center justify-between transition-[height] duration-300 ease-out ${
                    scrolled ? 'h-[64px] lg:h-[78px]' : 'h-[72px] lg:h-[88px]'
                }`}
            >
                <Logo url={url} />
                <nav className="hidden items-center gap-3.5 xl:gap-6 2xl:gap-8 lg:flex" aria-label="Primary">
                    {LINKS.map((l) => {
                        const isServices = l.label === 'Services';
                        const active =
                            url === l.href ||
                            (l.href !== '/' && url.startsWith(l.href)) ||
                            (isServices && url.startsWith('/services'));

                        if (isServices) {
                            return (
                                <div
                                    key={l.href}
                                    className="relative py-2"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    onFocus={handleMouseEnter}
                                    onBlur={(e) => {
                                        if (!e.currentTarget.contains(e.relatedTarget)) {
                                            setServicesDropdown(false);
                                        }
                                    }}
                                >
                                    <Link
                                        href="/services"
                                        onClick={() => {
                                            if (url === '/services') {
                                                window.dispatchEvent(new CustomEvent('marketorr:preloader'));
                                            }
                                        }}
                                        className={`link-underline btn-press group relative flex items-center gap-1.5 py-1 text-[11px] xl:text-[13px] font-bold uppercase tracking-[0.12em] xl:tracking-[0.18em] ${
                                            active ? 'text-[var(--ink)]' : 'text-[var(--ink-faint)] hover:text-[var(--ink)]'
                                        }`}
                                    >
                                        <span className="relative block overflow-hidden">
                                            <span className={`block transition-transform duration-200 group-hover:-translate-y-full ${active ? '-translate-y-full' : ''}`}>
                                                {l.label}
                                            </span>
                                            <span
                                                aria-hidden
                                                className={`absolute inset-0 block text-gradient transition-transform duration-200 ${
                                                    active ? 'translate-y-0' : 'translate-y-full group-hover:translate-y-0'
                                                }`}
                                            >
                                                {l.label}
                                            </span>
                                        </span>
                                        <span className={`text-[10px] transition-transform duration-200 ${servicesDropdown ? 'rotate-180' : ''}`}>
                                            ▾
                                        </span>
                                    </Link>

                                    {/* Services Dropdown */}
                                    <AnimatePresence>
                                        {servicesDropdown && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                                                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                                                className="absolute left-1/2 top-full -translate-x-1/2 pt-2 w-[340px]"
                                            >
                                                <div className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface-dropdown,var(--surface))] p-3 shadow-2xl backdrop-blur-xl">
                                                    <div className="space-y-1">
                                                        {SERVICES_MENU.map((sm) => (
                                                            <Link
                                                                key={sm.href}
                                                                href={sm.href}
                                                                onClick={() => {
                                                                    setServicesDropdown(false);
                                                                    if (url === sm.href) {
                                                                        window.dispatchEvent(new CustomEvent('marketorr:preloader'));
                                                                    }
                                                                }}
                                                                className={`group/item flex flex-col rounded-xl p-3 transition-colors ${
                                                                    url === sm.href
                                                                        ? 'bg-[var(--surface-2)] text-[var(--ink)]'
                                                                        : 'hover:bg-[var(--surface-2)]'
                                                                }`}
                                                            >
                                                                <div className="flex items-center justify-between">
                                                                    <span className={`font-display text-[13px] font-bold uppercase tracking-wider ${
                                                                        url === sm.href ? 'text-gradient' : 'text-[var(--ink)] group-hover/item:text-gradient'
                                                                    }`}>
                                                                        {sm.label}
                                                                    </span>
                                                                    <span className="text-xs text-[var(--ink-faint)] transition-transform duration-200 group-hover/item:translate-x-1">
                                                                        ↗
                                                                    </span>
                                                                </div>
                                                                <span className="mt-1 text-[11px] text-[var(--mute)]">
                                                                    {sm.desc}
                                                                </span>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                    <div className="mt-2 border-t border-[var(--line-soft)] pt-2">
                                                        <Link
                                                            href="/services"
                                                            onClick={() => setServicesDropdown(false)}
                                                            className="flex items-center justify-between rounded-xl px-3 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--ink-faint)] hover:bg-[var(--surface-2)] hover:text-[var(--ink)]"
                                                        >
                                                            <span>View All Services</span>
                                                            <span>→</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        }

                        return (
                            <Link
                                key={l.href}
                                href={l.href}
                                onClick={() => {
                                    if (url === l.href) {
                                        window.dispatchEvent(new CustomEvent('marketorr:preloader'));
                                    }
                                }}
                                className={`link-underline btn-press group relative py-2 text-[11px] xl:text-[13px] font-bold uppercase tracking-[0.12em] xl:tracking-[0.18em] ${
                                    active ? 'text-[var(--ink)]' : 'text-[var(--ink-faint)] hover:text-[var(--ink)]'
                                }`}
                            >
                                <span className="relative block overflow-hidden">
                                    <span className={`block transition-transform duration-200 group-hover:-translate-y-full ${active ? '-translate-y-full' : ''}`}>
                                        {l.label}
                                    </span>
                                    <span
                                        aria-hidden
                                        className={`absolute inset-0 block text-gradient transition-transform duration-200 ${
                                            active ? 'translate-y-0' : 'translate-y-full group-hover:translate-y-0'
                                        }`}
                                    >
                                        {l.label}
                                    </span>
                                </span>
                            </Link>
                        );
                    })}
                    <div className="hidden xl:block">
                        <ThemeToggle />
                    </div>
                    <div className="block xl:hidden">
                        <ThemeToggle compact />
                    </div>
                    <MagneticButton>
                        <Link
                            href="/contact"
                            onClick={() => {
                                if (url === '/contact') {
                                    window.dispatchEvent(new CustomEvent('marketorr:preloader'));
                                }
                            }}
                            data-cursor="cta"
                            className="btn-press inline-flex items-center gap-1.5 xl:gap-2 rounded-full px-4 py-2.5 xl:px-6 xl:py-3 text-[11px] xl:text-[12px] font-bold uppercase tracking-[0.14em] xl:tracking-[0.16em] text-white whitespace-nowrap"
                            style={{ background: 'linear-gradient(90deg,#891FFB,#507AF4,#1BE2EB)' }}
                        >
                            Start a Project <span aria-hidden>↗</span>
                        </Link>
                    </MagneticButton>
                </nav>
                <div className="flex items-center gap-3 lg:hidden">
                    <ThemeToggle compact />
                    <button
                        className="btn-press flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)]"
                        onClick={() => setOpen((v) => !v)}
                        aria-expanded={open}
                        aria-label="Toggle menu"
                    >
                        <span className="relative block h-3 w-5">
                            <span className={`absolute left-0 top-0 h-[2px] w-full bg-[var(--ink)] transition-transform duration-300 ${open ? 'translate-y-[5px] rotate-45' : ''}`} />
                            <span className={`absolute bottom-0 left-0 h-[2px] w-full bg-[var(--ink)] transition-transform duration-300 ${open ? '-translate-y-[5px] -rotate-45' : ''}`} />
                        </span>
                    </button>
                </div>
            </div>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.nav
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                        className="max-h-[calc(100svh-72px)] overflow-y-auto border-t border-[var(--line)] bg-[var(--surface)] shadow-2xl backdrop-blur-xl lg:hidden"
                        aria-label="Mobile"
                    >
                        <div className="px-5 pb-8 pt-4">
                            {LINKS.map((l, i) => {
                                const isServices = l.label === 'Services';
                                const active =
                                    url === l.href ||
                                    (l.href !== '/' && url.startsWith(l.href)) ||
                                    (isServices && url.startsWith('/services'));

                                return (
                                    <div key={l.href} className="border-b border-[var(--line-soft)] py-3">
                                        <Link
                                            href={l.href}
                                            onClick={() => {
                                                setOpen(false);
                                                if (url === l.href) {
                                                    window.dispatchEvent(new CustomEvent('marketorr:preloader'));
                                                }
                                            }}
                                            className={`flex items-center justify-between py-1.5 font-display text-2xl font-bold ${
                                                active ? 'text-gradient' : 'text-[var(--ink)]'
                                            }`}
                                        >
                                            {l.label}
                                            <span className="text-sm text-[var(--ink-faint)]">0{i + 1}</span>
                                        </Link>

                                        {isServices && (
                                            <div className="mt-2 ml-4 flex flex-col gap-2 border-l-2 border-[var(--line)] pl-3">
                                                {SERVICES_MENU.map((sm) => (
                                                    <Link
                                                        key={sm.href}
                                                        href={sm.href}
                                                        onClick={() => setOpen(false)}
                                                        className="text-sm font-semibold text-[var(--ink-faint)] hover:text-[var(--ink)]"
                                                    >
                                                        {sm.label} ↗
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                            <Link
                                href="/contact"
                                onClick={() => {
                                    setOpen(false);
                                    if (url === '/contact') {
                                        window.dispatchEvent(new CustomEvent('marketorr:preloader'));
                                    }
                                }}
                                className="mt-5 flex items-center justify-center gap-2 rounded-full py-4 text-sm font-bold uppercase tracking-[0.16em] text-white"
                                style={{ background: 'linear-gradient(90deg,#891FFB,#507AF4,#1BE2EB)' }}
                            >
                                Start a Project ↗
                            </Link>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
