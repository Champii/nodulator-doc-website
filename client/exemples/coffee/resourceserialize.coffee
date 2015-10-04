Players.Fetch name: 'test'

  .then (player) ->
    someDb.Send player.Serialize()
