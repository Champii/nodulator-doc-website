class PageManagerDirective extends Nodulator.Directive 'pagemanager', '$rootScope', '$location', '$timeout'

  Init: ->
    @$rootScope.$on '$locationChangeSuccess', =>
      console.log @$location.url()
      _path = @$location.url().split('/')
      path = []
      for i in _path
        path.push i if i.length

      @$timeout =>
        $('.sidebar').height $('.pagebody > div').height()
      , 0
      @$rootScope.location = '/' + path[0]
      @$rootScope.sub = path[1] || null
      @$rootScope.args = path[2..] || null
      $("html, body").animate { scrollTop: 0 }, 0

PageManagerDirective.Init()
