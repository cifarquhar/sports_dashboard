var FavouritesView = function(favouritesList, mapWrapperFav) {
  this.element = document.querySelector('#favourites')
  this.favouritesList = favouritesList
  this.mapWrapperFav = mapWrapperFav
  this.favourites = null
  this.favouriteObjects = null
}

FavouritesView.prototype = {

  render: function(fixtures) {
    this.clearList()
    this.favourites = fixtures

    this.addFavouritesToLocalStorage(this.favourites)

    if (this.favourites.length === 0) {
      var li = document.createElement('li')
      li.className = ('fixture-list-item')
      var p = document.createElement('p')
      p.innerText = 'You don\'t have anything in your WatchList!'
      p.id = 'empty-message'
      li.appendChild(p)
      this.element.appendChild(li)
    }

    for (var i = 0; i < this.favourites.length; i++) {
      var li = document.createElement('li')
      li.className = ('fixture-list-item')
      this.populateList(this.favourites[i], li)
      var button = this.createDeleteButton(i)
      li.appendChild(button)
      var hr = document.createElement('hr')
      this.element.appendChild(li)
      this.element.appendChild(hr)
    }

    var favouritesCoordsRetrieval = this.favouritesList.favouritesCoordinates(function(coordinates){
      this.mapWrapperFav.render(coordinates)
      return coordinates
    }.bind(this))
  },

  createPtag: function(id, li, label, text) {
    var pTag = document.createElement('p')
    pTag.id = id
    pTag.innerText = label + text
    li.appendChild(pTag)
    return pTag
  },

  populateList: function(fixture, li) {
    var result = this.formatResult(fixture)
    var date = new Date(fixture.date)
    this.createPtag('date', li, 'Date: ', date.toDateString())
    this.createPtag('home-team', li, 'Home: ', fixture.homeTeamName)
    this.createPtag('away-team', li, 'Away: ', fixture.awayTeamName)
  },

  formatResult: function(fixture) {
    if (fixture.result.goalsHomeTeam === null) {
      return "Unplayed"
    }
    resultString = fixture.result.goalsHomeTeam + " - " + fixture.result.goalsAwayTeam
    return resultString
  },

  createDeleteButton: function(index) {
    var button = document.createElement('button')
    button.innerText = 'Delete from WatchList'
    button.addEventListener('click', function(e) {
      this.favouritesList.delete(this.favourites[index], function(results) {
        
        this.render(results)
      }.bind(this))
    }.bind(this))
    return button
  },

  clearList: function() {
    while (this.element.firstChild) {
        this.element.removeChild(this.element.firstChild)
    }
  },

  addFavouritesToLocalStorage: function(favouriteFixture){
    this.favouriteObjects = favouriteFixture.map(function(fixture) {
      return (fixture.homeTeamName)
    })

    var favouriteGamesStorage = window.JSON.stringify(this.favouriteObjects)
    localStorage.setItem("storedFavouriteGames", favouriteGamesStorage)

    var visibleFavouritesStorage = JSON.parse(localStorage.getItem('storedFavouriteGames')) || []
  }
}


module.exports = FavouritesView