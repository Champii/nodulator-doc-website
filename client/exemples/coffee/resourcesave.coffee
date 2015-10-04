Players.Create name: 'test'

  .then (player) ->
    player.name = 'test2'
    player.Save()
