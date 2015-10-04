Players.Fetch({name: 'test'})

  .then(function (player) {
    player.ExtendSafe({name: 'test', protectedAssoc: 'someValue'});
    player.Save()
  })

  .then(function (player) {}) # player is {name: 'test'} if 'protectedAssoc' is the name of an association
