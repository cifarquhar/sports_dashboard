var express = require('express')
var router = express.Router()
var path = require('path')

router.use('/api/favourites', require('./favourites_router'))

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + "/../client/index.html"))
})

router.get('/favourites', function(req, res) {
  res.sendFile(path.join(__dirname + "/../client/favourites.html"))
})

module.exports = router