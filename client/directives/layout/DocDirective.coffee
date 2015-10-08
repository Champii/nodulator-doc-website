class DocDirective extends Nodulator.Directive 'doc', '$http', '$sce'

  serviceUrl: ''
  error: ''

  _Init: ->
    @$http.get '/api/1/runnables'
      .success (data) =>
        @scope.service = data.serviceUrl
        @scope.serviceUrl = @$sce.trustAsResourceUrl data.serviceUrl
      .error (error) =>
        @scope.error = 'An error has occured. Please retry later.'

DocDirective.Init()
