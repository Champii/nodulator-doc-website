class LivescriptDirective extends Nodulator.Directive 'livescript', '$timeout', 'codeToggleService', {transclude: true, scope: {}}

  _Init: ->
    @scope.contentLs = @element.find('.hide span')[0].innerText

LivescriptDirective.Init()
