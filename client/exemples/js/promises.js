Player.Fetch(1)

  .Then(function (player) {
    return player.Set({name: 'name2'});
  })

  .Then(function (player) {
    return Player.Fetch(666);  // Lets say we return a promise that will fail.
                                // It will trigger the next '.fail()' in the chain
  });

  .Catch(function (err) {
    console.error(err);
  })
