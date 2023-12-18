/** @type {import('next').NextConfig} */
const nextConfig = {}

// module.exports = nextConfig

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        // hostname: 'res.cloudinary.com',
        hostname: '127.0.0.1',
        pathname: '**',
      },
    ],
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