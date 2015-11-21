Player.Create login: 'player1'

  .then (player) ->
    # player is of form {id: 1, login: 'player1'}

Player.Create [{login: 'player2'}, {login: 'player3'}]

  .then (players) ->
    # players is of form [{id: 2, login: 'player2'}, {login: 'player3'}]
