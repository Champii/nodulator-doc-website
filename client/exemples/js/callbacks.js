Player.Create({name: 'test'}, function (err, player) {
  if (err != null)
    return console.error(err);

  test.name = 'test2';
  test.Save(function (err, test) {
    if (err != null)
      return console.error(err);
  });
});
