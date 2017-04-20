var express = require('express')
var favouritesRouter = express.Router()
var FavouritesQuery = require('../db/favourites_query.js')
var favouritesQuery = new FavouritesQuery()

favouritesRouter.get('/', function(req, res){
  favouritesQuery.all( function(data){
    res.json(data)
  })
})

// favouritesRouter.post('/', function(req, res) {
//   favouritesQuery.add()
// })

module.exports = favouritesRouter