/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable if causing issues
  reactStrictMode: true,
  // Disable ESLint during builds to avoid circular structure warning
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
