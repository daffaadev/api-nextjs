/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.devtool = false
    }
    return config
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  outputFileTracingRoot: __dirname,
}

module.exports = nextConfig
