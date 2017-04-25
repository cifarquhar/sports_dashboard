var MongoClient = require('mongodb').MongoClient

var FavouritesQuery = function(){
  this.url = 'mongodb://localhost:27017/sports_dashboard'
}

FavouritesQuery.prototype = {

  all: function(onQueryFinished) {
    MongoClient.connect(this.url, function(err, db) {
      if(db) {
        var collection = db.collection('favourites')
        collection.find().toArray(function(err, data) {
          onQueryFinished(data)
        })
        db.close()
      }
    })
  },

  add: function(fixture, onQueryFinished) {
    MongoClient.connect(this.url, function(err, db) {
      if (db) {
        var collection = db.collection('favourites')
        collection.insert(fixture)
        collection.find().toArray(function(err, data) {
          onQueryFinished(data)
        })
      db.close()
      }
    })
  },
  
  delete: function(id, onQueryFinished) {
    MongoClient.connect(this.url, function(err, db) {
      if (db) {
        var collection = db.collection('favourites')
        collection.remove(id)
        collection.find().toArray(function(err, data) {
          onQueryFinished(data)
        })
        db.close()
      }
    })
  }
}

module.exports = FavouritesQuery