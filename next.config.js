const withSass = require('@zeit/next-sass');
module.exports = withSass({
	cssModules: true,
	cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
  publicRuntimeConfig: {
    API_URL: process.env.NODE_ENV === 'Production'? 'whatever-its-going-to-be/api' : 'http://localhost:3000/api'
  }
})