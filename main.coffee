Nodulator = require 'nodulator'
Server = require './server'

Socket = require 'nodulator-socket'
Assets = require 'nodulator-assets'
Angular = require 'nodulator-angular'

Nodulator.Use Socket
Nodulator.Use Assets
Nodulator.Use Angular

Server.Init()
Nodulator.Run()
