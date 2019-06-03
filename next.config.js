const {env} = require('./env')

module.exports = {
    publicRuntimeConfig: env
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({})