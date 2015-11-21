var N  = require('nodulator');

var PlayerRoute = N.Route.Extend();

PlayerRoute.prototype.Config = function () {
  this.Get(function () {
    return this.resource.List();
  });
  this.Get('/:id', function (req) {
    return this.resource.Fetch(req.params.id);
  });
};

var Player = N('player', PlayerRoute)

Player
  .Create({login: 'player1', password: 'test'})
  .Set({login: 'newLogin'})
  .Log()
  .Catch(console.error)
