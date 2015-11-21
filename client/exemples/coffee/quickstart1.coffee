N = require 'nodulator'

class PlayerRoute extends N.Route
  Config: ->
    @Get => @resource.List()
    @Get '/:id', (req) => @resource.Fetch req.params.id

Player = N 'player', PlayerRoute

Player
  .Create login: 'player1', password: 'test'
  .Set login: 'newLogin'
  .Log()
  .Catch console.error
