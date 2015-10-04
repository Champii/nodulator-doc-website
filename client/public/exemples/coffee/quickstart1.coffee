N  = require 'nodulator'

N.Resource 'player'

N.Player.Create login: 'player1', password: 'test'

  .fail console.error

  .then (player) ->
    player.login = 'newLogin'
    player.Save!

  .then (player) ->
    # Argument is {login: 'newLogin', password: 'test'}
