import { PROJECTS as DATA_PROJECTS, getProjectBySlug as dataGetProjectBySlug } from '../data/projects';

// Backwards-compatible mapped array with verified Marketorr projects
export const PROJECTS = DATA_PROJECTS.map((p) => ({
    ...p,
    category: p.disciplines ? p.disciplines.join(' · ') : p.tags.join(' · '),
    description: p.summary,
    metric: p.metric || (p.slug === 'alarabi-fashion' ? 'AF' : p.slug === 'animateuix' ? 'UIX' : p.slug === 'near-to-nature' ? 'NAT' : p.slug === 'city-online' ? 'ISP' : p.slug === 'jute-for-good' ? 'B2B' : 'CORP'),
    metricLabel: p.metricLabel || (p.slug === 'alarabi-fashion' ? 'Monogram System' : p.slug === 'animateuix' ? 'Motion Identity' : p.slug === 'near-to-nature' ? 'Eco Packaging' : p.slug === 'city-online' ? 'Portal & Platform' : p.slug === 'jute-for-good' ? 'Export Showcase' : 'Brand Identity'),
}));

export const getProjectBySlug = dataGetProjectBySlug;
