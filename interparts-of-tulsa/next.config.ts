/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pin Turbopack's workspace root to this project. A lockfile in the parent
  // directory made Next infer the parent as root and crawl its node_modules,
  // which wedged the dev server (pegged CPU, no route ever compiled).
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    // The old multi-page site (still in Google's index) 301/308s to the
    // matching section of the new single-page site so old links keep working
    // and their ranking value transfers instead of hitting a 404.
    const servicePages = [
      "/all-services",
      "/engine-repair",
      "/brake-repair",
      "/transmission-repair",
      "/tune-ups-maintenance",
      "/acheater-repair",
      "/suspension-undercarriage",
    ];

    return [
      ...servicePages.map((source) => ({
        source,
        destination: "/#services",
        permanent: true,
      })),
      { source: "/reviews", destination: "/#testimonials", permanent: true },
      { source: "/read-reviews", destination: "/#testimonials", permanent: true },
      { source: "/terms-and-conditions", destination: "/terms", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
      { source: "/contact-us", destination: "/#contact", permanent: true },
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/about-us", destination: "/#about", permanent: true },
      { source: "/specials", destination: "/", permanent: true },
      { source: "/coupons", destination: "/", permanent: true },
      { source: "/specials-coupons", destination: "/", permanent: true },
    ];
  },
};

module.exports = nextConfig;
