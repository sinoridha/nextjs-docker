const {env} = require('./env')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    /*global process*/
    enabled: process.env.ANALYZE === 'true',
})

/*global process*/
if (process.env.ANALYZE === 'true') {
    module.exports = withBundleAnalyzer({})
} else {
    module.exports = {
        publicRuntimeConfig: env
    }
}