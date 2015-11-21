class ConsoleDirective extends Nodulator.Directive 'console', '$timeout'

  _Init: ->
    # @$timeout =>
    #   $(".hljs:contains('N >')").each (id, item) ->
    #     console.log $(item).html $(item).html().replace /N &gt;/g, '<span style="color:#29CA29">N</span> <span style="color:#DC00FF">&gt;</span>'
    # , 0
ConsoleDirective.Init()
