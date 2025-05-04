import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		unoptimized: true
	},
	eslint: {
		ignoreDuringBuilds: false,
		dirs: ['pages', 'app', 'components', 'lib'],
	}
};

export default nextConfig;
