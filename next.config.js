/** @type {import('next').NextConfig} */
const nextConfig = {}

// module.exports = nextConfig

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_HOST === 'local' ?'http'  :'https',
        hostname: process.env.NEXT_PUBLIC_IMAGE_SERVER,
        pathname: '**',
      },
    ],
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_SERVER,
  },
}


// images: {
  // domains: ['127.0.0.1'], 
  // remotePatterns: [
  //   {
  //     protocol: 'http',
  //     hostname: '127.0.0.1',
  //     port: '',
  //     pathname: '',
  //   },
  // ],
// },