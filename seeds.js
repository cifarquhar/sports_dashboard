use sports_dashboard;

db.fixtures.drop()
db.fixtures.insert([
  {
    homeTeamName: "Arsenal FC",
    coords: {lat: 51.5548885, lng:-0.108438},
    stadium: {'Emirates Stadium'}
  },
  { 
    homeTeamName: "Chelsea FC",
    coords: {lat: 51.4817, lng: 0.1910},
    stadium: {'Stamford Bridge'}
  },
  { 
    homeTeamName: "Manchester City FC",
    coords: {lat:53.474258, lng:-2.26594},
    stadium: {'Etihad Stadium'}
  },
  {   
    homeTeamName: "Southampton FC",
    coords: {lat:50.9014303, lng:-1.4259941},
    stadium: {'St Mary\'s Stadium'}
  },
  {
    homeTeamName: "Stoke City FC",
    coords: {lat:52.9880739, lng:-2.1788224},
    stadium: {'Britannia Stadium'}
  },
  {
    homeTeamName: "Sunderland AFC",
    coords: {lat:54.914561, lng:-1.3905597},
    stadium: {'Stadium of Light'}
  },
  {
    homeTeamName: "West Bromwich Albion FC",
    coords: {lat:52.509038, lng:-1.9661267},
    stadium: {'The Hawthorns'}
  },
  {
    homeTeamName: "Crystal Palace FC",
    coords: {lat:51.3983058, lng:-0.0887589},
    stadium: {'Selhurst Park'}
  },
  {
    homeTeamName: "Manchester United FC",
    coords: {lat:53.4630589, lng:-2.2935288},
    stadium: {'Old Trafford'}
  },
  {
    homeTeamName: "Everton FC",
    coords: {lat:53.438787, lng:-2.968508},
    stadium: {'Anfield'}
  },
  {
    homeTeamName: "Middlesbrough FC",
    coords: {lat:54.5779685, lng:-1.2203541},
    stadium: {'Riverside Stadium'}
  },
  {
    homeTeamName: "Tottenham Hotspur FC",
    coords: {lat:51.6032589, lng:-0.0680208},
    stadium: {'White Hart Lane'}
  },
  {
    homeTeamName: "Watford FC",
    coords: {lat:51.6499828, lng:-0.4038763},
    stadium: {'Vicarage Road'}
  },
  {
    homeTeamName: "West Ham United FC",
    coords: {lat: 51.5386466, lng:-0.0187137},
    stadium: {'London Stadium'}
  }
 
])