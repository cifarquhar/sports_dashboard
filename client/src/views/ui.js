var LeagueTable = require("../models/league_table")
var LeagueTableView = require("./league_table_view")
var UpcomingGames = require('../models/upcoming_games_list.js')
var UpcomingGamesView = require('../models/upcoming_games_view.js')
var Favourites = require('../models/favourites_list.js')
var FavouritesView = require('./favourites_view.js')

var UI = function(link){
  if (object === "favourites"){
    this.object = new Favourites()
    this.objectView = new FavouritesView()
  }

  this.object = null
  this.objectView = null

  if (link === "favourites") {
    this.object = new FavouritesList()
    this.objectView = new FavouritesView()
  } else if (link === "table"){
    this.object = new LeagueTable()
    this.objectView = new LeagueTableView()
  } else if (link === "upcoming_games")
    this.object = new UpcomingGamesList()
    this.object = new upcoming_games_view()
  
  this.object.getData(function(objectParam){
    this.objectView.render(objectParam)
  }.bind(this))
}

module.exports = UI