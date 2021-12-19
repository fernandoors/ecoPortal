/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: '/graphql',
        destination: process.env.URL_API,
      },
    ];
  },
  reactStrictMode: true,
};
