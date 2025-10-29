/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://127.0.0.1:5000/:path*",
      },
    ];
  },
  experimental: {
    turbo: {
      resolveAlias: {
        '@/lib': './src/lib',
        '@/components': './src/components',
        '@/context': './src/context',
        '@/app': './src/app',
      },
    },
  },
};

export default nextConfig;
