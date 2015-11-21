Player.Fetch 1

  .Set name: \name2

  .Then ->
    Player.Fetch 666 # Lets say we return a promise that will fail.
                      # It will trigger the next 'fail' in the chain

  .Catch console.error
