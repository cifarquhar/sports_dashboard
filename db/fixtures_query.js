var MongoClient = require('mongodb').MongoClient

var FixturesQuery = function(){
  this.url = 'mongodb://localhost:27017/sports_dashboard'
}

FixturesQuery.prototype = {

  all: function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      if(db) {
        var collection = db.collection('fixtures')
        collection.find().toArray(function(err, data){
          onQueryFinished(data)
        })
      }
    })
  }
}

module.exports = FixturesQuery