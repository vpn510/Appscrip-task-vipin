/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // 👈 Required for static export
  images: {
    unoptimized: true, // 👈 Fix for Netlify image handling
  },
};

export default nextConfig;
