Players.Create name: 'test'
  .Then (player) ->
    player.name = 'test2'
    player.Save()
