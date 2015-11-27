var Player = N('player');
var Weapon = N('weapon');

Player.BelongsTo(Weapon);

Player.Create().Catch(console.error); //Error

Weapon.Create()
  .Then(function (weapon) {
    return Player.Create({weaponId: weapon}).Log();
  })
// {id: 1, weaponId: 1, Weapon: {id: 1}}
  .Then(function () {
    return Weapon.Fetch(1).Log();
  });
// {id: 1}
