/**
 * @type {import('next').NextConfig}
 **/

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/utils/:slug*',
        destination: '/api/:slug*',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig