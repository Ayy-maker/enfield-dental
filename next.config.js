/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/enfield-dental',
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

module.exports = nextConfig;
