var FavouritesView = function() {
  this.element = document.querySelector('#favourites')
}

FavouritesView.prototype = {

  render: function(favourites) {
    console.log('favs: ', favourites)
    for (var favourite of favourites) {
      var li = document.createElement('li')
      var pDate = this.createPtag('date')
      pDate.innerText = 'hi Brogrammers, this is a favourite'
      li.appendChild(pDate)
      this.element.appendChild(li)
    }
  },

  createPtag: function(id) {
    var pTag = document.createElement('p')
    pTag.id = id
    return pTag
  }
}


module.exports = FavouritesView