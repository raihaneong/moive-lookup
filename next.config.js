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
      }
    ]
  }
}

module.exports = nextConfig
