import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';
import { useTheme } from '../../lib/theme';

export default function CustomCursor() {
    const reduce = useReducedMotion();
    const { theme } = useTheme();
    const [enabled, setEnabled] = useState(false);
    const [cursorTheme, setCursorTheme] = useState('dark'); // 'dark' = dark cursor (on light bg), 'light' = white cursor (on dark bg)
    const [isInteractive, setIsInteractive] = useState(false);
    const [isDown, setIsDown] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const x = useMotionValue(-100);
    const y = useMotionValue(-100);

    // Spring for outer ring gives fluid, restrained follow lag
    const rx = useSpring(x, { stiffness: 520, damping: 38, mass: 0.45 });
    const ry = useSpring(y, { stiffness: 520, damping: 38, mass: 0.45 });

    // Enable only for desktop with fine pointer (mouse / trackpad)
    useEffect(() => {
        const fine = window.matchMedia('(min-width: 1024px) and (pointer: fine)').matches;
        const touch = window.matchMedia('(pointer: coarse)').matches;
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (!fine || touch || reduced || reduce) {
            setEnabled(false);
            return;
        }

        setEnabled(true);
        document.documentElement.classList.add('cursor-none-desktop');

        return () => {
            document.documentElement.classList.remove('cursor-none-desktop');
        };
    }, [reduce]);

    // Inspect target element to adapt cursor theme and interactive state
    const evaluateTarget = useCallback((target, clientY) => {
        if (!target) return;

        // 1. Fixed Navbar Priority Check
        // The navbar is white/light and fixed to the top of the viewport.
        // It must ALWAYS enforce a dark/black cursor, overriding any background section.
        let isInsideNavbar = false;
        if (target instanceof Element) {
            isInsideNavbar = Boolean(target.closest?.('header, [data-cursor-theme="dark"]'));
        }
        if (!isInsideNavbar && typeof clientY === 'number') {
            const headerEl = document.querySelector('header');
            if (headerEl) {
                const rect = headerEl.getBoundingClientRect();
                if (clientY >= 0 && clientY <= rect.bottom) {
                    isInsideNavbar = true;
                }
            }
        }

        let isLightCursor = false;

        if (isInsideNavbar) {
            // Unconditionally dark/black cursor for light navbar
            isLightCursor = false;
        } else if (target instanceof Element) {
            // Check for explicit data-cursor-theme attribute on target or ancestor
            const themedContainer = target.closest?.('[data-cursor-theme]');
            if (themedContainer) {
                isLightCursor = themedContainer.getAttribute('data-cursor-theme') === 'light';
            } else {
                // Reliable fallback for dark components/sections
                const darkAncestor = target.closest?.(
                    '.final-cta, footer, #narrative, [data-dark-section], [data-cursor-invert], [data-cursor-dark]'
                );
                if (darkAncestor) {
                    isLightCursor = true;
                } else if (theme === 'dark') {
                    isLightCursor = true;
                }
            }
        }

        setCursorTheme(isLightCursor ? 'light' : 'dark');

        // 2. Interactive State Detection
        let interactive = false;
        if (target instanceof Element) {
            interactive = Boolean(
                target.closest?.(
                    'a, button, [role="button"], input, textarea, select, label, ' +
                    '[data-cursor], [data-cursor-interactive], .btn-press, .cursor-pointer'
                )
            );
        }
        setIsInteractive(interactive);
    }, [theme]);

    useEffect(() => {
        if (!enabled) return;

        const handleMouseMove = (e) => {
            x.set(e.clientX);
            y.set(e.clientY);
            setIsVisible(true);
            evaluateTarget(e.target, e.clientY);
        };

        const handleMouseDown = () => setIsDown(true);
        const handleMouseUp = () => setIsDown(false);

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        const handleMouseEnter = () => {
            setIsVisible(true);
        };

        const handleScroll = () => {
            const curX = x.get();
            const curY = y.get();
            const el = document.elementFromPoint(curX, curY);
            evaluateTarget(el, curY);
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [enabled, x, y, evaluateTarget]);

    if (!enabled || reduce) return null;

    const isLight = cursorTheme === 'light'; // Light/white cursor on dark sections
    const ringSize = isInteractive ? 42 : 26;

    return (
        <>
            {/* Center Precision Dot (Tracks instant mouse coordinates with 0 lag) */}
            <motion.div
                className="pointer-events-none fixed left-0 top-0 z-[100000] rounded-full"
                style={{
                    x,
                    y,
                    translateX: '-50%',
                    translateY: '-50%',
                    width: 5,
                    height: 5,
                    pointerEvents: 'none',
                    zIndex: 100000,
                }}
                animate={{
                    opacity: isVisible ? 1 : 0,
                    backgroundColor: isLight ? '#ffffff' : '#0d0f12',
                    boxShadow: isLight
                        ? '0 0 6px rgba(255, 255, 255, 0.65), 0 0 1px rgba(0, 0, 0, 0.4)'
                        : '0 0 0 1px rgba(255, 255, 255, 0.35)',
                    scale: isDown ? 0.75 : (isInteractive ? 1.15 : 1),
                }}
                transition={{
                    opacity: { duration: 0.15 },
                    backgroundColor: { duration: 0.18, ease: 'easeInOut' },
                    boxShadow: { duration: 0.18, ease: 'easeInOut' },
                    scale: { type: 'spring', stiffness: 500, damping: 28 },
                }}
            />

            {/* Outer Restrained Ring (Tracks smoothed coordinates via spring) */}
            <motion.div
                className="pointer-events-none fixed left-0 top-0 z-[99999] rounded-full border"
                style={{
                    x: rx,
                    y: ry,
                    translateX: '-50%',
                    translateY: '-50%',
                    pointerEvents: 'none',
                    zIndex: 99999,
                }}
                animate={{
                    opacity: isVisible ? 1 : 0,
                    width: ringSize,
                    height: ringSize,
                    borderColor: isLight
                        ? (isInteractive ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.75)')
                        : (isInteractive ? 'rgba(13, 15, 18, 0.85)' : 'rgba(13, 15, 18, 0.65)'),
                    backgroundColor: isInteractive
                        ? (isLight ? 'rgba(255, 255, 255, 0.08)' : 'rgba(13, 15, 18, 0.05)')
                        : 'rgba(0, 0, 0, 0)',
                    boxShadow: isLight
                        ? '0 0 10px rgba(255, 255, 255, 0.18), inset 0 0 6px rgba(255, 255, 255, 0.04)'
                        : '0 0 0 1px rgba(255, 255, 255, 0.25)',
                    scale: isDown ? 0.88 : 1,
                }}
                transition={{
                    opacity: { duration: 0.15 },
                    width: { type: 'spring', stiffness: 420, damping: 30 },
                    height: { type: 'spring', stiffness: 420, damping: 30 },
                    borderColor: { duration: 0.18, ease: 'easeInOut' },
                    backgroundColor: { duration: 0.18, ease: 'easeInOut' },
                    boxShadow: { duration: 0.18, ease: 'easeInOut' },
                    scale: { type: 'spring', stiffness: 500, damping: 28 },
                }}
            />
        </>
    );
}
