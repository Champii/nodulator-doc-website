class CoffeeDirective extends Nodulator.Directive 'coffee', 'codeToggleService', {transclude: true, scope: {}}

  _Init: ->
    @scope.contentCoffee = @element.find('.hide span')[0].innerText

CoffeeDirective.Init()
