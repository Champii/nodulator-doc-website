# Get the player with id == 42
Players.Fetch 42 .Log!

# Get the first player with name == 'leonard'
Players.Fetch name: 'leonard' .Log!

# Get all theses players in an Array
Players.Fetch do
  * 1
  * name: 'leonard'
  * 24
  * level: 27
.Log!
