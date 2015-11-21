Player.Field \level    \int     .Default 1
Player.Field \username \string  .Required!
Player.Field \password \string  .Required!Internal!

Player.Create!Catch console.error  #Error

Player.Create do
  username: \player1
  password: \securized
.Log! # {id: 1, level: 1, username: 'test'}
