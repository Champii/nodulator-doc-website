class PageBodyDirective extends Nodulator.Directive 'pagebody', '$timeout'

  visible: true
  helpVisible: false

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

  ToggleHelpVisible: ->
    @scope.helpVisible = !@scope.helpVisible
    if @scope.helpVisible
      $('.terminal-container-global').height 'calc((50%))'
    else
      $('.terminal-container-global').height 'calc(100% - 44px)'

    console.log @scope.helpVisible
    null

PageBodyDirective.Init()
