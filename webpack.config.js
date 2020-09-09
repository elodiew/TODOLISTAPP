// Webpack uses this to work with directories
const path = require('path');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
const {
    merge
} = require('webpack-merge');
const commonConfig = require('./webpack.config.common');


module.exports = merge(commonConfig, {
    entry: "./src/app.js",
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
});