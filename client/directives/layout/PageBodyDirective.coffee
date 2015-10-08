class PageBodyDirective extends Nodulator.Directive 'pagebody'

  visible: true

  ToggleVisible: ->
    @scope.visible = !@scope.visible
    if @scope.visible
      $('.pagebody').width '50%'
    else
      $('.pagebody').width '100%'
    null

PageBodyDirective.Init()
