class CodeToggleDirective extends Nodulator.Directive 'codetoggle', '$interpolate', '$timeout', '$rootScope', 'codeToggleService', {transclude: true}

  _Init: ->
    replace = (toFind, toReplace, color) ->
      if not color
        color = toReplace
        toReplace = toFind
      $(".hljs:contains('#{toFind}')").each (id, item) ->
        $(item).html $(item).html().replace new RegExp(toReplace, 'g'), "<span style='color:#{color}'>#{toReplace}</span>"

    @scope.$watch 'codeToggleService.language', =>
      @$timeout =>
        replace 'Players', '#FF6E00'
        replace '.Create', '#F7FF00'
        replace '.Fetch', '#F7FF00'
        replace '.List', '#F7FF00'
        replace '.Delete', '#F7FF00'
        replace '.Save', '#F7FF00'
        replace '.ToJSON', '#F7FF00'
        replace '.Serialize', '#F7FF00'
        replace '.ExtendSafe', '#F7FF00'
        replace 'N >','N >', '#D103FF'
        replace 'N ', '#0AE250'
        replace 'fail', '#FF0000'
        replace 'then', '#00FF18'
        replace 'console.log', '.log', '#13E0DA'
        # replace '$>', '$', '#C400FF'

    , true

CodeToggleDirective.Init()
