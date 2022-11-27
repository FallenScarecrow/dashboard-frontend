/**
 * @type {import('next').NextConfig}
 **/
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules');
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'external-preview.redd.it',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'www.fillmurray.com',
        port: '',
      },
    ],
  },
  async rewrites() {
    return [
      // if the header `x-authorized` is present and
      // contains a matching value, this rewrite will be applied
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-authorized',
            value: '(?<authorized>yes|true)',
          },
        ],
        destination: '/home?authorized=:authorized',
      },
    ];
  },
  async redirects() {
    return [
      // if the header `x-authorized` is present and
      // contains a matching value, this redirect will be applied
      {
        source: '/',
        has: [
          {
            type: 'header',
            key: 'x-authorized',
            value: '(?<authorized>yes|true)',
          },
        ],
        permanent: false,
        destination: '/home?authorized=:authorized',
      },
    ];
  },
};

module.exports = withPlugins([[withTM], nextConfig]);
