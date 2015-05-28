class MenuDirective extends Nodulator.Directive 'menu'

  GoTo: (location) ->
    if @location isnt location
      @location = location
      $('body').scrollTop 0
      $('body').scrollspy('refresh')
      1

MenuDirective.Init()
