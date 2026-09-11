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
