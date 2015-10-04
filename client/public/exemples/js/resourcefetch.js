Player.Fetch(42)
  .then(function (player) {
    console.log(player); // Get the player with id == 42
  });

Player.Fetch({name: 'leonard'})
  .then(function (player) {
    console.log // Get the first player with name == 'leonard'
  });

Player.Fetch([1, {name: 'leonard'}, 24, {level: 27}])
  .then(function (players) {
    console.log // Get all theses players
  });
