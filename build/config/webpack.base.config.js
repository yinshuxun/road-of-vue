const path = require('path')
const vueConfig = require('./vue-loader.config')
const ROOT_PATH = path.resolve("./")

module.exports = {
    devtool: '#source-map',
    entry: {
        app: `${ROOT_PATH}/src/client-entry.js`,
        vendor: [
            'es6-promise',
            'firebase/app',
            'firebase/database',
            'vue',
            'vue-router',
            'vuex',
            'vuex-router-sync'
        ],
    },
    resolveLoader: {
        moduleExtensions: ['-loader']
    },
    output: {
        path: path.resolve(__dirname, '../../dist'),
        publicPath: '/dist/',
        filename: '[name].[chunkhash].js'
    },
    resolve: {
        alias: {
            'public': path.resolve(__dirname, `${ROOT_PATH}/src/public`),
            'src': path.resolve(__dirname, '../src'),
            'assets': path.resolve(__dirname, '../src/assets'),
            'components': path.resolve(__dirname, '../src/components'),
            'vue': 'vue/dist/vue',
        },
        enforceExtension: false,
        extensions: ['.js', '.vue']
    },
    module: {
        noParse: /es6-promise\.js$/, // avoid webpack shimming process
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueConfig
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.js$/,
                loader: 'buble-loader',
                exclude: /node_modules/,
                options: {
                    objectAssign: 'Object.assign'
                }
            },
            {
                test: /\.styl$/,
                loader: 'style!css?-minimize!postcss!stylus'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    }
}
