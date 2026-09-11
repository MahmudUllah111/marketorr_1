/**
 * Centralized internal register for business claims, numerical figures, and certifications.
 * Status options:
 *   - 'approved': Verified and approved for public V2 use
 *   - 'published-needs-confirmation': Appears on legacy Marketorr pages but requires team re-verification
 *   - 'do-not-use': Fabricated template data or outdated claims; prohibited from public V2 use
 */
export const COMPANY_CLAIMS = [
    {
        id: 'claim-founded-2022',
        claim: 'Marketorr founded in 2022',
        status: 'published-needs-confirmation',
        source: 'marketorr.com.bd',
        notes: 'Some directory listings cite 2021; official site pages predominantly cite 2022.',
    },
    {
        id: 'claim-100-brands',
        claim: '100+ brands served',
        status: 'published-needs-confirmation',
        source: 'marketorr.com.bd legacy homepage',
        notes: 'Hold until confirmed project database is reviewed.',
    },
    {
        id: 'claim-15-industries',
        claim: '15+ industries served',
        status: 'published-needs-confirmation',
        source: 'marketorr.com.bd',
        notes: 'General industry coverage claim; use descriptive expertise instead of raw number.',
    },
    {
        id: 'claim-google-partner',
        claim: 'Google Partner badge',
        status: 'published-needs-confirmation',
        source: 'marketorr.com.bd footer / credentials',
        notes: 'Requires active Google Partners portal badge verification.',
    },
    {
        id: 'claim-meta-partner',
        claim: 'Meta Business Partner badge',
        status: 'published-needs-confirmation',
        source: 'marketorr.com.bd footer / credentials',
        notes: 'Requires active Meta Business Partner directory verification.',
    },
    {
        id: 'claim-1.99b-impressions',
        claim: '1.99B+ Impressions (Alibaba project)',
        status: 'do-not-use',
        source: 'V2 demo template placeholder',
        notes: 'Fabricated metric from initial V2 mockup. Must not be used publicly.',
    },
    {
        id: 'claim-5000-leads',
        claim: '5,000+ B2B Leads Generated (Janitorial Leads Pro)',
        status: 'do-not-use',
        source: 'V2 demo template placeholder',
        notes: 'Fabricated metric from initial V2 mockup. Must not be used publicly.',
    },
    {
        id: 'claim-212-activation',
        claim: '+212% Activation Rate (Nova Bank)',
        status: 'do-not-use',
        source: 'V2 demo template placeholder',
        notes: 'Fabricated metric from initial V2 mockup. Must not be used publicly.',
    },
    {
        id: 'claim-3.1x-revenue',
        claim: '3.1x Revenue Growth (Atelier Noir)',
        status: 'do-not-use',
        source: 'V2 demo template placeholder',
        notes: 'Fabricated metric from initial V2 mockup. Must not be used publicly.',
    },
    {
        id: 'claim-3.2x-recall',
        claim: '3.2x Avg. brand recall lift',
        status: 'do-not-use',
        source: 'V2 demo services placeholder',
        notes: 'Fabricated service statistic. Replace with concrete deliverables.',
    },
    {
        id: 'claim-2.4x-conversion',
        claim: '2.4x Avg. conversion lift',
        status: 'do-not-use',
        source: 'V2 demo services placeholder',
        notes: 'Fabricated service statistic. Replace with concrete deliverables.',
    },
    {
        id: 'claim-38-task-time',
        claim: '-38% Avg. task-time reduction',
        status: 'do-not-use',
        source: 'V2 demo services placeholder',
        notes: 'Fabricated service statistic. Replace with concrete deliverables.',
    },
    {
        id: 'claim-4.8-rating',
        claim: '4.8★ Avg. store rating',
        status: 'do-not-use',
        source: 'V2 demo services placeholder',
        notes: 'Fabricated service statistic. Replace with concrete deliverables.',
    },
];

export function getApprovedClaims() {
    return COMPANY_CLAIMS.filter((c) => c.status === 'approved');
}
