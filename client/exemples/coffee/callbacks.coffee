Player.Create {name: 'test'}, (err, player) ->
  return console.error err if err?

  test.name = 'test2'
  test.Save (err, test) ->
    return console.error err if err?
