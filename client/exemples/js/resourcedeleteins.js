Players.Fetch({name: 'test'})

  .then(function (player) {
    return player.Delete()
  });
