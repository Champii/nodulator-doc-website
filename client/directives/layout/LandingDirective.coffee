class LandingDirective extends Nodulator.Directive 'landing', '$timeout', '$rootScope'

  _Init: ->
    @$rootScope.$on '$locationChangeSuccess', =>

      if @scope.sub in ['welcome', 'gettingstarted']
        $('html,body').stop().clearQueue().animate
          scrollTop: $('#' + @scope.sub).offset().top
        , 'slow'

LandingDirective.Init()
