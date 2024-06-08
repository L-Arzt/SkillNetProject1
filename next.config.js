/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
  // output: 'export',
};
