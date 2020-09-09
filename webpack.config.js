// Webpack uses this to work with directories
const path = require('path');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')

module.exports = {
    entry: "./src/javascript/app.js",

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
};