require! {nodulator: N}
child = require 'child_process'
# The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'


callback = (response, done) ->
  str = '';

  console.log 'Got', chunk
  response.on 'data', (chunk) ->
    console.log 'Got', chunk
    str += chunk;

  response.on 'end', ->
    done null, str

  response.on 'error', ->
    done it

getPage = (done) ->

  child.exec 'curl http://code.runnable.com/VhWRqcS4LUoLm3Nv/nodulator-for-node-js | grep http://service', (err, stdout, stderr) ->
    return done err if err?

    done null, stdout

class RunnableRoute extends N.Route

  Config: ->

    @Get (req) !->
      getPage (err, page) ->
        return req.SendError err if err?

        console.log page
        page = page.match /\"(.+\.html)/g
        page =  {serviceUrl: page[0][1 to]*''}
        req.Send page

new RunnableRoute 'runnable'
