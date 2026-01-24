/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",

  basePath: isProd ? "/JlConstrucao" : "",
  assetPrefix: isProd ? "/JlConstrucao/" : "",

  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
