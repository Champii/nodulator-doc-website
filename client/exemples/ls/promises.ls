Players.Fetch 1

  .then (.name = \name2 ; it.Save!)

  .then ->
    console.log it    # Print the saved player
    Players.Fetch 666 # Lets say we return a promise that will fail.
                      # It will trigger the next 'fail' in the chain

  .fail console.error
