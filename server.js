const express = require('express')
const webpack = require('webpack')
const path = require('path')
const WebpackDevMiddleware = require('webpack-dev-middleware')
const WebpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config')
const compiler = webpack(config)
const child_process = require("child_process")

app = express()
app.set('views', './src')
app.set('view engine', 'ejs')
app.use(express.static('dist'));


app.use(WebpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {colors: true}
}))
app.use(WebpackHotMiddleware(compiler))

var router = express.Router()

router.use('/', function (req, res, next) {
    res.redirect('/dist')
})
app.use(router)

app.listen(8080, function () {
    console.log('Listening on 8080')
})

child_process.exec("start http://localhost:8080/#/")
