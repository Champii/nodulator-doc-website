Player = N \player
Weapon = N \weapon

Player.BelongsTo Weapon

Player.Create!Catch console.error #Error

Weapon.Create!
  .Then -> Player.Create weaponId: it .Log!
# {id: 1, weaponId: 1, Weapon: {id: 1}}
  .Then -> Weapon.Fetch 1 .Log!
# {id: 1}
