Player = N 'player'
Weapon = N 'weapon'

Player.BelongsTo Weapon

Player.Create().Catch console.error #Error

Weapon.Create()
  .Then (weapon) -> Player.Create(weaponId: weapon).Log()
# {id: 1, weaponId: 1, Weapon: {id: 1}}
  .Then -> Weapon.Fetch(1).Log()
# {id: 1}
