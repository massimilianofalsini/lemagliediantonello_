/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '/',
  },
  images: {
    domains: ['via.placeholder.com'],
  },
}

module.exports = nextConfig
