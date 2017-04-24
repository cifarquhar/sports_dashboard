use sports_dashboard;

db.fixtures.insert([
  { 
    date: "2017-04-27",
    status: "POSTPONED",
    matchday: 26,
    homeTeamName: "Manchester City FC",
    awayTeamName: "Manchester United FC",
    coords: {lat:53.474258, lng:-2.26594}
  },
  {   
    date: "2017-04-29T14:00:00Z",
    status: "TIMED",
    matchday: 35,
    homeTeamName: "Southampton FC",
    awayTeamName: "Hull City FC",
    coords: {lat:50.9014303, lng:-1.4259941}
  },
  {
    date: "2017-04-29T14:00:00Z",
    status: "TIMED",
    matchday: 35,
    homeTeamName: "Stoke City FC",
    awayTeamName: "West Ham United FC",
    coords: {lat:52.9880739, lng:-2.1788224}
  },
  {
    date: "2017-04-29T14:00:00Z",
    status: "TIMED",
    matchday: 35,
    homeTeamName: "Sunderland AFC",
    awayTeamName: "AFC Bournemouth",
    coords: {lat:54.914561, lng:-1.3905597}
  },
  {
    date: "2017-04-29T14:00:00Z",
    status: "TIMED",
    matchday: 35,
    homeTeamName: "West Bromwich Albion FC",
    awayTeamName: "Leicester City FC",
    coords: {lat:52.509038, lng:-1.9661267}
  },
  {
    date: "2017-04-29T16:30:00Z",
    status: "TIMED",
    matchday: 35,
    homeTeamName: "Crystal Palace FC",
    awayTeamName: "Burnley FC",
    coords: {lat:51.3983058, lng:-0.0887589}
  },
  {
    date: "2017-04-30T11:00:00Z",
    status: "TIMED",
    matchday: 35,
    homeTeamName: "Manchester United FC",
    awayTeamName: "Swansea City FC",
    coords: {lat:53.4630589, lng:-2.2935288}
  },
  {
    date: "2017-04-30T13:05:00Z",
    status: "TIMED",
    matchday: 35,
    homeTeamName: "Everton FC",
    awayTeamName: "Chelsea FC",
    coords: {lat:53.438787, lng:-2.968508}
  },
  {
    date: "2017-04-30T13:05:00Z",
    status: "TIMED",
    matchday: 35,
    homeTeamName: "Middlesbrough FC",
    awayTeamName: "Manchester City FC",
    coords: {lat:54.5779685, lng:-1.2203541}
  },
  {
    date: "2017-04-30T15:30:00Z",
    status: "TIMED",
    matchday: 35,
    homeTeamName: "Tottenham Hotspur FC",
    awayTeamName: "Arsenal FC",
    coords: {lat:51.6032589, lng:-0.0680208}
  },
  {
    date: "2017-05-01T19:00:00Z",
    status: "TIMED",
    matchday: 35,
    homeTeamName: "Watford FC",
    awayTeamName: "Liverpool FC",
    coords: {lat:51.6499828, lng:-0.4038763}
  }
  // },
  // {
  //   date: "2017-05-05T19:00:00Z",
  //   status: "TIMED",
  //   matchday: 36,
  //   homeTeamName: "West Ham United FC",
  //   awayTeamName: "Tottenham Hotspur FC",
  //   coords:
  // },
  // {
  //   date: "2017-05-06T11:30:00Z",
  //   status: "TIMED",
  //   matchday: 36,
  //   homeTeamName: "Manchester City FC",
  //   awayTeamName: "Crystal Palace FC",
  //   coords:
  // },
  // {
  //   date: "2017-05-06T14:00:00Z",
  //   status: "TIMED",
  //   matchday: 36,
  //   homeTeamName: "Burnley FC",
  //   awayTeamName: "West Bromwich Albion FC",
  //   coords: 
  // },
  // {
  //   date: "2017-05-06T14:00:00Z",
  //   status: "TIMED",
  //   matchday: 36,
  //   homeTeamName: "Hull City FC",
  //   awayTeamName: "Sunderland AFC",
  //   coords:
  // },
  // {
  //   date: "2017-05-06T14:00:00Z",
  //   status: "TIMED",
  //   matchday: 36,
  //   homeTeamName: "Leicester City FC",
  //   awayTeamName: "Watford FC",
  //   coords:
  // },
  // {
  //   date: "2017-05-06T14:00:00Z",
  //   status: "TIMED",
  //   matchday: 36,
  //   homeTeamName: "AFC Bournemouth",
  //   awayTeamName: "Stoke City FC",
  //   coords:
  // },
  // {
  //   date: "2017-05-06T16:30:00Z",
  //   status: "TIMED",
  //   matchday: 36,
  //   homeTeamName: "Swansea City FC",
  //   awayTeamName: "Everton FC",
  //   coords:
  // },
  // {
  //   date: "2017-05-07T12:30:00Z",
  //   status: "TIMED",
  //   matchday: 36,
  //   homeTeamName: "Liverpool FC",
  //   awayTeamName: "Southampton FC",
  //   coords:
  // },
  // {
  //   date: "2017-05-07T15:00:00Z",
  //   status: "TIMED",
  //   matchday: 36,
  //   homeTeamName: "Arsenal FC",
  //   awayTeamName: "Manchester United FC",
  //   coords:
  // },
  // {
  //   date: "2017-05-08T19:00:00Z",
  //   status: "TIMED",
  //   matchday: 36,
  //   homeTeamName: "Chelsea FC",
  //   awayTeamName: "Middlesbrough FC",
  //   coords:
  // },
  // {
  //   date: "2017-05-10T18:45:00Z",
  //   status: "POSTPONED",
  //   matchday: 26,
  //   homeTeamName: "Southampton FC",
  //   awayTeamName: "Arsenal FC",
  //   coords:
  // },
  // {
  //   date: "2017-05-12T18:45:00Z",
  //   status: "SCHEDULED",
  //   matchday: 37,
  //   homeTeamName: "Everton FC",
  //   awayTeamName: "Watford FC",
  //   coords: 
  // },
  // {
  //   date: "2017-05-12T19:00:00Z",
  //   status: "SCHEDULED",
  //   matchday: 37,
  //   homeTeamName: "West Bromwich Albion FC",
  //   awayTeamName: "Chelsea FC",
  //   coords:
  // },
  // {
  //   date: "2017-05-13T11:30:00Z",
  //   status: "SCHEDULED",
  //   matchday: 37,
  //   homeTeamName: "Manchester City FC",
  //   awayTeamName: "Leicester City FC",
  //   coords:
  // },
  // {
  //   date: "2017-05-13T14:00:00Z",
  //   status: "SCHEDULED",
  //   matchday: 37,
  //   homeTeamName: "Middlesbrough FC",
  //   awayTeamName: "Southampton FC",
  //   coords:
  // },
  // {
  //   date: "2017-05-13T14:00:00Z",
  //   status: "SCHEDULED",
  //   matchday: 37,
  //   homeTeamName: "AFC Bournemouth",
  //   awayTeamName: "Burnley FC",
  //   coords:
  // },
  // {
  //   date: "2017-05-13T14:00:00Z",
  //   status: "SCHEDULED",
  //   matchday: 37,
  //   homeTeamName: "Sunderland AFC",
  //   awayTeamName: "Swansea City FC",
  //   coords: 
  // },
  // {
  //   date: "2017-05-13T16:30:00Z",
  //   status: "SCHEDULED",
  //   matchday: 37,
  //   homeTeamName: "Stoke City FC",
  //   awayTeamName: "Arsenal FC",
  //   coords:
  // },
  // {
  //   date: "2017-05-14T11:00:00Z",
  //   status: "SCHEDULED",
  //   matchday: 37,
  //   homeTeamName: "Crystal Palace FC",
  //   awayTeamName: "Hull City FC",
  //   coords: 
  // },
  // {
  //   date: "2017-05-14T13:15:00Z",
  //   status: "SCHEDULED",
  //   matchday: 37,
  //   homeTeamName: "West Ham United FC",
  //   awayTeamName: "Liverpool FC",
  //   coords:
  // },
  // {
  //   date: "2017-05-14T15:30:00Z",
  //   status: "SCHEDULED",
  //   matchday: 37,
  //   homeTeamName: "Tottenham Hotspur FC",
  //   awayTeamName: "Manchester United FC",
  // },
  // {
  //   date: "2017-05-15T19:00:00Z",
  //   status: "POSTPONED",
  //   matchday: 28,
  //   homeTeamName: "Chelsea FC",
  //   awayTeamName: "Watford FC",
  //   coords:
  // },
  // {
  //   date: "2017-05-16T18:45:00Z",
  //   status: "POSTPONED",
  //   matchday: 34,
  //   homeTeamName: "Arsenal FC",
  //   awayTeamName: "Sunderland AFC",
  //   coords: 
  // },
  // {
  //   date: "2017-05-16T19:00:00Z",
  //   status: "POSTPONED",
  //   matchday: 34,
  //   homeTeamName: "Manchester City FC",
  //   awayTeamName: "West Bromwich Albion FC",
  //   coords: 
  // },
  // {
  //   date: "2017-05-17T18:45:00Z",
  //   status: "POSTPONED",
  //   matchday: 28,
  //   homeTeamName: "Southampton FC",
  //   awayTeamName: "Manchester United FC",
  //   coords:
  // },
  // {
  //   date: "2017-05-18T18:45:00Z",
  //   status: "POSTPONED",
  //   matchday: 34,
  //   homeTeamName: "Leicester City FC",
  //   awayTeamName: "Tottenham Hotspur FC",
  //   coords:
  // },
  // {
  //   date: "2017-05-21T14:00:00Z",
  //   status: "SCHEDULED",
  //   matchday: 38,
  //   homeTeamName: "Burnley FC",
  //   awayTeamName: "West Ham United FC",
  //   coords:
  // },
  // {
  //   date: "2017-05-21T14:00:00Z",
  //   status: "SCHEDULED",
  //   matchday: 38,
  //   homeTeamName: "Chelsea FC",
  //   awayTeamName: "Sunderland AFC",
  //   coords:  
  // },
  // {
  //   date: "2017-05-21T14:00:00Z",
  //   status: "SCHEDULED",
  //   matchday: 38,
  //   homeTeamName: "Hull City FC",
  //   awayTeamName: "Tottenham Hotspur FC",
  //   coords: 
  // },
  // {
  //   date: "2017-05-21T14:00:00Z",
  //   status: "SCHEDULED",
  //   matchday: 38,
  //   homeTeamName: "Leicester City FC",
  //   awayTeamName: "AFC Bournemouth",
  //   coords:
  // },
  // {
  //   date: "2017-05-21T14:00:00Z",
  //   status: "SCHEDULED",
  //   matchday: 38,
  //   homeTeamName: "Liverpool FC",
  //   awayTeamName: "Middlesbrough FC",
  //   coords:
  // },
  // {
  //   date: "2017-05-21T14:00:00Z",
  //   status: "SCHEDULED",
  //   matchday: 38,
  //   homeTeamName: "Southampton FC",
  //   awayTeamName: "Stoke City FC",
  //   coords: 
  // },
  // {
  //   date: "2017-05-21T14:00:00Z",
  //   status: "SCHEDULED",
  //   matchday: 38,
  //   homeTeamName: "Swansea City FC",
  //   awayTeamName: "West Bromwich Albion FC",
  //   coords:
  // },
  // {
  //   date: "2017-05-21T14:00:00Z",
  //   status: "SCHEDULED",
  //   matchday: 38,
  //   homeTeamName: "Watford FC",
  //   awayTeamName: "Manchester City FC",
  //   coords:
  // },
  // {
  //   date: "2017-05-21T14:00:00Z",
  //   status: "SCHEDULED",
  //   matchday: 38,
  //   homeTeamName: "Arsenal FC",
  //   awayTeamName: "Everton FC",
  //   coords
  // },
  // {
  //   date: "2017-05-21T14:00:00Z",
  //   status: "SCHEDULED",
  //   matchday: 38,
  //   homeTeamName: "Manchester United FC",
  //   awayTeamName: "Crystal Palace FC",
  //   coords:
  // }
  ]);