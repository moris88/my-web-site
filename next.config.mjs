import withPWAInit from '@ducanh2912/next-pwa'

const withPWA = withPWAInit({
	dest: 'public',
	cacheOnFrontEndNav: true,
	aggressiveFrontEndNavCaching: true,
	reloadOnOnline: true,
	disable: process.env.NODE_ENV === 'development',
	workboxOptions: {
		disableDevLogs: true,
	},
})

/** @type {import('next').NextConfig} */
const nextConfig = {
	allowedDevOrigins: ['http://localhost:3000', 'http://192.168.56.1:3000'],
	turbopack: {},
}

export default withPWA(nextConfig)
