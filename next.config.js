/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/audit",
      },
    ];
  },
};

module.exports = nextConfig;
