module.exports =
  cache: type: 'Redis'
  minified: true
  assets:
    app:
      path: '/client'
      public:
        '/img': '/client/public/img'
      js: ['/client/public/js/', '/client/']
      css: ['/client/public/css/']
  viewRoot: 'client'
  engine: 'jade' #FIXME: no other possible engine
  servicesPath: '/services'
  directivesPath: '/directives'
  controllersPath: '/controllers'
  factoriesPath: '/factories'
  templatesPath: '/views'
