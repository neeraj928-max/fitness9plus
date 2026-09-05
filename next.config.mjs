/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  experimental: {
    workerThreads: false,
    cpus: 1
  },
  async rewrites() {
    return [
      {
        source: '/assets/images/:path*',
        destination: '/images/:path*',
      },
    ];
  }
};

export default nextConfig;