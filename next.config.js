/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader"
    });

    return config;
  },
  images: {
    domains: ['i.seadn.io', 'proplot.twic.pics', 'proplot-images.s3.us-west-1.amazonaws.com'],
    loader: 'default',
  },
  publicRuntimeConfig: {},
  serverRuntimeConfig: {
    SECRET_AUTH_PASSWORD: process.env.SECRET_AUTH_PASSWORD,
    JSON_RPC_CLIENT: process.env.JSON_RPC_CLIENT,
  },
}

module.exports = nextConfig
