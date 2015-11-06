Players.Create name: \test
  .Then ->
    it.name = \test2
    it.Save!
