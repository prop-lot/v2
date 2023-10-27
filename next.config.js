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
  publicRuntimeConfig: {
    NEXT_PUBLIC_TWIC_PICS_DOMAIN: process.env.NEXT_PUBLIC_TWIC_PICS_DOMAIN,
    NEXT_PUBLIC_JSON_RPC_CLIENT: process.env.NEXT_PUBLIC_JSON_RPC_CLIENT,
  },
  serverRuntimeConfig: {
    SECRET_AUTH_PASSWORD: process.env.SECRET_AUTH_PASSWORD,
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    AWS_REGION: process.env.AWS_REGION,
    AWS_S3_DOMAIN: process.env.AWS_S3_DOMAIN,
    S3_BUCKET_NAME: process.env.S3_BUCKET_NAME,
    NEXT_PUBLIC_JSON_RPC_CLIENT: process.env.NEXT_PUBLIC_JSON_RPC_CLIENT,
    NEXT_PUBLIC_TWIC_PICS_DOMAIN: process.env.NEXT_PUBLIC_TWIC_PICS_DOMAIN,
  },
}

module.exports = nextConfig
