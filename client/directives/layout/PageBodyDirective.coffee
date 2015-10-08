class PageBodyDirective extends Nodulator.Directive 'pagebody', '$timeout'

  visible: true

  ToggleVisible: ->
    @scope.visible = !@scope.visible
    if @scope.visible
      $('.pagebody').width '60%'
    else
      $('.pagebody').width '100%'

    @$timeout =>
      $('.sidebar').height $('.pagebody > div').height()
    , 0

    null

PageBodyDirective.Init()
