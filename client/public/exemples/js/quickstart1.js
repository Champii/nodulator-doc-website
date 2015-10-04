var N  = require('nodulator');

N.Resource('player')

N.Player.Create({login: 'player1', password: 'test'})

  .fail(console.error)

  .then(function (player) {
    player.login = "newLogin";
    return player.Save();
  })

  .then(function (player) {
    // Argument is {login: 'newLogin', password: 'test'}
  });
