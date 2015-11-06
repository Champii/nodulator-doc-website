Players.Fetch({name: 'test'})
  .Then(function (player) {
    someSocket.Send player.Serialize();
  });
