var LeagueTable = require("../models/league_table")
var LeagueTableView = require("./league_table_view")
var FavouritesList = require('../models/favourites_list.js')
var FavouritesView = require('./favourites_view.js')
var FixturesView = require('./fixtures_view.js')
var FixturesList = require('../models/fixtures_list.js')
var TeamStats = require("../models/team_stats")
var TeamStatsView = require("../views/team_stats_view")
var NavBar = require("../views/nav_bar")
var IndexView = require("../views/index_view")
var MapWrapper = require('./map_wrapper.js')
var MapWrapperFav = require('./map_wrapper_fav.js')
var MapInit = require('../models/map_init.js')
var AsideTable = require('./aside_table.js')

var UI = function(link){
  this.navBar = new NavBar()

  this.object = null
  this.objectView = null
  this.mapWrapper = null
  this.mapWrapperFav = null
  this.mapInit = null

  console.log('this is link: ', link)
  if (link === "favourites") {
    this.mapInit = new MapInit()
    this.renderAside()
    this.object = new FavouritesList()
    this.mapWrapperFav = new MapWrapperFav()
    this.objectView = new FavouritesView(this.object, this.mapWrapperFav)
  } else if (link === "table"){
    this.object = new LeagueTable()
    this.objectView = new LeagueTableView()
  } else if (link === "map") {
    this.renderAside()
    this.object = new FixturesList()
    this.mapInit = new MapInit()
    this.mapWrapper = new MapWrapper()
    this.objectView = new FixturesView(this.object, this.mapWrapper)
  } else if (link === "team") {
    this.renderAside()
    this.object = new TeamStats()
    this.objectView = new TeamStatsView()
  } else if (link === "localhost:3000") {
    this.renderAside()
    this.objectView = new IndexView()
  }

  if (this.object) {
    this.object.getData(function(objectParam){
      this.objectView.render(objectParam)
    }.bind(this))
  }

}

UI.prototype = {

  renderAside: function() {
    var leagueTable = new LeagueTable()
    var asideTable = new AsideTable()
    leagueTable.getData(function(league) {
      asideTable.render(league)
    })
  }

}

module.exports = UI