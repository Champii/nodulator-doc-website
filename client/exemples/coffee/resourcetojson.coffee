Players.Fetch name: 'test'

  .then (player) ->
    someSocket.Send player.ToJSON()
