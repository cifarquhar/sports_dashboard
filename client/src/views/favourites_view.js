var FavouritesView = function(favouritesList) {
  this.element = document.querySelector('#favourites')
  this.favouritesList = favouritesList
  this.favourites = null
}

FavouritesView.prototype = {

  render: function(fixtures) {
    console.log(fixtures)
    this.favourites = fixtures
    console.log('favs: ', this.favourites)
    for (var i = 0; i < this.favourites.length; i++) {
      var li = document.createElement('li')
      this.populateList(this.favourites[i], li)
      var button = this.createDeleteButton(i)
      li.appendChild(button)
      this.element.appendChild(li)
    }
    console.log('favs: ', this.favourites)
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
    this.createPtag('date', li, 'Date: ', fixture.date)
    this.createPtag('home-team', li, 'Home: ', fixture.homeTeamName)
    this.createPtag('away-team', li, 'Away: ', fixture.awayTeamName)
    this.createPtag('result', li, 'Result: ', result)
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
    button.innerText = 'Delete favourite'
    button.addEventListener('click', function(e) {
      console.log(this.favourites[index])
      this.favouritesList.delete(this.favourites[index], function() {})
    }.bind(this))
    return button
  }
}


module.exports = FavouritesView