/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH:
      process.env.NODE_ENV === "production"
        ? "/JLConstrucao"
        : "",
  },
};

module.exports = nextConfig;
