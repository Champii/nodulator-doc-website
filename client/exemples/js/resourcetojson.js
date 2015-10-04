Players.Fetch({name: 'test'})

  .then(function (player) {
    someSocket.Send player.ToJSON();
  });
