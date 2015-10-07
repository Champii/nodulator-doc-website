Players.Fetch 1

  .then (player) ->
    player.name = 'name2'
    player.Save()

  .then (player) ->
    console.log player # Print the saved player
    Players.Fetch 666  # Lets say we return a promise that will fail.
                       # It will trigger the next 'fail' in the chain

  .fail (err) -> console.error err
