var FavouritesView = function() {
  this.element = document.querySelector('#favourites')
}

FavouritesView.prototype = {

  render: function(fixtures) {
    console.log("this is favourites render")
    // for (var fixtures of fixtures) {
    //   var li = this.element.createElement('li')
    //   console.log('favourites li', li)
    //   var pDate = createPtag('date')
    //   pDate.innerText = 'hi Brogrammers, this is a favourite'
    //   li.appendChild(pDate)
    //   this.element.appendChild(li)
    },

  createPtag: function(id) {
    var pTag = this.element.createElement('p')
    pTag.id = id
    return pTag
  }
}


module.exports = FavouritesView