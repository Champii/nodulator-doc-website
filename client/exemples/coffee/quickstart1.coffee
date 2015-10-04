N  = require 'nodulator'

Players = N.Resource 'player'

Players.Create login: 'player1', password: 'test'

  .fail console.error

  .then (player) ->
    player.login = 'newLogin'
    player.Save!

  .then (player) ->
    # Argument is {login: 'newLogin', password: 'test'}
