/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dvnghia09.github.io',
        port: '',
        pathname: '/info/front/img/**',
      },
    ],
  },
}

module.exports = nextConfig
