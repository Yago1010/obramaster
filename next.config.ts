/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",

  basePath: isProd ? "/Obras-Reforma" : "",
  assetPrefix: isProd ? "/Obras-Reforma/" : "",

  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
