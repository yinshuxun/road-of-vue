const express = require('express')
const webpack = require('webpack')
const WebpackDevMiddleware = require('webpack-dev-middleware')
const WebpackHotMiddleware = require('webpack-hot-middleware')
const config = require('../config/base')
const compiler = webpack(config)
const childProcess = require('child_process')

const app = express()
app.set('views', './src')
app.set('view engine', 'ejs')
app.use(express.static('dist'))

app.use(WebpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {colors: true}
}))
app.use(WebpackHotMiddleware(compiler))

var router = express.Router()

router.use('/index', function (req, res, next) {
  res.redirect('./dist')
})
app.use(router)

app.listen(3001, function () {
  console.log('Listening on 3001')
})

childProcess.exec('start http://localhost:8080/#/')
