var express = require('express')
var favouritesRouter = express.Router()
var FavouritesQuery = require('../db/favourites_query.js')
var favouritesQuery = new FavouritesQuery()
var Fixture = require('../client/src/models/fixture.js')
var ObjectId = require('mongodb').ObjectId

favouritesRouter.get('/', function(req, res){
  favouritesQuery.all( function(data){
    res.json(data)
  })
})

favouritesRouter.post('/', function(req, res) {
  var newFixture = new Fixture(req.body)
  favouritesQuery.add(newFixture, function(data){
    res.json(data)
  })
})

favouritesRouter.delete('/:id', function(req, res) {
  var objectId = ObjectId(req.body._id)
  var id = { _id: objectId}
  favouritesQuery.delete(id, function(data) {
    res.json(data)
  })
})

module.exports = favouritesRouter