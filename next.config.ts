/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    async redirects(){
      return [
        {
          source: "/blog/meta-ads-targeting-for-fleet-management-services-in-india",
          destination: '/blog/meta-ads-targeting-for-fleet-transport-businesses-india',
          permanent: true,
        },
        {
          source: "/blog/how-to-build-an-mvp-in-7-days",
          destination: '/blog/fixedcost-mvp-development-for-startups-how-it-works',
          permanent: true,
        },
        {
          source: "/blog/mvp-development-cost-in-india-2026-pricing-breakdown",
          destination: '/blog/how-much-does-it-cost-to-build-an-mvp-in-india',
          permanent: true,
        },
      ];
    }
  };
module.exports = nextConfig;
