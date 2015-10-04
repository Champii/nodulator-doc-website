# Get the player with id == 42
Players.Fetch 42
  .then console.log

# Get the first player with name == 'leonard'
Players.Fetch name: 'leonard'
  .then console.log

# Get all theses players in an Array
Players.Fetch [1, {name: 'leonard'}, 24, {level: 27}]
  .then console.log
