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
        publicPath: 'http://localhost:7700/public'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            }
        ]
    },
    devServer: {
        contentBase: './public',
        hot: true,
        inline: true,
        port: 7700,
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};

module.exports = config;
