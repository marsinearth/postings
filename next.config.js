/** @type {import('next').NextConfig} */

const domain = process.env.COGNITO_DOMAIN ?? '';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    relay: {
      src: "./",
      language: "typescript",
      artifactDirectory: "__generated__",
    },
  },
  experimental: {
    appDir: true,
  }
};

module.exports = nextConfig;
