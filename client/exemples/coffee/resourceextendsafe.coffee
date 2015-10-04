Players.Fetch name: 'test'

  .then (player) ->
    player.ExtendSafe name: 'test', protectedAssoc: 'someValue'
    player.Save()

  .then (player) -> # player is {name: 'test'} if 'protectedAssoc' is the name of an association
