/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BASE_URL: process.env.API_URL,
        FRONT_URL: process.env.FORNTEND_URL,
    },
    images: {
        domains: [], // Allow images from any domain
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                // hostname: 'd1zqikvhquyes6.cloudfront.net',
                // port: '',
                // pathname: '/account123/**',
            },
        ],
    },
};

export default nextConfig;
