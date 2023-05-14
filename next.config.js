const { hostname } = require('os');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'tecdn.b-cdn.net'
      }
    ]
  }
}

module.exports = nextConfig
