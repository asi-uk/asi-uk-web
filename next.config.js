/** @type {import('next').NextConfig} */
const nextConfig = {
    serverExternalPackages: ['qrcode', 'cloudinary'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '/disrkguox/image/upload/**',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                pathname: '/**',
            }
        ],
    },
}

module.exports = nextConfig
