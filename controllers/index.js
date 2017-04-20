var express = require('express')
var router = express.Router()
var path = require('path')

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + "/../client/index.html"))
})

router.get('/table', function(req, res) {
  res.sendFile(path.join(__dirname + "/../client/league_table.html"))
})

module.exports = router