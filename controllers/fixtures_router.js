var express = require('express')
var fixturesRouter = express.Router()
var FixturesQuery = require('../db/fixtures_query.js')
var fixturesQuery = new FixturesQuery()
var Fixture = require('../client/src/models/fixture.js')
var ObjectId = require('mongodb').ObjectIda

fixturesRouter.get('/', function(req, res){
  fixturesQuery.all( function(data){
    res.json(data)
  })
})

fixturesRouter.post('/', function(req, res) {
  var newFixture = new Fixture(req.body)
  fixturesQuery.add(newFixture, function(data){
    res.json(data)
  })
})


module.exports = fixturesRouter;