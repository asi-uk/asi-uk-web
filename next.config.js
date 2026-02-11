/** @type {import('next').NextConfig} */
const nextConfig = {
    serverExternalPackages: ['qrcode'],
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
            }
        ],
    },
}

module.exports = nextConfig
