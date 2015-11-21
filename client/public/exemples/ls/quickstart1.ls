require! {nodulator: N}

Player = N \player

console.log Player

Player.Create login: \player1 password: \test
  .Set login: \newLogin
  .Log!.Catch console.error
    