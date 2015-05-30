class CodeToggleDirective extends Nodulator.Directive 'codetoggle', '$interpolate', {transclude: true}

  language: 'coffee'

  Toggle: (@language) ->

CodeToggleDirective.Init()

class CoffeeDirective extends Nodulator.Directive 'coffee', {transclude: true}

  _Init: ->
    @contentCoffee = @element.find('.hide span')[0].innerText

CoffeeDirective.Init()

class JsDirective extends Nodulator.Directive 'js', {transclude: true}

  _Init: ->
    @contentJs = @element.find('.hide span')[0].innerText

JsDirective.Init()

class BashDirective extends Nodulator.Directive 'bash', {transclude: true, scope: {}}

  _Init: ->
    @contentBash = @element.find('.hide span')[0].innerText

BashDirective.Init()
