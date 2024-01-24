/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `@import "@/styles/style.scss";`,
  },
};

export default nextConfig;
