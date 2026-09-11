import Header from './layout/Header';
import Footer from './layout/Footer';
import SmoothScroll from './motion/SmoothScroll';
import CustomCursor from './motion/CustomCursor';
import ScrollProgress from './motion/ScrollProgress';
import PageTransition from './motion/PageTransition';

export default function Layout({ children }) {
    return (
        <>
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[1300] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-black"
            >
                Skip to content
            </a>
            <ScrollProgress />
            <SmoothScroll />
            <Header />
            <PageTransition>
                <main id="main" className="pt-[72px] lg:pt-[88px] min-h-screen">{children}</main>
                <Footer />
            </PageTransition>
            <CustomCursor />
        </>
    );
}
