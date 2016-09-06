const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ROOT_PATH = path.resolve(__dirname);

// const WebpackDevServer = require('webpack-dev-server');

var devConfig = {
    entry: {
        app: [`${ROOT_PATH}/src/main.js`, hotMiddlewareScript]
    },
    output: {
        path: `${ROOT_PATH}/dist`,
        filename: '[name].js',
        publicPath: publicPath
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                presets: ['es2015']
            },
            {
                test: /\.html$/,
                loader: 'vue-html'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'road of vue',
            template: `${ROOT_PATH}/src/index.html`
        })
    ]
    // ,
    // devServer: {
    //     historyApiFallback: true,
    //     hot: true,
    //     inline: true,
    //     progress: true,
    //     port: 3002
    // }
}

module.exports = devConfig;