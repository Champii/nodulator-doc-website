Players.Fetch name: \test

  .then ->
    someSocket.Send it.ToJSON!
