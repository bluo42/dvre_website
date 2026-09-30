/** @type {import('next').NextConfig} */
const nextConfig = {
  // Photos are still hosted on Squarespace's CDN; Vercel resizes them for each screen.
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'images.squarespace-cdn.com' }],
  },
  // Keep old Squarespace links working after you move the domain to Vercel.
  async redirects() {
    return [
      { source: '/dvre-fund-i', destination: '/funds/fund-i', permanent: true },
      { source: '/dvre-pasadena-fund', destination: '/funds/pasadena-fund', permanent: true },
      { source: '/dvre-altadena-fund', destination: '/funds/altadena-fund', permanent: true },
      { source: '/retail', destination: '/funds/retail', permanent: true },
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/updates', destination: '/news', permanent: true },
      { source: '/updates/:slug', destination: '/news/:slug', permanent: true },
      { source: '/virginia2', destination: '/projects/virginia', permanent: true },
      { source: '/howard3-1', destination: '/projects/howard-3', permanent: true },
      { source: '/oakland5', destination: '/projects/oakland-5', permanent: true },
      { source: '/almansor11', destination: '/projects/almansor-11', permanent: true },
      { source: '/madison-8', destination: '/projects/madison-8', permanent: true },
      { source: '/madison-7', destination: '/projects/madison-7', permanent: true },
      { source: '/oakland-7', destination: '/projects/oakland-7', permanent: true },
      { source: '/marathon', destination: '/projects/marathon', permanent: true },
      { source: '/sinaloa', destination: '/projects/sinaloa', permanent: true },
      { source: '/glenrose', destination: '/projects/glenrose', permanent: true },
      { source: '/fair-oaks', destination: '/projects/fair-oaks', permanent: true },
    ];
  },
};
export default nextConfig;
