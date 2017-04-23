var FavouritesView = function(favouritesList) {
  this.element = document.querySelector('#favourites')
  this.favouritesList = favouritesList
  this.favourites = null
}

FavouritesView.prototype = {

  render: function(fixtures) {
    this.clearList()
    this.favourites = fixtures
    for (var i = 0; i < this.favourites.length; i++) {
      var li = document.createElement('li')
      this.populateList(this.favourites[i], li)
      var button = this.createDeleteButton(i)
      li.appendChild(button)
      this.element.appendChild(li)
    }
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
  }
}


module.exports = FavouritesView