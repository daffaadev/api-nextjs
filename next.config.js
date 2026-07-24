/** @type {import('next').NextConfig} */
const nextConfig = {
  // Matiin source map di production
  productionBrowserSourceMaps: false,
  
  // Cegah expose source code
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

