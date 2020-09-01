// Webpack uses this to work with directories
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


// This is the main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = {
    mode: process.env.NODE_ENV,
    entry: './src/javascript/app.js',




    // Path and filename of your result bundle.
    // Webpack will bundle all JavaScript into this file
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '/assets/style/',
                    },
                },
                'css-loader',
            ],
        }, ]
    },
    plugins: [new MiniCssExtractPlugin()],
    // Default mode for Webpack is production.
    // Depending on mode Webpack will apply different things
    // on final bundle. For now we don't need production's JavaScript 
    // minifying and other thing so let's set mode to development
    mode: 'development'
};