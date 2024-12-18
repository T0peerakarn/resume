/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent.cdninstagram.com",
      },
    ],
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
