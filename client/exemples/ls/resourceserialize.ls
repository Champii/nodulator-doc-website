Players.Fetch name: \test

  .then ->
    someDb.Send it.Serialize!
