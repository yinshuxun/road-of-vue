const fs = require('fs')
const express = require('express')
const webpack = require('webpack')
const path = require('path')
const WebpackDevMiddleware = require('webpack-dev-middleware')
const WebpackHotMiddleware = require('webpack-hot-middleware')
// const config = require('../config/webpack.server.config')
// const compiler = webpack(config)
const child_process = require("child_process")
const resolve = file => path.resolve(__dirname, file)

process.env.VUE_ENV = 'server'

app = express()
app.set('views', './src')
app.set('view engine', 'ejs')
// app.use(express.static('dist'));
//
// app.use(WebpackDevMiddleware(compiler, {
//     publicPath: config.output.publicPath,
//     stats: {colors: true}
// }))
// app.use(WebpackHotMiddleware(compiler))

let indexHTML // generated by html-webpack-plugin
let renderer  // created from the webpack-generated server bundle

function parseIndex (template) {
    const contentMarker = '<!-- APP -->'
    const i = template.indexOf(contentMarker)
    return {
        head: template.slice(0, i),
        tail: template.slice(i + contentMarker.length)
    }
}

function createRenderer (bundle) {
    // https://github.com/vuejs/vue/blob/next/packages/vue-server-renderer/README.md#why-use-bundlerenderer
    return require('vue-server-renderer').createBundleRenderer(bundle, {
        cache: require('lru-cache')({
            max: 1000,
            maxAge: 1000 * 60 * 15
        })
    })
}

renderer = createRenderer(fs.readFileSync(resolve('../../dist/app.js'), 'utf-8'))

indexHTML = parseIndex(fs.readFileSync(resolve('../../dist/index.html'), 'utf-8'))

app.get('*', (req, res) => {
    if (!renderer) {
        return res.end('waiting for compilation... refresh in a moment.')
    }

    console.log("document::",document)
    res.setHeader("Content-Type", "text/html");
    var s = Date.now()
    const context = { url: req.url }

    const renderStream = renderer.renderToStream(context)

    renderStream.once('data', () => {
        res.write(indexHTML.head)
    })

    renderStream.on('data', chunk => {
        res.write(chunk)
    })

    renderStream.on('end', () => {
        // embed initial store state
        if (context.initialState) {
            res.write(
                `<script>window.__INITIAL_STATE__=${
                    serialize(context.initialState, { isJSON: true })
                    }</script>`
            )
        }
        res.end(indexHTML.tail)
        console.log(`whole request: ${Date.now() - s}ms`)
    })

    renderStream.on('error', err => {
        if (err && err.code === '404') {
            res.status(404).end('404 | Page Not Found')
            return
        }
        // Render Error Page or Redirect
        res.status(500).end('Internal Error 500')
        console.error(`error during render : ${req.url}`)
        console.error(err)
    })
})

app.listen(3001, function () {
    console.log('Listening on 3001')
})

child_process.exec("start http://localhost:8080/#/")
