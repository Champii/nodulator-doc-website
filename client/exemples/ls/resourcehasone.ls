Player = N \player

Weapon = N \player
  ..Field \damage \int .Default 0

Player.HasOne Weapon

Weapon.Create!Catch console.error #Error

Weapon.Create playerId: Player.Create! .Log!
# {id: 1, damage: 0, playerId: 1, Player: {id: 1}}
