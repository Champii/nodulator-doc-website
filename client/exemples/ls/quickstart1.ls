require! {nodulator: N}

Players = N \player

Players.Create login: \player1 password: \test

  .fail -> console.error

  .then -> (.login = \newLogin ; it) >> (.Save!)

  .then ->
    # Argument is {login: 'newLogin', password: 'test'}
