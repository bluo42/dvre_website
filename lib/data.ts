// ─────────────────────────────────────────────────────────────
// DVRE Partners — site content
// Almost everything you'd want to edit lives in this one file.
// ─────────────────────────────────────────────────────────────

const CDN = 'https://images.squarespace-cdn.com/content/v1/62d32b1806c05f1e0770e163/';
/** Build an image URL. Squarespace CDN images resize with ?format=750w / 1500w / 2500w.
 *  We pull the largest size; next/image then serves each screen a right-sized copy. */
export const img = (path: string, width = 2500) =>
  path.startsWith('/') ? path : `${CDN}${path}?format=${width}w`;

export const site = {
  name: 'DVRE Partners',
  email: 'development@dvrepartners.com',
  investorPortal: 'https://dvrepartners.cashflowportal.com/app',
  tagline: 'Value-add real estate investment & development',
  location: 'Los Angeles, California',
  hero: {
    title: 'Uncovering deep value in real estate',
    subtitle: 'Value-add and opportunistic real estate investment across the San Gabriel Valley.',
    // Drop an MP4 at /public/video/hero.mp4 (see README). The poster shows until it loads.
    video: '/video/hero.mp4',
    poster: img('/images/0613468c-RemoteMediaFile_6553624_0_2022_03_12_10_14_42.jpg'),
  },
  about:
    'DVRE Partners is a full-cycle real estate investment and development firm pursuing value-add opportunities across residential and retail real estate in the San Gabriel Valley.',
};

// The News section is built but hidden for now. Set to true to put /news and
// the News links back on the site.
export const showNews = false;

export const stats = [
  { value: 20, prefix: '$', suffix: 'M+', label: 'Total capitalization' },
  { value: 11, label: 'Projects' },
  { value: 3, label: 'Funds' },
  { value: 5, suffix: '+', label: 'Years investing' },
];

// Fallback aerials used when a project or post has no photo of its own.
export const photos = {
  fundI: img('/images/185b5c0f-dji_fly_20250502_133554_202_1746218268245_photo_optimized.jpg'),
  pasadena: img('/images/a77fc369-dji_fly_20241214_155056_998_1734220340252_photo_optimized.jpg'),
  altadena: img('/images/5579d4c2-90461F3D-06E0-40D4-B9E6-89211F7CA142.jpg'),
  retail: img('/images/01fceaa1-dji_fly_20230122_104118_185_1674412884693_photo_optimized.jpg'),
};

export type Fund = {
  slug: string;
  name: string;          // Full display name
  tag: string;           // Matches the "fund:" field in news posts
  cardLabel: string;     // Short name on homepage cards
  cardStatus: string;
  kicker: string;
  description: string;
  pills: string[];
  facts: [string, string][];
  dateline: string;
  photo: string;
  projectsHeading: string;
  comingSoon?: boolean;
};

export const funds: Fund[] = [
  {
    slug: 'fund-i',
    name: 'DVRE Fund I',
    tag: 'Fund I',
    cardLabel: 'DVRE Fund I',
    cardStatus: '4 projects',
    kicker: 'Portfolio · Fund I',
    description:
      "DVRE's first fund acquired existing residential properties across greater Los Angeles and added new homes through ADU and infill development. All four projects have been completed and delivered.",
    pills: ['Value-add', 'ADU / Infill', 'Completed'],
    facts: [
      ['Strategy', 'Value-add ADU & infill'],
      ['Market', 'Greater Los Angeles'],
      ['Projects', '4'],
      ['Status', 'All completed'],
    ],
    dateline: 'LOS ANGELES, CA',
    photo: photos.fundI,
    projectsHeading: 'Completed projects',
  },
  {
    slug: 'pasadena-fund',
    name: 'DVRE Pasadena Fund',
    tag: 'Pasadena Fund',
    cardLabel: 'Pasadena Fund',
    cardStatus: '3 projects',
    kicker: 'Portfolio · Pasadena',
    description:
      'Adding new homes to established Pasadena neighborhoods by repositioning existing multifamily properties and building ADUs on underused lots, while keeping existing residents in place.',
    pills: ['Value-add', 'ADU / Infill', 'Pasadena, CA'],
    facts: [
      ['Strategy', 'Value-add infill'],
      ['Market', 'Pasadena, CA'],
      ['Projects', '3'],
      ['New homes', '12'],
      ['Status', '1 completed · 2 in progress'],
    ],
    dateline: 'PASADENA, CA',
    photo: photos.pasadena,
    projectsHeading: 'Projects',
  },
  {
    slug: 'altadena-fund',
    name: 'DVRE Altadena Fund',
    tag: 'Altadena Fund',
    cardLabel: 'Altadena Fund',
    cardStatus: '4 projects',
    kicker: 'Portfolio · Altadena',
    description:
      'Ground-up, build-to-rent housing helping Altadena rebuild after the Eaton Fire. We develop new, code-compliant homes on fire-affected lots, designed and managed for long-term rental.',
    pills: ['Ground-up', 'Build-to-rent', 'Altadena, CA'],
    facts: [
      ['Strategy', 'Ground-up build-to-rent'],
      ['Market', 'Altadena, CA'],
      ['Projects', '4'],
      ['New homes', '12+'],
      ['Status', 'Design & plan check'],
    ],
    dateline: 'ALTADENA, CA',
    photo: photos.altadena,
    projectsHeading: 'In progress',
  },
  {
    slug: 'retail',
    name: 'DVRE Retail',
    tag: 'Retail',
    cardLabel: 'DVRE Retail',
    cardStatus: 'Neighborhood retail',
    kicker: 'Portfolio · Retail',
    description: 'A new DVRE strategy focused on neighborhood retail. Details will be shared here as the fund takes shape.',
    pills: ['Coming soon'],
    facts: [['Status', 'Coming soon']],
    dateline: 'LOS ANGELES, CA',
    photo: photos.retail,
    projectsHeading: 'Projects',
    comingSoon: true,
  },
];

export type Project = {
  slug: string;
  name: string;
  fund: string; // Fund slug
  status: 'Completed' | 'In progress';
  address?: string;
  units?: string;
  sqft?: string;
  summary: string;
  photos: string[];
};

export const projects: Project[] = [
  // ── Fund I ──
  {
    slug: 'virginia', name: 'Virginia', fund: 'fund-i', status: 'Completed',
    summary: 'A completed value-add project from DVRE Fund I.',
    photos: [
      img('/images/59b8bb89-dji_fly_20250502_133554_202_1746218268245_photo_optimized.jpg'),
      img('/images/b83d6a97-021A5986_edited.jpg'),
      img('/images/0e6570c1-021A5830.jpg'),
      img('/images/cdc50c10-021A5812.jpg'),
    ],
  },
  {
    slug: 'howard-3', name: 'Howard 3', fund: 'fund-i', status: 'Completed', address: '266 W Howard St',
    summary: 'A completed value-add project from DVRE Fund I.',
    photos: [
      img('/images/e1f4df71-dji_fly_20241214_155056_998_1734220340252_photo_optimized.jpg'),
      img('/images/d07dc4e8-266-W-Howard-St-Unit-2-3-33.jpg'),
      img('/images/98d20ce8-266-W-Howard-St-Unit-2-3-30.jpg'),
      img('/images/2b396041-266-W-Howard-St-Unit-2-3-35.jpg'),
    ],
  },
  {
    slug: 'oakland-5', name: 'Oakland 5', fund: 'fund-i', status: 'Completed', address: '545 N Oakland Ave',
    summary: 'A completed value-add project from DVRE Fund I.',
    photos: [
      img('/images/26908d63-dji_fly_20230122_104118_185_1674412884693_photo_optimized.jpg'),
      img('/images/7c62303a-545-N-Oakland-Ave-001-mls.jpg'),
      img('/images/da669b18-543-N-oakland---overhead-1.jpg'),
      img('/images/6dae95a0-545-N-Oakland-Ave-017-mls.jpg'),
    ],
  },
  {
    slug: 'almansor-11', name: 'Almansor 11', fund: 'fund-i', status: 'Completed',
    summary: 'A completed value-add project from DVRE Fund I.',
    photos: [
      img('/images/59dc8c6c-90461F3D-06E0-40D4-B9E6-89211F7CA142.jpg'),
      img('/images/1f74f752-r1-1.jpg'),
      img('/images/4325f350-r3-1.jpg'),
      img('/images/76854e45-IMG_5265.jpg'),
    ],
  },
  // ── Pasadena Fund ──
  {
    slug: 'madison-8', name: 'Madison 8', fund: 'pasadena-fund', status: 'Completed', address: '865 N Madison Ave',
    units: '8',
    summary: 'An existing four-unit Pasadena property expanded with four new homes and renovated units. Construction is complete and the homes are now leasing.',
    photos: [photos.pasadena],
  },
  {
    slug: 'oakland-7', name: 'Oakland 7', fund: 'pasadena-fund', status: 'In progress', address: '582 N Oakland Ave',
    units: '7', sqft: '±5,557',
    summary: 'A three-unit Pasadena property on a 0.29-acre lot, adding three detached ADUs and one garage-conversion ADU while existing residents stay in place. Now under construction, with completion targeted for late 2026.',
    photos: [photos.pasadena],
  },
  {
    slug: 'madison-7', name: 'Madison 7', fund: 'pasadena-fund', status: 'In progress', address: '536 N Madison Ave',
    units: '7', sqft: '±5,648',
    summary: 'A 1923 bungalow triplex near Old Town Pasadena, with four new three-bedroom homes planned at the rear of the lot. Currently in permitting.',
    photos: [photos.pasadena],
  },
  // ── Altadena Fund ──
  {
    slug: 'glenrose', name: 'Glenrose', fund: 'altadena-fund', status: 'In progress',
    summary: 'Ground-up build-to-rent housing on a fire-affected Altadena lot.',
    photos: [photos.altadena],
  },
  {
    slug: 'marathon', name: 'Marathon', fund: 'altadena-fund', status: 'In progress',
    units: '8 (2 × 4)', sqft: '±8,000',
    summary: 'Two adjacent Altadena lots being rebuilt as eight build-to-rent homes under SB 9. Currently in plan check.',
    photos: [photos.altadena],
  },
  {
    slug: 'sinaloa', name: 'Sinaloa', fund: 'altadena-fund', status: 'In progress',
    units: '4', sqft: '±4,000',
    summary: 'Four new build-to-rent homes on a fire-affected Altadena lot.',
    photos: [photos.altadena],
  },
  {
    slug: 'fair-oaks', name: 'Fair Oaks', fund: 'altadena-fund', status: 'In progress',
    summary: 'Ground-up build-to-rent housing on a fire-affected Altadena lot.',
    photos: [photos.altadena],
  },
];

export const team = [
  {
    name: 'Brian Chan',
    role: 'Partner · Development',
    photo: '/team/brian-chan.jpg',
    bio: "Brian Chan is a Partner at DVRE Partners, responsible for development, design and construction across the firm's portfolio. Brian also oversees Deluxury Homes, the firm's affiliated construction company. Previously, Brian managed more than $100 million of multifamily development at West Builders. Brian holds a Bachelor of Architecture from California Polytechnic State University, San Luis Obispo.",
  },
  {
    name: 'Brandon Luo',
    role: 'Partner · Investments',
    photo: '/team/brandon-luo.jpg',
    bio: "Brandon Luo is a Partner at DVRE Partners, responsible for investments, capital markets and firm operations. Previously, Brandon was a quantitative analyst at Bank of America and a portfolio management associate at PIMCO. Brandon is a CFA charterholder and holds a B.S. from the University of California, Berkeley and an M.S. from the Georgia Institute of Technology.",
  },
  {
    name: 'Justin Wang',
    role: 'Partner · Asset Management',
    photo: '/team/justin-wang.jpg',
    bio: "Justin Wang is a Partner at DVRE Partners, responsible for asset management and investor relations. Previously, Justin worked on single-family rental acquisitions at Tricon Residential and in asset management at First Washington Realty. Justin holds a B.S. in Business from Boston University.",
  },
];

// About page "Who we are" and "Our philosophy". Written to cover both the
// residential funds and DVRE Retail.
export const whoWeAre = {
  title: 'We find value others overlook.',
  text: [
    'DVRE Partners is a full-cycle real estate investment and development company. Since 2021 we have grown to more than $20M of real estate across 50+ units in the West San Gabriel Valley, with over 30 ground-up homes developed or in our pipeline.',
    'Having built our track record in residential value-add, we are now applying the same approach to neighborhood retail across the San Gabriel Valley.',
  ],
};

export const philosophy = ['Look where others don’t', 'Concentrate capital', 'Do the deep work', 'Stay ahead of the market'];

export const journey = [
  { year: '2021', text: 'Founded DVRE Partners and purchased our first property' },
  { year: '2023', text: 'Completed our first development' },
  { year: '2025', text: 'Delivered Fund I and started the Pasadena Fund' },
  { year: '2026', text: 'Started the Altadena Fund and completed our first Pasadena Fund project' },
  { year: 'Next', text: 'Expanding into neighborhood retail with DVRE Retail', upcoming: true },
];

export const fundBySlug = (slug: string) => funds.find((f) => f.slug === slug);

/** Completed: all of a fund's projects are done. Coming soon: no projects yet. */
export const fundStatus = (f: Fund) =>
  f.comingSoon ? 'Coming soon' : projectsForFund(f.slug).every((p) => p.status === 'Completed') ? 'Completed' : 'In progress';

/** A project gets its own page once it is completed and has photos of its own
 *  (more than the single fund aerial). Until then its card shows the photo only. */
export const hasProjectPage = (p: Project) => p.status === 'Completed' && p.photos.length > 1;
export const fundByTag = (tag: string) => funds.find((f) => f.tag === tag);
export const projectsForFund = (slug: string) => projects.filter((p) => p.fund === slug);
