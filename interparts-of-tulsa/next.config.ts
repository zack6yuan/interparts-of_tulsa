/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      // Old WordPress/Siteflex pages -> homepage sections on the new single-page site.
      { source: "/contact", destination: "/#contact", permanent: true },
      { source: "/all-services", destination: "/#services", permanent: true },
      { source: "/reviews", destination: "/#testimonials", permanent: true },
      { source: "/about-us", destination: "/#about", permanent: true },
      { source: "/suspension-undercarriage", destination: "/#services", permanent: true },

      // No equivalent on the new site -> homepage.
      { source: "/specials-coupons", destination: "/", permanent: true },
    ];
  },
};

module.exports = nextConfig;