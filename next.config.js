/**
 * @type {import('next').NextConfig}
 **/

const nextConfig = {
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