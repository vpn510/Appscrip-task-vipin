/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,         // ✅ Enables React Compiler (optional, fine to keep)
  reactStrictMode: true,       // ✅ Best practice            // ✅ Required for Netlify static export
  images: {
    unoptimized: true,         // ✅ Prevents image optimization errors during export
  },
};

export default nextConfig;
