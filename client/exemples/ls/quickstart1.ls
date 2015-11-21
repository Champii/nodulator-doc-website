require! {nodulator: N}

class PlayerRoute extends N.Route
  Config: ->
    @Get ~> @resource.List!
    @Get \/:id ~> @resource.Fetch it.params.id

Player = N \player PlayerRoute

Player
  .Create login: \player1 password: \test
  .Set login: \newLogin
  .Log!
  .Catch console.error
