Player.Fetch name: \test

  .Then ->
    someDb.Send it.Serialize!
