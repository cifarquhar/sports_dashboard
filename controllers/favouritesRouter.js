var express = require('express')
var favouritesRouter = express.Router()
var FavouritesQuery = require('./db/favourites_query.js')
var favouritesQuery = new FavouritesQuery()

favouritesRouter.get('/', function(req, res){
  countriesQuery.all( function(data){
    res.json(docs)
  })
})

module.exports = favouritesRouter