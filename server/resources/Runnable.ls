require! {nodulator: N}
child = require 'child_process'
# The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'


callback = (response, done) ->
  str = '';

  response.on 'data', (chunk) ->
    str += chunk;

  response.on 'end', ->
    done null, str

  response.on 'error', ->
    done it

getPage = (done) ->

  child.exec 'curl http://code.runnable.com/VhWRqcS4LUoLm3Nv/nodulator-for-node-js | grep http://service', (err, stdout, stderr) ->
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

new RunnableRoute 'runnable'
