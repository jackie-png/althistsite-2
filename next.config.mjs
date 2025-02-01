/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'althistsite-2.vercel.app',
                pathname:'/images/**',
            },
            {
                protocol: 'https',
                hostname: 'althistsite-2-git-master-jackie-pngs-projects.vercel.app',
                pathname:'/images/**',
            }
        ]
    }

};

export default nextConfig;
