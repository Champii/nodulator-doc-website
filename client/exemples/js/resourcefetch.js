// Get the player with id == 42
Player.Fetch(42).Log();

// Get the first player with name == 'leonard'
Player.Fetch({name: 'leonard'}).Log();

// Get all theses players in an Array
Player.Fetch([1, {name: 'leonard'}, 24, {level: 27}]).Log();
