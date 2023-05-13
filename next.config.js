const { hostname } = require('os');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'tecdn.b-cdn.net'
      },
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
      },
    ]
  }
}

module.exports = nextConfig
