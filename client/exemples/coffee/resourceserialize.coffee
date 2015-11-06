Players.Fetch name: 'test'
  .Then (player) ->
    someDb.Send player.Serialize()
