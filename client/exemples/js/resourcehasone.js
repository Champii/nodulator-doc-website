var Player = N('player');

var Weapon = N('player');

Weapon.Field('damage', 'int').Default(0);

Player.HasOne(Weapon);

Weapon.Create().Catch(console.error); //Error

Weapon.Create({playerId: Player.Create()}).Log();
