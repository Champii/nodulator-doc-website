Players.Create({name: 'test'})

  .then(function (player) {
    player.name = 'test2'
    player.Save()
  });
