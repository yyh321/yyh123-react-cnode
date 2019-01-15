
const path = require('path')
const baseConfig = require('./webpack.base')
const webpackMerge = require('webpack-merge')

module.exports = webpackMerge(baseConfig, {
    target: 'node',
    entry: {
        app: path.join(__dirname, '../client/server-entry.js')
    },
    externals: Object.keys(require('../package.json').dependencies),
    output: {
        filename: 'server-entry.js',
        libraryTarget: 'commonjs2'
    }
})
