/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['it'],
    defaultLocale: 'it',
  },
  images: {
    domains: ['via.placeholder.com'],
  },
}

module.exports = nextConfig
