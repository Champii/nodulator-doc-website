class JsDirective extends Nodulator.Directive 'js', 'codeToggleService', {transclude: true, scope: {}}

  _Init: ->
    @scope.contentJs = @element.find('.hide span')[0].innerText

JsDirective.Init()
