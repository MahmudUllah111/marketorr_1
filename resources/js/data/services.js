export const GLOBAL_PROCESS = [
    {
        step: '01',
        name: 'Discover',
        phase: 'IDEA',
        summary: 'Understand business, users and context through deep investigation and research.',
        deliverables: ['Stakeholder alignment', 'Market & competitor landscape', 'User insights & technical scope'],
    },
    {
        step: '02',
        name: 'Define',
        phase: 'IDEA',
        summary: 'Establish strategy, objectives, user journey architecture, and engineering blueprints.',
        deliverables: ['Strategic positioning brief', 'Information architecture & flows', 'Technical stack & roadmap'],
    },
    {
        step: '03',
        name: 'Design',
        phase: 'EXPERIENCE',
        summary: 'Create identity or interface systems with bespoke marks, layouts, and prototypes.',
        deliverables: ['Visual identity & typography system', 'High-fidelity UI screens', 'Atomic design tokens & libraries'],
    },
    {
        step: '04',
        name: 'Build',
        phase: 'EXPERIENCE',
        summary: 'Turn the system into production-ready experiences using clean Laravel and React code.',
        deliverables: ['Production codebase with clean architecture', 'API & CMS integrations', 'Responsive cross-device execution'],
    },
    {
        step: '05',
        name: 'Refine',
        phase: 'RESULT',
        summary: 'Test, optimize and polish for low Core Web Vitals, accessibility, and fluid motion.',
        deliverables: ['Sub-second load optimization', 'Cross-browser device QA', 'Accessibility compliance review'],
    },
    {
        step: '06',
        name: 'Deliver',
        phase: 'RESULT',
        summary: 'Launch with documentation, master asset kits, and scalable systems.',
        deliverables: ['Zero-downtime deployment', 'Comprehensive system documentation', 'Master asset kit handoff'],
    },
];

export const BRANDING_PROCESS = [
    {
        step: '01',
        name: 'Discover',
        summary: 'Deep research into business context, competitive landscape, and core audience expectations.',
        deliverables: ['Stakeholder discovery', 'Market positioning review', 'Audience insights'],
    },
    {
        step: '02',
        name: 'Define',
        summary: 'Establishing the strategic direction, brand narrative, and distinct value proposition.',
        deliverables: ['Brand positioning statement', 'Core messaging pillars', 'Creative direction moodboards'],
    },
    {
        step: '03',
        name: 'Design',
        summary: 'Crafting the logo system, typographic scale, color hierarchy, and bespoke visual language.',
        deliverables: ['Primary & secondary logo marks', 'Custom typography selection', 'Color system & graphic toolkit'],
    },
    {
        step: '04',
        name: 'Apply',
        summary: 'Extending the identity system into physical and digital touchpoints with uncompromising craft.',
        deliverables: ['Stationery & corporate collateral', 'Packaging & label systems', 'Digital presentation templates'],
    },
    {
        step: '05',
        name: 'Systemise',
        summary: 'Codifying rules into clear, reusable brand guidelines to maintain lasting brand coherence.',
        deliverables: ['Comprehensive brand guidelines PDF', 'Asset library & export kits', 'Implementation specs'],
    },
];

export const SERVICES = [
    {
        slug: 'branding',
        index: '01',
        name: 'Branding & Identity',
        short: 'Identities built to be remembered.',
        headline: 'Brand Strategy & Visual Identity Systems',
        description:
            'We build strategy-led visual identities that make ambitious businesses impossible to ignore. From foundational positioning to meticulous identity systems and guidelines, every detail is engineered to build recognition and trust.',
        accent: '#891FFB',
        accentTo: '#507AF4',
        process: BRANDING_PROCESS,
        capabilities: [
            'Brand Strategy & Positioning',
            'Logo Systems & Monograms',
            'Typography & Color Systems',
            'Brand Guidelines & Rules',
            'Stationery & Corporate Collateral',
            'Packaging & Label Design',
            'Presentation Systems',
            'Custom Graphic Language',
        ],
        pillars: [
            {
                title: 'Brand Strategy',
                description: 'Clear positioning, audience definition, and creative direction that set the foundation.',
            },
            {
                title: 'Visual Identity',
                description: 'Logo marks, typography, palettes, and visual assets built as a cohesive design language.',
            },
            {
                title: 'Brand Application',
                description: 'Real-world packaging, stationery, print, and digital touchpoints that express the brand.',
            },
            {
                title: 'Brand Guidelines',
                description: 'Exhaustive rulebooks ensuring consistent and confident implementation across every medium.',
            },
        ],
        deliverables: [
            'Brand strategy & positioning deck',
            'Primary, secondary & responsive logo suite',
            'Typographic hierarchy & curated palette',
            'Packaging, stationery & collateral assets',
            'Comprehensive brand guidelines documentation',
            'Ready-to-use vector & raster asset library',
        ],
        focus: 'Built for recognition, credibility, and brand equity.',
    },
    {
        slug: 'ui-ux',
        index: '02',
        name: 'UI/UX Design',
        short: 'Interfaces engineered for intuition and clarity.',
        headline: 'Website, Software & Mobile Experience Design',
        description:
            'We design digital products that turn complex workflows into effortless human experiences. Covering web platforms, SaaS applications, and mobile products, we craft intuitive user journeys backed by robust design systems.',
        accent: '#507AF4',
        accentTo: '#1BE2EB',
        specialties: [
            {
                title: 'Website UI/UX',
                description: 'Conversion-focused marketing sites, brand flagships, and responsive digital destinations.',
            },
            {
                title: 'Software & SaaS UI/UX',
                description: 'Intuitive web applications, complex dashboards, admin control panels, and workflow tools.',
            },
            {
                title: 'Mobile App UI/UX',
                description: 'Native iOS and Android application design with fluid micro-interactions and high retention.',
            },
        ],
        capabilities: [
            'User Experience (UX) Strategy',
            'Information Architecture & Wireframes',
            'Interface (UI) Design',
            'Scalable Design Systems & Tokens',
            'Interactive Prototyping',
            'Dashboard & SaaS Workflows',
            'Mobile App (iOS & Android) UI',
            'Design-to-Engineering Handoff',
        ],
        deliverables: [
            'User flow maps & information architecture',
            'High-fidelity screen designs for all viewports',
            'Interactive Figma prototypes',
            'Atomic design systems & component libraries',
            'Detailed developer handoff specifications',
        ],
        focus: 'Engineered for seamless usability, engagement, and conversion.',
    },
    {
        slug: 'development',
        index: '03',
        name: 'Development',
        short: 'Modern technology built for speed and scale.',
        headline: 'Websites, Web Applications & Digital Platforms',
        description:
            'We build fast, secure, and maintainable digital experiences using modern frameworks and rigorous engineering standards. From bespoke marketing platforms to dynamic software portals, we turn approved designs into production-grade code.',
        accent: '#1BE2EB',
        accentTo: '#891FFB',
        specialties: [
            {
                title: 'Website Development',
                description: 'Responsive, accessible, SEO-structured web platforms built for speed, stability, and smooth interaction.',
            },
            {
                title: 'Web Application Development',
                description: 'Full-stack applications, interactive portals, and SaaS dashboards with secure architectures and reliable APIs.',
            },
        ],
        capabilities: [
            'Web Development',
            'Frontend Engineering (React, Vite, Tailwind CSS)',
            'Laravel Full-Stack & Backend Architecture',
            'Interactive Animations & Motion (Framer Motion, Lenis)',
            'Headless CMS & Content Management Integration',
            'API Integration & Service Architecture',
            'Performance Optimization & Core Web Vitals',
            'Responsive & Mobile-First Execution',
        ],
        deliverables: [
            'Production-ready codebase with clean architecture',
            'Responsive layouts optimized for desktop, tablet, and mobile',
            'Integrated content systems or admin dashboards',
            'Optimized asset delivery and fast load times',
            'Thorough deployment and environment documentation',
        ],
        focus: 'Engineered for performance, maintainability, and longevity.',
    },
];

export const SERVICE_REDIRECTS = {
    'web-ui-ux': 'ui-ux',
    'software-ui-ux': 'ui-ux',
    'mobile-app-ui-ux': 'ui-ux',
    'web-development': 'development',
};
