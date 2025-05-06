/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placehold.jp', 'placehold.co'],
  },
  swcMinify: true,
  poweredByHeader: false,
  trailingSlash: false,
}

module.exports = nextConfig