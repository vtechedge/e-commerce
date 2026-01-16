/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // Enable SWC-based minification for better performance

  compiler: {
    styledComponents: true,
    removeConsole: process.env.NODE_ENV === 'production', // Remove console logs in production
  },

  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // Enable output file tracing for smaller deployments
  output: 'standalone',

  // Production optimizations
  productionBrowserSourceMaps: false,

  // Optimize page data
  optimizeFonts: true,

  // Compression
  compress: true,

  // PoweredBy header removal for security
  poweredByHeader: false,
};

export default nextConfig;
