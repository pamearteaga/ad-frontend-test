/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    reactRoot: true,
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
