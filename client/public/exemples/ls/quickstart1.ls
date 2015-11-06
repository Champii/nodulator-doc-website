require! {nodulator: N}

Players = N \player

console.log Players

Players.Create login: \player1 password: \test
  .Set login: \newLogin
  .Log!.Catch console.error
    