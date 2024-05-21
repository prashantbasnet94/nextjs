const nextConfig = {
    images: {
        domains: ['images.unsplash.com', 'dummyimage.com'], // Add 'dummyimage.com' to the list
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com', // Correct the hostname here
            port: '',
            pathname: '/account123/**',
          },
        ],
    },
};
export default nextConfig;