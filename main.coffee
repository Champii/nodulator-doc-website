N = require 'nodulator'
Server = require './server'

Socket = require 'nodulator-socket'
Assets = require 'nodulator-assets'
Angular = require 'nodulator-angular'

N.Config require "./settings/dev"
#   viewRoot: 'client'
#   js: ['/client/public/js/', '/client/']
#   css: ['/client/public/css/']

N.Use Socket
N.Use Assets
N.Use Angular


Server.Init()
N.Run()
