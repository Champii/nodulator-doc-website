# Get all theses players with name == 'leonard'
Players.List level: 5 .then console.log

# Get all theses players in an Array of Arrays
Players.List do
  * level: 5
  * active: true

  .then console.log
