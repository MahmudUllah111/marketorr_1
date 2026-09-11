import '../css/app.css';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './lib/theme';
import Layout from './components/Layout';

const defaultLayout = (children) => <Layout>{children}</Layout>;

createInertiaApp({
    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.jsx`,
            import.meta.glob('./pages/**/*.jsx'),
        ).then((module) => {
            module.default.layout = module.default.layout || defaultLayout;
            return module;
        }),
    setup({ el, App, props }) {
        createRoot(el).render(
            <ThemeProvider>
                <App {...props} />
            </ThemeProvider>,
        );
    },
    progress: {
        color: '#891FFB',
        showSpinner: true,
    },
});
