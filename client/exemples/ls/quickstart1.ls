require! {nodulator: N}

Players = N \player

Players.Create login: \player1 password: \test
  .Set login: \newLogin
  .Log!.Catch console.error
