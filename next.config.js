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
        destination: '/l/:slug*',
        permanent: false,
      },
      {
        source: '/colour/:slug*',
        destination: '/color/:slug*',
        permanent: true,
      }
    ]
  },
}

module.exports = nextConfig
