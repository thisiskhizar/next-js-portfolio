// @ts-check

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: isProd ? '/next-js-portfolio/' : '',
  basePath: isProd ? '/next-js-portfolio' : '',
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
