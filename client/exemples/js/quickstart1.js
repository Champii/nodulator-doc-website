var N  = require('nodulator');

var Players = N('player')

Players.Create({login: 'player1', password: 'test'})

  .fail(console.error)

  .then(function (player) {
    player.login = "newLogin";
    return player.Save();
  })

  .then(function (player) {
    // Argument is {login: 'newLogin', password: 'test'}
  });
