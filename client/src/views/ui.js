var LeagueTable = require("../models/league_table")
var LeagueTableView = require("./league_table_view")
var FavouritesList = require('../models/favourites_list.js')
var FavouritesView = require('./favourites_view.js')
var FixturesView = require('./fixtures_view.js')
var FixturesList = require('../models/fixtures_list.js')
var TeamStats = require("../models/team_stats")
var TeamStatsView = require("../views/team_stats_view")


var UI = function(link){
  this.object = null
  this.objectView = null

  if (link === "favourites") {
    this.object = new FavouritesList()
    this.objectView = new FavouritesView()
  } else if (link === "table"){
    this.object = new LeagueTable()
    this.objectView = new LeagueTableView()
  } else if (link === "map") {
    this.object = new FixturesList()
    this.objectView = new FixturesView(new FavouritesList)
  } else if (link ==="team") {
    this.object = new TeamStats()
    this.objectView = new TeamStatsView()
  }


  this.object.getData(function(objectParam){
    this.objectView.render(objectParam)
  }.bind(this))
}

module.exports = UI