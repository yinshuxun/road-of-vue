const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ROOT_PATH = path.resolve("./");

const publicPath = 'http://localhost:3001/dist';

var devConfig = {
    resolve:{
        modules:[`${ROOT_PATH}/node_modules`],
        extensions:['.js','.vue'],
        alias: {
            'src': path.resolve(__dirname, '../src'),
            'assets': path.resolve(__dirname, '../src/assets'),
            'components': path.resolve(__dirname, '../src/components'),
            'vue':'vue/dist/vue'
        }
    },

    entry: {
        app: [
            `${ROOT_PATH}/src/main.js`,
            'webpack/hot/dev-server',
            'webpack-hot-middleware/client'
        ]
    },
    output: {
        path: `${ROOT_PATH}/dist`,
        filename: '[name].js',
        publicPath: publicPath
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue',
                options:{
                    sourceMap:true
                }
            },
            {
                test: /\.styl$/,
                loader: 'style!css?-minimize!postcss!stylus'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
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
    devtool:'source-map',
    plugins: [
        // new webpack.LoaderOptionsPlugin({
        //     options: {
        //         devTools: true
        //     }
        // }),
        new htmlWebpackPlugin({
            title: 'road of vue',
            template: `ejs!${ROOT_PATH}/src/index.ejs`,
            filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = devConfig;