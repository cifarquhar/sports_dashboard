var MongoClient = require('mongodb').MongoClient

var UpcomingGamesQuery = function(){
  this.url = 'mongodb://localhost:27017/sports_dashboard'
}

UpcomingGamesQuery.prototype = {

  scheduledGamesDB: function() {
    MongoClient.connect(this.url, function(err, db) {
      if(db) {
        var collection = db.collection('upcomingGames')
        collection.find().toArray(function(err, data) {
          onQueryFinished(data)
        })
      }
    })
  }
}

module.exports = UpcomingGamesQuery