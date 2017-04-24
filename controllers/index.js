var express = require('express')
var router = express.Router()
var path = require('path')

router.use('/api/favourites', require('./favourites_router'))
router.use('/api/fixtures', require('./fixtures_router'))

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + "/../client/index.html"))
})

router.get('/table', function(req, res) {
  res.sendFile(path.join(__dirname + "/../client/league_table.html"))
})

router.get('/favourites', function(req, res) {
  res.sendFile(path.join(__dirname + "/../client/favourites.html"))
})

router.get('/map', function(req, res) {
  res.sendFile(path.join(__dirname + "/../client/map.html"))
})

router.get('/team', function(req, res) {
  res.sendFile(path.join(__dirname + "/../client/team.html"))
})

module.exports = router