/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false, // set to true if you want to ignore ESLint errors during build
  },
  output: 'standalone',
  images: {
    domains: ['fonts.googleapis.com'],
  },
}

module.exports = nextConfig
