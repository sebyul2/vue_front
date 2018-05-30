const express = require('express')
const bluebird = require('bluebird')
const path = require('path')
const morgan = require('morgan')
const config = require('config')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./connect-db')

global.Promise = bluebird
global.root = path.resolve('.')

const app = express()
app.use(cors())
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/assets', express.static('assets'))
app.use('/dist', express.static('dist'))
app.use('/api', express.static('apidoc/dist'))

app.get('/', (req, res) => {
  res.sendFile('index.html', { root : __dirname })
});

app.get('/api/doc', (req, res) => {
  res.sendFile('/apidoc/dist/index.html', { root : __dirname })
});

const mainRouter = require('./route')
mainRouter(app)

db.connect().then(() => {
  const port = config.app.port
  app.listen(port, () => {
    console.log(`app listening on port ${port}!`)
  })
})