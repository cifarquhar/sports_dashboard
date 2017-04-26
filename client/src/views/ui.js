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
    this.renderAside()
    this.mapInit = new MapInit()
    var FavouritesList= new FavouritesList()
    var favouritesView = new FavouritesView(favouritesList, new mapWrapperFav())
    this.renderLayout(favouritesList, favouritesView)
  } else if (link === "table"){
    this.renderLayout(new LeagueTable(), new LeagueTableView())
  } else if (link === "map") {
    this.renderAside()
    this.mapInit = new MapInit()
    var fixturesList = new FixturesList()
    var fixturesView = new FixturesView(fixturesList, new MapWrapper())
    this.renderLayout(fixturesList, fixturesView)
  } else if (link === "team") {
    this.renderAside()
    this.renderLayout(new TeamStats(), new TeamStatsView())
  } else if (link === "localhost:3000") {
    this.renderAside()
    new IndexView()
  }

}

UI.prototype = {

  renderAside: function() {
    var leagueTable = new LeagueTable()
    var asideTable = new AsideTable()
    leagueTable.getData(function(league) {
      asideTable.render(league)
    })
  },

  renderLayout: function(object, view) {
      object.getData(function(objectParam){
        view.render(objectParam)
      })
    }

}

module.exports = UI