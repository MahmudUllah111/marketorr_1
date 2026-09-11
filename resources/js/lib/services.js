import { SERVICES as DATA_SERVICES, BRANDING_PROCESS, SERVICE_REDIRECTS } from '../data/services';

export { BRANDING_PROCESS, SERVICE_REDIRECTS };

export const SERVICES = DATA_SERVICES.map((s) => ({
    ...s,
    outcomes: s.outcomes || (
        s.slug === 'branding'
            ? [
                  { value: 'SYS', label: 'Cohesive Visual Identity' },
                  { value: 'STD', label: 'Brand & Packaging Rules' },
              ]
            : s.slug === 'ui-ux'
            ? [
                  { value: 'UX', label: 'Atomic Design Systems' },
                  { value: 'FLOW', label: 'Intuitive User Journeys' },
              ]
            : [
                  { value: 'CORE', label: 'High Performance & SEO' },
                  { value: 'MOD', label: 'Maintainable Architecture' },
              ]
    ),
}));

/**
 * Project records tag themselves with service slugs (including the legacy
 * `web-development` spelling) for filtering. This maps those slugs to display
 * labels so raw slugs never reach the page.
 */
const SERVICE_SLUG_LABELS = {
    branding: 'Branding & Identity',
    'ui-ux': 'UI/UX Design',
    development: 'Development',
    'web-development': 'Development',
};

export function serviceLabel(slug) {
    return SERVICE_SLUG_LABELS[slug] ?? slug;
}
