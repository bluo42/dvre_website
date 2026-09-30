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
  tagline: 'Infill housing investment & development',
  location: 'Los Angeles, California',
  hero: {
    eyebrow: 'DVRE Partners · Los Angeles',
    title: 'Infill housing, built end to end.',
    subtitle: 'Acquisition, entitlement, construction and management — under one roof.',
    // Drop an MP4 at /public/video/hero.mp4 (see README). The poster shows until it loads.
    video: '/video/hero.mp4',
    poster: img('0613468c-30bf-4187-9cf4-ef4bf0e23898/RemoteMediaFile_6553624_0_2022_03_12_10_14_42.JPG'),
  },
  about:
    'DVRE Partners is a vertically integrated real estate investment and development firm focused on small multifamily and infill housing across Pasadena, Altadena and greater Los Angeles.',
};

export const stats = [
  { value: 12, prefix: '$', suffix: 'M+', label: 'Real estate acquired' },
  { value: 11, label: 'Projects' },
  { value: 3, label: 'Funds' },
  { value: 5, suffix: '+', label: 'Years investing' },
];

// Fallback aerials used when a project or post has no photo of its own.
export const photos = {
  fundI: img('185b5c0f-a4bb-49d5-9996-6ea81aebfe30/dji_fly_20250502_133554_202_1746218268245_photo_optimized.jpg'),
  pasadena: img('a77fc369-7765-41c0-817f-703745cefe56/dji_fly_20241214_155056_998_1734220340252_photo_optimized.JPG'),
  altadena: img('5579d4c2-6c95-40c2-86e3-948bdba3578e/90461F3D-06E0-40D4-B9E6-89211F7CA142.jpg'),
  retail: img('01fceaa1-95e1-435d-8f23-45b7979b7275/dji_fly_20230122_104118_185_1674412884693_photo_optimized.jpg'),
  fundII: img('0613468c-30bf-4187-9cf4-ef4bf0e23898/RemoteMediaFile_6553624_0_2022_03_12_10_14_42.JPG'),
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
    cardStatus: '4 projects · Completed',
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
  // ── DVRE Fund II (template) ──
  // Placeholder page at /funds/fund-ii. When the fund launches: update the
  // description, pills and facts, set cardStatus (e.g. '2 projects'), change
  // projectsHeading if needed, and delete `comingSoon`. Add its projects below
  // with fund: 'fund-ii', and tag news posts with `fund: Fund II`.
  {
    slug: 'fund-ii',
    name: 'DVRE Fund II',
    tag: 'Fund II',
    cardLabel: 'DVRE Fund II',
    cardStatus: 'Coming soon',
    kicker: 'Portfolio · Fund II',
    description:
      "The successor to DVRE Fund I. Details on the fund's strategy and projects will be shared here as it takes shape.",
    pills: ['Coming soon'],
    facts: [
      ['Strategy', 'To be announced'],
      ['Projects', 'To be announced'],
      ['Status', 'Coming soon'],
    ],
    dateline: 'LOS ANGELES, CA',
    photo: photos.fundII,
    projectsHeading: 'Projects',
    comingSoon: true,
  },
  {
    slug: 'retail',
    name: 'DVRE Retail',
    tag: 'Retail',
    cardLabel: 'DVRE Retail',
    cardStatus: 'Coming soon',
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
      img('59b8bb89-c659-4bd4-99ac-954d310e56bc/dji_fly_20250502_133554_202_1746218268245_photo_optimized.JPG'),
      img('b83d6a97-5786-4855-acc2-6aa8611f87b4/021A5986_edited.jpg'),
      img('0e6570c1-fe4d-4482-88dd-fc3aa21eb7ff/021A5830.jpg'),
      img('cdc50c10-dd3e-4af0-a069-55424fb7b8fa/021A5812.jpg'),
    ],
  },
  {
    slug: 'howard-3', name: 'Howard 3', fund: 'fund-i', status: 'Completed', address: '266 W Howard St',
    summary: 'A completed value-add project from DVRE Fund I.',
    photos: [
      img('e1f4df71-f51e-45a8-aeeb-d2c41b2c8af3/dji_fly_20241214_155056_998_1734220340252_photo_optimized.JPG'),
      img('d07dc4e8-62a6-450f-9101-d32732f669ae/266+W+Howard+St+Unit+2%263-33.jpg'),
      img('98d20ce8-eea1-4a8a-8e92-0950c3202727/266+W+Howard+St+Unit+2%263-30.jpg'),
      img('2b396041-d4f1-4225-b297-d5a5f7da2b8a/266+W+Howard+St+Unit+2%263-35.jpg'),
    ],
  },
  {
    slug: 'oakland-5', name: 'Oakland 5', fund: 'fund-i', status: 'Completed', address: '545 N Oakland Ave',
    summary: 'A completed value-add project from DVRE Fund I.',
    photos: [
      img('26908d63-0be4-4ed8-80d7-0b576827bed5/dji_fly_20230122_104118_185_1674412884693_photo_optimized.JPG'),
      img('7c62303a-88c7-4aab-b9ea-1550a36f8d9f/545+N+Oakland+Ave+001-mls.jpg'),
      img('da669b18-edd7-4fe6-9688-8d9e7feb2dec/543+N+oakland+-+overhead+1.jpg'),
      img('6dae95a0-8023-4a68-b8dd-237f4415020d/545+N+Oakland+Ave+017-mls.jpg'),
    ],
  },
  {
    slug: 'almansor-11', name: 'Almansor 11', fund: 'fund-i', status: 'Completed',
    summary: 'A completed value-add project from DVRE Fund I.',
    photos: [
      img('59dc8c6c-312f-43e9-8465-414967878eef/90461F3D-06E0-40D4-B9E6-89211F7CA142.jpeg'),
      img('1f74f752-dc51-4959-b034-089a126eeeb5/r1-1.jpg'),
      img('4325f350-c59e-4ab3-835d-db38814cbfba/r3-1.jpg'),
      img('76854e45-b48b-4601-af02-6ab8b1096e7e/IMG_5265.jpeg'),
    ],
  },
  // ── Pasadena Fund ──
  {
    slug: 'madison-8', name: 'Madison 8', fund: 'pasadena-fund', status: 'Completed', address: '865 N Madison Ave',
    summary: 'An existing Pasadena multifamily property expanded with four new homes and fully renovated units.',
    photos: [photos.pasadena],
  },
  {
    slug: 'oakland-7', name: 'Oakland 7', fund: 'pasadena-fund', status: 'In progress', address: '582 N Oakland Ave',
    units: '7', sqft: '±5,557',
    summary: 'A three-unit Pasadena property on a 0.29-acre lot, adding three detached ADUs and one garage-conversion ADU while existing residents stay in place.',
    photos: [photos.pasadena],
  },
  {
    slug: 'madison-7', name: 'Madison 7', fund: 'pasadena-fund', status: 'In progress', address: '536 N Madison Ave',
    units: '7', sqft: '±5,648',
    summary: 'A 1923 bungalow triplex near Old Town Pasadena, with four new three-bedroom homes planned at the rear of the lot.',
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
    role: 'Development · Partner',
    photo: '/team/brian-chan.jpg',
    bio: "Brian leads DVRE's development platform and oversees Deluxury Homes, the firm's affiliated construction company, directing design, entitlement and construction execution across the portfolio. Prior to DVRE, he managed more than $100 million of multifamily development at West Builders. Brian holds a Bachelor of Architecture from California Polytechnic State University, San Luis Obispo.",
  },
  {
    name: 'Brandon Luo',
    role: 'Investments · Partner',
    photo: '/team/brandon-luo.jpg',
    bio: "Brandon leads DVRE's financial strategy and operations, overseeing capital allocation, capital markets and internal enterprise system development. Prior to DVRE, he served as a quantitative analyst at Bank of America and as a portfolio management associate at PIMCO. Brandon is a CFA charterholder and holds a B.S. from the University of California, Berkeley and an M.S. from the Georgia Institute of Technology.",
  },
  {
    name: 'Justin Wang',
    role: 'Asset Management · Partner',
    photo: '/team/justin-wang.jpg',
    bio: "Justin leads asset management and investor relations at DVRE, overseeing portfolio operations, financial reporting and communications with the firm's investors. Prior to DVRE, he worked on single-family rental acquisitions at Tricon Residential and in asset management at First Washington Realty. Justin holds a B.S. in Business from Boston University.",
  },
];

export const whatWeDo = [
  { title: 'Acquisition & feasibility', text: 'Sourcing and underwriting infill opportunities' },
  { title: 'Entitlement & design', text: 'SB 9, ADU and by-right pathways' },
  { title: 'Construction', text: 'In-house build through Deluxury Homes' },
  { title: 'Property management', text: 'Lease-up and long-term operations' },
];

export const byTheNumbers = [
  { value: 12, prefix: '$', suffix: 'M+', label: 'Real estate acquired & operated' },
  { value: 11, label: 'Projects across three funds' },
  { value: 20, suffix: '+', label: 'ADU & infill projects built by Deluxury Homes' },
  { value: 2021, from: 2000, label: 'Investing since' },
];

export const journey = [
  { year: '2021', text: 'DVRE Partners founded' },
  { year: 'Fund I', text: 'Four value-add projects completed and delivered' },
  { year: 'Pasadena Fund', text: 'Three projects adding new homes in Pasadena' },
  { year: 'Altadena Fund', text: 'Ground-up rebuilds after the Eaton Fire' },
  { year: 'Next', text: 'DVRE Fund II and DVRE Retail', upcoming: true },
];

export const fundBySlug = (slug: string) => funds.find((f) => f.slug === slug);
export const fundByTag = (tag: string) => funds.find((f) => f.tag === tag);
export const projectsForFund = (slug: string) => projects.filter((p) => p.fund === slug);
