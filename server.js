var express = require('express')
var morgan = require('morgan')
var app = express()
var port = process.env.PORT || 3000
var router = express.Router()
var _ = require('lodash')

app.use(express.static(__dirname + '/dist')) // set the static files location for the static html
app.use(morgan('dev'))                     // log every request to the console

//TODO: Only enable CORS for dev servers
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
});

router.get('/', function(req, res, next) {
    res.render('index.html')
})

app.use('/', router)

app.listen(port)
console.log('App running on port', port)
