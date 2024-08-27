module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',  // Correct pattern for any image path under the domain
      },
      {
        protocol: 'https',
        hostname: 'api.microlink.io',  // Another example if you also need to allow images from this domain
        pathname: '/**',
      },
    ],
  },
};
