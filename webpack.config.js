const webpack = require('webpack');
const path = require('path');

const BUILD_DIRECTORY = path.resolve(__dirname, 'public');
const APP_DIRECTORY = path.resolve(__dirname, 'src');
const TEST_DIRECTORY = path.resolve(__dirname, 'test');

const config = {
    entry: APP_DIRECTORY + '/index.jsx',
    output: {
        path: BUILD_DIRECTORY,
        filename: 'bundle.js',
        publicPath: 'https://localhost:8080/public'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'env']
                }
            },
            {
                test: /\.scss$/,
                use: [{
                        loader: "style-loader" // creates style nodes from JS strings
                    }, {
                        loader: "css-loader" // translates CSS into CommonJS
                    }, {
                        loader: "sass-loader" // compiles Sass to CSS
                }]
            }
        ]
    },
    devServer: {
        contentBase: './public',
        hot: true,
        inline: true,
        port: 8080,
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};

module.exports = config;
