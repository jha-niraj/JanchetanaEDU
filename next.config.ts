import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	webpack: (config, { isServer }) => {
		if (isServer) {
			config.externals = [...config.externals, 'prisma', '@prisma/client'];
		}

		return config;
	},
	experimental: {
		serverComponentsExternalPackages: ['@prisma/client', 'prisma'],
	},
	images: {
		unoptimized: true
	},
	eslint: {
		ignoreDuringBuilds: false,
		dirs: ['pages', 'app', 'components', 'lib'],
	}
};

export default nextConfig;
