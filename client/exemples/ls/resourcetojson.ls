Players.Fetch name: \test

  .Then ->
    someSocket.Send it.ToJSON!
