Player.Watch 'new', (player) ->
  player.Log()

Player.Watch {field: 'value'}, (players) ->
  for player in players
    player.Log()

Player.Watch (players) ->
  for player in players
    player.Log()
