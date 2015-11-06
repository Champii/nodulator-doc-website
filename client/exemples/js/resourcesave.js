Players.Create({name: 'test'})
  .Then(function (player) {
    player.name = 'test2'
    player.Save()
  });
