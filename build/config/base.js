import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import vConsolePlugin from 'vconsole-webpack-plugin';

const ENV = process.env.NODE_ENV;
const ROOT_PATH = path.resolve('./')
const publicPath = ENV == 'production' ? '' : 'http://localhost:3001/dist'

var devConfig = {
    entry: {
        app: [
            `${ROOT_PATH}/src/main.js`,
            'webpack/hot/dev-server',
            'webpack-hot-middleware/client'
        ]
    },
    resolve: {
        modules: [`${ROOT_PATH}/node_modules`],
        extensions: ['.js', '.vue'],
        alias: {
            'src': path.resolve(__dirname, '../src'),
            'assets': path.resolve(__dirname, '../src/assets'),
            'components': path.resolve(__dirname, '../src/components'),
            'modules': path.resolve(__dirname, '../src/modules'),
            'vue': 'vue/dist/vue'
        },
        enforceExtension: false
    },
    resolveLoader: {
        moduleExtensions: ['-loader']
    },
    output: {
        path: `${ROOT_PATH}/dist/`,
        publicPath: publicPath,
        filename: '[name].js',
        chunkFilename:'[id].[chunkhash].js?'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue',
                options: {
                    cssModules: {
                        localIdentName: '[path][name]---[local]---[hash:base64:5]',
                        camelCase: true
                    },
                    loaders: {
                        stylus: 'vue-style!css?sourceMap!postcss!stylus',
                        js: 'babel'
                    }
                }
            },
            {
                test: /\.styl$/,
                loader: 'style!css?-minimize!postcss!stylus'
            },
            {
                test: /\.css$/,
                loader: 'style!css?-minimize!postcss'
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
                test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)(\?.*)?$/,
                // do NOT base64encode @1x/@2x/@3x images
                exclude: /@[1-3]x/,
                loader: 'url',
                options: {
                    limit: 10000,
                    name: '[name].[ext]?[hash:7]'
                }
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'road of vue',
            template: `ejs!${ROOT_PATH}/src/index.ejs`,
            filename: 'index.html',
            minify: {
                collapseWhitespace: true,
                minifyJS: true
            }
        }),
        new vConsolePlugin({
            enable: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.LoaderOptionsPlugin({
            vue: {
                postcss: [require('postcss')()]
            }
        })

    ]
}
if (process.env.NODE_ENV === 'production') {
    devConfig.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                unused: true,
                dead_code: true,
                warnings: false
            },
            sourceMap: true
        })
    )
}

module.exports = devConfig
