const withPWA = require("@ducanh2912/next-pwa").default({
    dest: "public",
    cacheOnFrontendNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true
  });

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
