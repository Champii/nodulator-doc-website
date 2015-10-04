
class BashDirective extends Nodulator.Directive 'bash', 'testService', 'codeToggleService', {transclude: true, scope: {}}

  _Init: ->
    @scope.contentBash = @element.find('.hide span')[0].innerText

BashDirective.Init()
