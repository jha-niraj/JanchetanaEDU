import { PrismaPlugin } from "@prisma/nextjs-monorepo-workaround-plugin";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	webpack: (config, { isServer }) => {
		if (isServer) {
		  config.plugins = [...config.plugins, new PrismaPlugin()]
		}
		return config
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
