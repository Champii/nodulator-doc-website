module.exports =
  modules:
    socket: {}
    assets:
      sites:
        root:
          path: 'client'
          public:
            vendors: <[ public/js ]>
            js: <[ index.coffee directives controllers factories services ]>
            css: <[ public/css ]>
            '/img': <[ public/img ]>
    angular: {}
