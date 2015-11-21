Player.Watch('new', function (player) {
  player.Log();
});

Player.Watch({field: 'value'}, function (players) {
  for (var i in players)
    players[i].Log()
});

Player.Watch(function (players) {
  for (var i in players)
    players[i].Log()
});
