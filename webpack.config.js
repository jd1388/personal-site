var webpack = require('webpack');
var path = require('path');

var BUILD_DIRECTORY = path.resolve(__dirname, 'public');
var APP_DIRECTORY = path.resolve(__dirname, 'src');

var config = {
    entry: APP_DIRECTORY + '/index.jsx',
    output: {
        path: BUILD_DIRECTORY,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIRECTORY,
                loaderr: 'babel-loader'
            }
        ]
    }
};

module.exports = config;
