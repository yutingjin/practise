var webpack = require('webpack');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin("common", "common.js", ["main", "static"]);
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    node: {
        fs: "empty"
    },
    context: __dirname + '/assets',
    entry: {
        main: './index.js',
        static: './static.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css!autoprefixer!sass')
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules|bower_components/,
                loaders: ['babel']
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=10000&name=[name]-[hash].[ext]'
            },
            {
                test: /\.woff|svg|ttf$/,
                loader: 'url?limit=10000&name=[name]-[hash].[ext]'
            }
        ]
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/public/assets'
    },
    plugins: [
        commonsPlugin,
        new ExtractTextPlugin("[name].css")
    ]
};