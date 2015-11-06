var N  = require('nodulator');

var Players = N('player')

Players.Create({login: 'player1', password: 'test'})
  .Set({login: 'newLogin'})
  .Log().Catch(console.error)
