class CodeToggleDirective extends Nodulator.Directive 'codetoggle', {transclude: true}

  language: 'coffee'

  Toggle: (@language) ->
    prettyPrint()
    console.log @

CodeToggleDirective.Init()
