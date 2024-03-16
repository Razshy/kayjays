// @ts-check
const nextBuildId = require('next-build-id');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // config options here

  generateBuildId: () => nextBuildId({ dir: __dirname, describe: true }),
  // => 'v1.0.0' (no changes since v1.0.0 tag)
  // => 'v1.0.0-19-ga8f7eee' (19 changes since v1.0.0 tag)
}

module.exports = nextConfig