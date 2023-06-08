/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * @type {import('next').NextConfig}
 **/
// const withPlugins = require('next-compose-plugins');
// const withTM = require('next-transpile-modules');

const nextConfig = {
  strictMode: false,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'external-preview.redd.it',
      },
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
      },
      {
        protocol: 'https',
        hostname: 'image.menecucci.dev',
      },
    ],
  },
  async headers() {
    return [
      {
        // Force disable caching for any NextAuth api routes. We need to do this because by default
        // these API endpoints do not return a Cache-Control header. If the header is missing, FrontDoor
        // CDN **will** cache the pages, which is a security risk and can return the wrong user:
        // https://docs.microsoft.com/en-us/azure/frontdoor/front-door-caching#cache-expiration
        source: '/api/auth/:slug',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, max-age=0',
          },
        ],
      },
    ];
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

module.exports = nextConfig;
