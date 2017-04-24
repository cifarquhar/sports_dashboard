var LeagueTable = require("../models/league_table")
var LeagueTableView = require("./league_table_view")
var FavouritesList = require('../models/favourites_list.js')
var FavouritesView = require('./favourites_view.js')
var FixturesView = require('./fixtures_view.js')
var FixturesList = require('../models/fixtures_list.js')
var MapWrapper = require('./map_wrapper.js')


var UI = function(link){
  this.object = null
  this.objectView = null
  this.mapWrapper = null

  if (link === "favourites") {
    this.object = new FavouritesList()
    this.objectView = new FixturesView()
  } else if (link === "table"){
    this.object = new LeagueTable()
    this.objectView = new LeagueTableView()
  } else if (link === "map") {
    this.object = new FixturesList()
    this.objectView = new FixturesView()
    this.mapWrapper = new MapWrapper()
    this.mapWrapper.addBouncingMarker();
  }


  this.object.getData(function(objectParam){
    this.objectView.render(objectParam)
  }.bind(this))


  // this.mapWrapper.onClickEventInfoBox();

}

module.exports = UI