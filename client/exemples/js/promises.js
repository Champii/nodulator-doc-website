Players.Fetch(1)

  .then(function (player) {
    player.name = 'name2';
    return player.Save();
  })

  .then(function (player) {
    console.log(player);        // Print the saved player
    return Players.Fetch(666);  // Lets say we return a promise that will fail.
                                // It will trigger the next '.fail()' in the chain
  });

  .fail(function (err) {
    console.error(err);
  })
