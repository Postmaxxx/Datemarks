/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false



// for gh-pages
// let assetPrefix = '.'
// let basePath = ''

// if (isGithubActions) {
//   const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
//   assetPrefix = `/${repo}/`
//   basePath = `/${repo}`
// }

//for AWS
let assetPrefix = ''
let basePath = ''

if (isGithubActions) {
	const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

}

// const mode = process.env.NODE_ENV?.trim() || 'development';

// const pathToEnv = `.env.${mode}`.trim()
// require('dotenv').config({
//     path: pathToEnv,
// })
// console.log('ENV mode: ', pathToEnv);
// console.log('Port: ', process.env.PORT);




//for Static pages
// const nextConfig = {
// 	assetPrefix: assetPrefix,
// 	basePath: basePath,
// 	distDir: 'build',
// 	output: "export",
// 	images: {
// 		unoptimized: true,
// 	},
// 	// reactStrictMode: true,
// 	// trailingSlash: true,
// 	// redirects: async () => {
// 	// 	return [
// 	// 	  {
// 	// 		source: '/',
// 	// 		destination: '/login',
// 	// 		permanent: true,
// 	// 	  },
// 	// 	];
// 	//   },
// }

//for SSR
const nextConfig = {
	images: {
		deviceSizes: [300, 360, 420, 480, 640, 760, 890, 1080, 1200, 1600, 1920], //2048, 3840
		// unoptimized: true,
	},
	assetPrefix: assetPrefix,
	basePath: basePath,
	distDir: 'out',
}


module.exports = nextConfig
