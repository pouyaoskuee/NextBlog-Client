/** @type {import('next').NextConfig} */
const nextConfig = {
    cacheComponents: true,
    logging:{
        fetches:{
            fullUrl:true,
        }
    },
    allowedDevOrigins: ['192.168.100.217'],
    images: {
        dangerouslyAllowLocalIP: true,
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8000',
                pathname: '/uploads/**',
            },
        ],
    },
};

export default nextConfig;
