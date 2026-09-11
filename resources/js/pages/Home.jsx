import { Head } from '@inertiajs/react';
import Hero from '../components/sections/Hero';
import AboutPreview from '../components/sections/AboutPreview';
import ServicesPreview from '../components/sections/ServicesPreview';
import FeaturedWorkPreview from '../components/sections/FeaturedWorkPreview';
import CinematicScroll from '../components/sections/CinematicScroll';
import ProcessPreview from '../components/sections/ProcessPreview';
import ConversionCTA from '../components/sections/ConversionCTA';

// Small capability / discipline marquee strip
function CapabilityMarquee() {
    const items = [
        'BRAND STRATEGY',
        'VISUAL IDENTITY',
        'UI/UX DESIGN',
        'DESIGN SYSTEMS',
        'WEB ENGINEERING',
        'PRODUCT PLATFORMS',
        'PACKAGING SYSTEMS',
        'ACCESSIBILITY & SPEED',
    ];

    return (
        <div className="relative overflow-hidden border-y border-[var(--line)] bg-[var(--surface-2)] py-3.5" aria-hidden>
            <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
                {[0, 1].map((half) => (
                    <div key={half} className="flex items-center gap-8">
                        {items.map((t) => (
                            <span key={`${half}-${t}`} className="flex items-center gap-8 font-display text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--ink-faint)]">
                                {t}
                                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Home() {
    return (
        <>
            <Head title="Marketorr — We Turn Attention Into Results" />
            
            {/* 01: Hero + Layered Real Project Desk Composition */}
            <Hero />

            {/* 02: Subtle Capability Marquee */}
            <CapabilityMarquee />

            {/* 03: About Preview / Studio Statement */}
            <AboutPreview />

            {/* 04: Three Connected Services Preview */}
            <ServicesPreview />

            {/* 05: Featured & Supporting Client Work */}
            <FeaturedWorkPreview />

            {/* 06: Signature Cinematic IDEA → EXPERIENCE → RESULT Section (Dark) */}
            <CinematicScroll />

            {/* 07: 5-Stage Process Preview */}
            <ProcessPreview />

            {/* 08: Final Conversion Chapter */}
            <ConversionCTA />
        </>
    );
}
