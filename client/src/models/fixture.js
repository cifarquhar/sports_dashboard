var Fixture = function(options) {
  this._id = options._id
  this._links = options._links
  this.date = options.date
  this.status = options.status
  this.matchday = options.matchday
  this.homeTeamName = options.homeTeamName
  this.awayTeamName = options.awayTeamName
  this.result = options.result
  this.odds = options.odds
  this.coords = options.coords
}

Fixture.prototype = {
  addCoords: function(coords) {
    this.coords.push(coords);
  }
}

module.exports = Fixture