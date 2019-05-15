const withSass = require('@zeit/next-sass');
module.exports = withSass({
	cssModules: true,
	cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
  publicRuntimeConfig: {
    API_URL: process.env.NODE_ENV === 'Production'? 'http://buyer-publi-1trcvjh3pzava-2127075405.us-east-1.elb.amazonaws.com/api' : 'http://localhost:3000/api'
  }
})