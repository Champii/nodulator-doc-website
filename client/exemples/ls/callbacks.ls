err, test <- Players.Create name: \test
return console.error err if err?

test.name = \test2

err, test <- test.Save!
return console.error err if err?
