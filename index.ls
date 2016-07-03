child = require 'child_process'

callback = (response, done) ->
  str = '';

  response.on 'data', (chunk) ->
    str += chunk;

  response.on 'end', ->
    done null, str

  response.on 'error', ->
    done it

getPage = (done) ->

  child.exec 'curl http://code.runnable.com/VhWRqcS4LUoLm3Nv/nodulator-for-node-js-orm-rest-api-and-livescript | grep http://service', (err, stdout, stderr) ->
    return done err if err?

    done null, stdout

testPage = (url, done) ->
  child.exec "curl #url | grep 'start error'", (err, stdout, stderr) ->
    return done err if err?

    done null, true

class RunnableRoute extends N.Route

  Config: ->

    @Get (req) !->

      sendPage = (err, page) ->
        return req.SendError err if err?

        page = page.match /\"(.+\.html)/g
        page =  {serviceUrl: page[0][1 to]*''}
        req.session.url = page
        req.Send page

      if not req.session.url?
        getPage sendPage
      else
        testPage req.session.url, (err, status) ->
          return getPage sendPage if err? or !status

          req.Send req.session.url

new RunnableRoute 'runnables'
