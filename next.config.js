next.config./** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  webpack: (config, { isServer }) => {
    return config;
  },
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;js
