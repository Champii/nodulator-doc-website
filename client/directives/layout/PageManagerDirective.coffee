class PageManagerDirective extends Nodulator.Directive 'pagemanager', '$rootScope', '$location', '$timeout'

  Init: ->
    $('.sidebar').css 'height', '100%'
    @$rootScope.$on '$locationChangeSuccess', =>
      _path = @$location.url().split('/')
      path = []
      for i in _path
        path.push i if i.length

      @$timeout =>
        $('.sidebar').css 'height', '100%'
        # console.log($('.pagebody > div').height(), $('body').height())
        # if $('.pagebody > div').height() < $('body').height()
        #   console.log 'tamere'
        #   $('.pagebody > div').height $('body').height()
      , 0
      @$rootScope.location = '/' + path[0]
      @$rootScope.sub = path[1] || null
      @$rootScope.args = path[2..] || null
      $("html, body").animate { scrollTop: 0 }, 0

PageManagerDirective.Init()
