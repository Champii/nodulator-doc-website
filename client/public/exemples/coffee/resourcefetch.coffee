Player.Fetch 42
  .then console.log # Get the player with id == 42

Player.Fetch name: 'leonard'
  .then console.log # Get the first player with name == 'leonard'

Player.Fetch [1, {name: 'leonard'}, 24, {level: 27}]
  .then console.log # Get all theses players
