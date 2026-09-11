import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { router, usePage } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';

function scrollAfterNav() {
    if (window.location.hash) {
        const el = document.querySelector(window.location.hash);
        if (el) {
            if (window.__lenis) window.__lenis.scrollTo(el, { offset: -72, immediate: true });
            else el.scrollIntoView();
            return;
        }
    }
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
}

export default function PageTransition({ children }) {
    const { url } = usePage();
    const [isNavigating, setIsNavigating] = useState(false);
    const [navProgress, setNavProgress] = useState(0);
    const reduceMotion = useReducedMotion();
    const progressTimer = useRef(null);

    useEffect(() => {
        const offStart = router.on('start', (event) => {
            if (event.detail.visit.method !== 'get') return;
            setIsNavigating(true);
            setNavProgress(25);
            if (progressTimer.current) clearInterval(progressTimer.current);
            progressTimer.current = setInterval(() => {
                setNavProgress((p) => (p < 85 ? p + Math.random() * 15 : p));
            }, 120);
        });

        const offProgress = router.on('progress', (event) => {
            if (event.detail.progress?.percentage) {
                setNavProgress(Math.max(30, event.detail.progress.percentage * 0.9));
            }
        });

        const offFinish = router.on('finish', () => {
            if (progressTimer.current) clearInterval(progressTimer.current);
            setNavProgress(100);
            scrollAfterNav();
            setTimeout(() => {
                setIsNavigating(false);
                setNavProgress(0);
            }, 300);
        });

        const onCustomTrigger = () => {
            setIsNavigating(true);
            setNavProgress(50);
            setTimeout(() => {
                setNavProgress(100);
                scrollAfterNav();
                setTimeout(() => {
                    setIsNavigating(false);
                    setNavProgress(0);
                }, 250);
            }, 250);
        };
        window.addEventListener('marketorr:preloader', onCustomTrigger);

        return () => {
            offStart();
            offProgress();
            offFinish();
            window.removeEventListener('marketorr:preloader', onCustomTrigger);
            if (progressTimer.current) clearInterval(progressTimer.current);
        };
    }, []);

    // Clean page animation matching guidelines:
    // New page: opacity 0 -> 1, translateY 16px -> 0
    // Transition approximately 450ms, ease: [0.22, 1, 0.36, 1]
    const pageVariants = reduceMotion
        ? {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
          }
        : {
              initial: { opacity: 0, y: 16 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -8 },
          };

    return (
        <>
            {/* Ultra-thin purple → cyan transition line across the top during route changes */}
            <div
                className={`fixed top-0 left-0 right-0 z-[1200] h-[3px] pointer-events-none transition-opacity duration-200 ${
                    isNavigating ? 'opacity-100' : 'opacity-0'
                }`}
                aria-hidden
            >
                <div
                    className="h-full transition-all duration-200 ease-out"
                    style={{
                        width: `${navProgress}%`,
                        background: 'linear-gradient(90deg, #891FFB 0%, #507AF4 50%, #1BE2EB 100%)',
                        boxShadow: '0 0 10px rgba(80, 122, 244, 0.7)',
                    }}
                />
            </div>

            {/* Main Page Transition Container */}
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={url}
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="w-full flex-1"
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </>
    );
}
