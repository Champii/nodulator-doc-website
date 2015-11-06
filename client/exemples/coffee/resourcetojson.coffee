Players.Fetch name: 'test'
  .Then (player) ->
    someSocket.Send player.ToJSON()
