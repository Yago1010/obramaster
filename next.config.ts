/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? "/JLConstrucao" : "",
  assetPrefix: isGithubPages ? "/JLConstrucao/" : "",
  trailingSlash: true,
};

module.exports = nextConfig;
