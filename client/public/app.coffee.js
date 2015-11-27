(function() {
  var Base, BashDirective, CodeToggleDirective, CodeToggleService, CoffeeDirective, ConsoleDirective, Controller, Directive, DocDirective, Factory, JsDirective, LandingDirective, LivescriptDirective, Nodulator, PageBodyDirective, PageManagerDirective, ResourceService, Service, SidebarDirective, Socket, _N, app,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    slice = [].slice,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  app = angular.module('app', ['hljs', 'ngSanitize']);

  Base = function(name, injects) {
    var _Base;
    return _Base = (function() {
      _Base.prototype._name = name;

      _Base.prototype._injects = injects;

      function _Base() {
        var arg, i, j, len, ref, service;
        if (name == null) {
          return console.error('N.Base must have a name');
        }
        ref = this._injects;
        for (i = j = 0, len = ref.length; j < len; i = ++j) {
          arg = ref[i];
          if (!(typeof arg === 'string')) {
            continue;
          }
          service = arg.slice(0, arg.search(/Service$/g));
          if (!(indexOf.call(_(Nodulator.services).keys(), service) >= 0) && indexOf.call(_resources, service) >= 0) {
            Nodulator.ResourceService(service).Init();
          }
        }
        return [
          this._name, this._injects.concat([
            (function(_this) {
              return function() {
                var args;
                args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
                return _this._Body.apply(_this, [args]);
              };
            })(this)
          ])
        ];
      }

      _Base.prototype._Body = function(args) {
        var arg, i, j, len;
        for (i = j = 0, len = args.length; j < len; i = ++j) {
          arg = args[i];
          if (typeof this._injects[i] === 'string') {
            this[this._injects[i]] = arg;
          }
        }
        if (this.Init != null) {
          this.Init();
        }
        return this;
      };

      _Base.Init = function() {
        var thus;
        thus = this;
        return new thus;
      };

      return _Base;

    })();
  };

  Controller = function(name, injects) {
    var _Controller;
    return _Controller = (function(superClass) {
      extend(_Controller, superClass);

      function _Controller() {
        var inj, ref;
        ref = _Controller.__super__.constructor.call(this), name = ref[0], inj = ref[1];
        app.controller(name, inj);
      }

      return _Controller;

    })(Base(name, injects));
  };

  Directive = function(name, injects) {
    var _Directive;
    return _Directive = (function(superClass) {
      extend(_Directive, superClass);

      function _Directive() {
        var _tmp, item, j, k, len, len1, ref, ref1;
        this._dirExtended = [];
        ref = this._injects;
        for (j = 0, len = ref.length; j < len; j++) {
          item = ref[j];
          if (typeof item !== 'string') {
            this._dirExtended.push(item);
          }
        }
        _tmp = [];
        ref1 = this._injects;
        for (k = 0, len1 = ref1.length; k < len1; k++) {
          item = ref1[k];
          if (typeof item === 'string') {
            _tmp.push(item);
          }
        }
        this._injects = _tmp;
        app.directive.apply(app, _Directive.__super__.constructor.call(this));
      }

      _Directive.prototype._Body = function(args) {
        var arg, dir, item, j, key, len, ref;
        dir = {
          restrict: 'E',
          replace: true,
          templateUrl: this._name + '-tpl'
        };
        ref = this._dirExtended;
        for (j = 0, len = ref.length; j < len; j++) {
          arg = ref[j];
          for (key in arg) {
            item = arg[key];
            dir[key] = item;
          }
        }
        _Directive.__super__._Body.call(this, args);
        if ((this.Pre != null) || (this.Post != null)) {
          dir.compile = (function(_this) {
            return function() {
              var res;
              res = {};
              if (_this.Pre != null) {
                res.pre = function(scope, element, attr) {
                  var elem, results;
                  _this.scope = scope;
                  _this.element = element;
                  _this.attr = attr;
                  if (_this.Pre != null) {
                    _this.Pre();
                  }
                  results = [];
                  for (name in _this) {
                    elem = _this[name];
                    if (name[0] !== '_') {
                      results.push(_this[name] = _this.scope[name] = elem);
                    }
                  }
                  return results;
                };
              }
              if (_this.Post != null) {
                res.post = function(scope, element, attr) {
                  var elem, results;
                  _this.scope = scope;
                  _this.element = element;
                  _this.attr = attr;
                  if (_this.Post != null) {
                    _this.Post();
                  }
                  results = [];
                  for (name in _this) {
                    elem = _this[name];
                    if (name[0] !== '_') {
                      results.push(_this[name] = _this.scope[name] = elem);
                    }
                  }
                  return results;
                };
              }
              return res;
            };
          })(this);
        } else {
          dir.link = (function(_this) {
            return function(scope, element, attr) {
              var elem;
              _this.scope = scope;
              _this.element = element;
              _this.attr = attr;
              for (name in _this) {
                elem = _this[name];
                if (name[0] !== '_') {
                  _this[name] = _this.scope[name] = elem;
                }
              }
              if (_this._Init != null) {
                return _this._Init();
              }
            };
          })(this);
        }
        return dir;
      };

      return _Directive;

    })(Base(name, injects));
  };

  Factory = function(name, injects) {
    var _Factory;
    return _Factory = (function(superClass) {
      extend(_Factory, superClass);

      function _Factory() {
        app.factory.apply(app, _Factory.__super__.constructor.call(this));
      }

      return _Factory;

    })(Base(name, injects));
  };

  Service = function(name, injects) {
    var _Service;
    return _Service = (function(superClass) {
      extend(_Service, superClass);

      function _Service() {
        var inj, ref;
        ref = _Service.__super__.constructor.call(this), name = ref[0], inj = ref[1];
        app.service(name + 'Service', inj);
      }

      return _Service;

    })(Base(name, injects));
  };

  _N = (function() {
    _N.prototype.directives = {};

    _N.prototype.services = {};

    _N.prototype.controllers = {};

    _N.prototype.factories = {};

    _N.prototype.managedViews = {};

    _N.prototype.nb = 0;

    function _N() {
      document.getElementsByTagName("body")[0].setAttribute("ng-app", "app");
    }

    _N.prototype.Base = function() {
      var injects, name;
      name = arguments[0], injects = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      return Base(name, injects);
    };

    _N.prototype.Directive = function() {
      var directive, injects, name;
      name = arguments[0], injects = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      directive = Directive(name, injects);
      if (this.directives[name] == null) {
        this.directives[name] = directive;
        this.nb++;
        if (this.nb === _nbDirectives) {
          this.CreateEmptyTemplateDirective();
        }
      }
      return directive;
    };

    _N.prototype.Service = function() {
      var injects, name, service;
      name = arguments[0], injects = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      service = Service(name, injects);
      if (this.services[name] == null) {
        this.services[name] = service;
      }
      return service;
    };

    _N.prototype.Factory = function() {
      var factory, injects, name;
      name = arguments[0], injects = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      factory = Factory(name, injects);
      if (this.factories[name] == null) {
        this.factories[name] = factory;
      }
      return factory;
    };

    _N.prototype.ResourceService = function() {
      var injects, name, service;
      name = arguments[0], injects = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      service = ResourceService(name, injects);
      if (this.services[name] == null) {
        this.services[name] = service;
      }
      return service;
    };

    _N.prototype.Controller = function() {
      var controller, injects, name;
      name = arguments[0], injects = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      controller = Controller(name, injects);
      if (this.controllers[name] == null) {
        this.controllers[name] = controller;
      }
      return controller;
    };

    _N.prototype.CreateEmptyTemplateDirective = function() {
      var _EmptyDirective, j, len, results, template;
      results = [];
      for (j = 0, len = _views.length; j < len; j++) {
        template = _views[j];
        if (!(indexOf.call(_(this.directives).keys(), template) < 0)) {
          continue;
        }
        _EmptyDirective = (function(superClass) {
          extend(_EmptyDirective, superClass);

          function _EmptyDirective() {
            return _EmptyDirective.__super__.constructor.apply(this, arguments);
          }

          return _EmptyDirective;

        })(this.Directive(template));
        results.push(_EmptyDirective.Init());
      }
      return results;
    };

    return _N;

  })();

  Nodulator = new _N;

  ResourceService = function(name, injects) {
    var _ResourceService;
    if (indexOf.call(injects, '$http') < 0) {
      injects.push('$http');
    }
    if (indexOf.call(injects, 'socket') < 0) {
      injects.push('socket');
    }
    return _ResourceService = (function(superClass) {
      extend(_ResourceService, superClass);

      function _ResourceService() {
        return _ResourceService.__super__.constructor.apply(this, arguments);
      }

      _ResourceService.prototype.list = [];

      _ResourceService.prototype.current = null;

      _ResourceService.prototype._resName = name + 's';

      _ResourceService.prototype._lName = name;

      _ResourceService.prototype.Init = function() {
        return window.addEventListener("load", (function(_this) {
          return function(event) {
            _this.socket.On('new_' + _this._lName, function(item) {
              return _this.OnNew(item);
            });
            _this.socket.On('update_' + _this._lName, function(item) {
              return _this.OnUpdate(item);
            });
            _this.socket.On('delete_' + _this._lName, function(item) {
              return _this.OnDelete(item);
            });
            return _this.List();
          };
        })(this), false);
      };

      _ResourceService.prototype.OnNew = function(item) {
        return this.list.push(item);
      };

      _ResourceService.prototype.OnUpdate = function(item) {
        var toChange;
        toChange = _(this.list).findWhere({
          id: item.id
        });
        return toChange = _(toChange).extend(item);
      };

      _ResourceService.prototype.OnDelete = function(item) {
        return this.list = _(this.list).reject(function(i) {
          return i.id === item.id;
        });
      };

      _ResourceService.prototype.List = function(done) {
        return this.$http.get('/api/1/' + this._resName).success((function(_this) {
          return function(data) {
            _this.list = data;
            if (done != null) {
              return done(null, _this.list);
            }
          };
        })(this)).error(function(data) {
          if (done != null) {
            return done(data);
          }
        });
      };

      _ResourceService.prototype.Fetch = function(id, done) {
        return this.$http.get('/api/1/' + this._resName + '/' + id).success((function(_this) {
          return function(data) {
            _this.current = data;
            if (done != null) {
              return done(null, _this.current);
            }
          };
        })(this)).error(function(data) {
          if (done != null) {
            return done(data);
          }
        });
      };

      _ResourceService.prototype.Delete = function(id, done) {
        return this.$http["delete"]('/api/1/' + this._resName + '/' + id).success((function(_this) {
          return function(data) {
            if (done != null) {
              return done();
            }
          };
        })(this)).error(function(data) {
          if (done != null) {
            return done(data);
          }
        });
      };

      _ResourceService.prototype.Add = function(blob, done) {
        return this.$http.post('/api/1/' + this._resName, blob).success((function(_this) {
          return function(data) {
            if (done != null) {
              return done(null, data);
            }
          };
        })(this)).error(function(data) {
          if (done != null) {
            return done(data);
          }
        });
      };

      _ResourceService.prototype.Update = function(blob, done) {
        return this.$http.put('/api/1/' + this._resName + '/' + blob.id, blob).success((function(_this) {
          return function(data) {
            if (done != null) {
              return done(null, data);
            }
          };
        })(this)).error(function(data) {
          if (done != null) {
            return done(data);
          }
        });
      };

      return _ResourceService;

    })(Service(name, injects));
  };

  Socket = (function(superClass) {
    extend(Socket, superClass);

    Socket.prototype.socket = {};

    function Socket() {
      Socket.__super__.constructor.call(this);
    }

    Socket.prototype.On = function(eventName, callback) {
      var wrapper;
      wrapper = (function(_this) {
        return function() {
          var args;
          args = arguments;
          return _this.$rootScope.$apply(function() {
            return callback.apply(_this.socket, args);
          });
        };
      })(this);
      this.socket.on(eventName, wrapper);
      return (function(_this) {
        return function() {
          return _this.socket.removeListener(eventName, wrapper);
        };
      })(this);
    };

    Socket.prototype.Emit = function(eventName, data, callback) {
      return this.socket.emit(eventName, data, (function(_this) {
        return function() {
          var args;
          args = arguments;
          return _this.$rootScope.$apply(function() {
            if (callback) {
              return callback.apply(_this.socket, args);
            }
          });
        };
      })(this));
    };

    Socket.Init = function() {
      var r, res;
      res = this;
      r = new res;
      return document.addEventListener("DOMContentLoaded", function(event) {
        return r.socket = io();
      });
    };

    return Socket;

  })(Nodulator.Factory('socket', '$rootScope'));

  Socket.Init();

  CodeToggleService = (function(superClass) {
    extend(CodeToggleService, superClass);

    function CodeToggleService() {
      return CodeToggleService.__super__.constructor.apply(this, arguments);
    }

    CodeToggleService.prototype.language = 'livescript';

    CodeToggleService.prototype.Toggle = function(language) {
      this.language = language;
    };

    return CodeToggleService;

  })(Nodulator.Service('codeToggle'));

  CodeToggleService.Init();

  BashDirective = (function(superClass) {
    extend(BashDirective, superClass);

    function BashDirective() {
      return BashDirective.__super__.constructor.apply(this, arguments);
    }

    BashDirective.prototype._Init = function() {
      return this.scope.contentBash = this.element.find('.hide span')[0].innerText;
    };

    return BashDirective;

  })(Nodulator.Directive('bash', 'codeToggleService', {
    transclude: true,
    scope: {}
  }));

  BashDirective.Init();

  CoffeeDirective = (function(superClass) {
    extend(CoffeeDirective, superClass);

    function CoffeeDirective() {
      return CoffeeDirective.__super__.constructor.apply(this, arguments);
    }

    CoffeeDirective.prototype._Init = function() {
      return this.scope.contentCoffee = this.element.find('.hide span')[0].innerText;
    };

    return CoffeeDirective;

  })(Nodulator.Directive('coffee', 'codeToggleService', {
    transclude: true,
    scope: {}
  }));

  CoffeeDirective.Init();

  CodeToggleDirective = (function(superClass) {
    extend(CodeToggleDirective, superClass);

    function CodeToggleDirective() {
      return CodeToggleDirective.__super__.constructor.apply(this, arguments);
    }

    CodeToggleDirective.prototype._Init = function() {};

    return CodeToggleDirective;

  })(Nodulator.Directive('codetoggle', '$interpolate', '$timeout', '$rootScope', 'codeToggleService', {
    transclude: true
  }));

  CodeToggleDirective.Init();

  JsDirective = (function(superClass) {
    extend(JsDirective, superClass);

    function JsDirective() {
      return JsDirective.__super__.constructor.apply(this, arguments);
    }

    JsDirective.prototype._Init = function() {
      return this.scope.contentJs = this.element.find('.hide span')[0].innerText;
    };

    return JsDirective;

  })(Nodulator.Directive('js', 'codeToggleService', {
    transclude: true,
    scope: {}
  }));

  JsDirective.Init();

  LivescriptDirective = (function(superClass) {
    extend(LivescriptDirective, superClass);

    function LivescriptDirective() {
      return LivescriptDirective.__super__.constructor.apply(this, arguments);
    }

    LivescriptDirective.prototype._Init = function() {
      return this.scope.contentLs = this.element.find('.hide span')[0].innerText;
    };

    return LivescriptDirective;

  })(Nodulator.Directive('livescript', '$timeout', 'codeToggleService', {
    transclude: true,
    scope: {}
  }));

  LivescriptDirective.Init();

  ConsoleDirective = (function(superClass) {
    extend(ConsoleDirective, superClass);

    function ConsoleDirective() {
      return ConsoleDirective.__super__.constructor.apply(this, arguments);
    }

    ConsoleDirective.prototype._Init = function() {};

    return ConsoleDirective;

  })(Nodulator.Directive('console', '$timeout'));

  ConsoleDirective.Init();

  DocDirective = (function(superClass) {
    extend(DocDirective, superClass);

    function DocDirective() {
      return DocDirective.__super__.constructor.apply(this, arguments);
    }

    DocDirective.prototype.serviceUrl = '';

    DocDirective.prototype.error = '';

    DocDirective.prototype._Init = function() {
      return this.$http.get('/api/1/runnables').success((function(_this) {
        return function(data) {
          _this.scope.service = data.serviceUrl;
          return _this.scope.serviceUrl = _this.$sce.trustAsResourceUrl(data.serviceUrl);
        };
      })(this)).error((function(_this) {
        return function(error) {
          return _this.scope.error = 'An error has occured. Please retry later.';
        };
      })(this));
    };

    return DocDirective;

  })(Nodulator.Directive('doc', '$http', '$sce'));

  DocDirective.Init();

  LandingDirective = (function(superClass) {
    extend(LandingDirective, superClass);

    function LandingDirective() {
      return LandingDirective.__super__.constructor.apply(this, arguments);
    }

    LandingDirective.prototype._Init = function() {
      return this.$rootScope.$on('$locationChangeSuccess', (function(_this) {
        return function() {
          var ref;
          if ((ref = _this.scope.sub) === 'welcome' || ref === 'gettingstarted') {
            return $('html,body').stop().clearQueue().animate({
              scrollTop: $('#' + _this.scope.sub).offset().top
            }, 'slow');
          }
        };
      })(this));
    };

    return LandingDirective;

  })(Nodulator.Directive('landing', '$timeout', '$rootScope'));

  LandingDirective.Init();

  PageBodyDirective = (function(superClass) {
    extend(PageBodyDirective, superClass);

    function PageBodyDirective() {
      return PageBodyDirective.__super__.constructor.apply(this, arguments);
    }

    PageBodyDirective.prototype.visible = true;

    PageBodyDirective.prototype.helpVisible = true;

    PageBodyDirective.prototype.ToggleVisible = function() {
      this.scope.visible = !this.scope.visible;
      if (this.scope.visible) {
        $('.pagebody').width('60%');
      } else {
        $('.pagebody').width('100%');
      }
      this.$timeout((function(_this) {
        return function() {
          return $('.sidebar').height($('.pagebody > div').height());
        };
      })(this), 0);
      return null;
    };

    PageBodyDirective.prototype.ToggleHelpVisible = function() {
      this.scope.helpVisible = !this.scope.helpVisible;
      if (this.scope.helpVisible) {
        $('.terminal-container-global').height('calc((50%))');
      } else {
        $('.terminal-container-global').height('calc(100% - 44px)');
      }
      console.log(this.scope.helpVisible);
      return null;
    };

    return PageBodyDirective;

  })(Nodulator.Directive('pagebody', '$timeout'));

  PageBodyDirective.Init();

  PageManagerDirective = (function(superClass) {
    extend(PageManagerDirective, superClass);

    function PageManagerDirective() {
      return PageManagerDirective.__super__.constructor.apply(this, arguments);
    }

    PageManagerDirective.prototype.Init = function() {
      return this.$rootScope.$on('$locationChangeSuccess', (function(_this) {
        return function() {
          var _path, i, j, len, path;
          console.log(_this.$location.url());
          _path = _this.$location.url().split('/');
          path = [];
          for (j = 0, len = _path.length; j < len; j++) {
            i = _path[j];
            if (i.length) {
              path.push(i);
            }
          }
          _this.$timeout(function() {
            return $('.sidebar').height($('.pagebody > div').height());
          }, 0);
          _this.$rootScope.location = '/' + path[0];
          _this.$rootScope.sub = path[1] || null;
          _this.$rootScope.args = path.slice(2) || null;
          return $("html, body").animate({
            scrollTop: 0
          }, 0);
        };
      })(this));
    };

    return PageManagerDirective;

  })(Nodulator.Directive('pagemanager', '$rootScope', '$location', '$timeout'));

  PageManagerDirective.Init();

  SidebarDirective = (function(superClass) {
    extend(SidebarDirective, superClass);

    function SidebarDirective() {
      return SidebarDirective.__super__.constructor.apply(this, arguments);
    }

    SidebarDirective.prototype._Init = function() {
      $('.sidelist > li a.section').each(function() {
        $(this).parent().find('ul').toggle();
        return this.innerHTML = ' + ' + this.innerHTML;
      });
      return $('.sidelist > li a.section').click(function() {
        var state;
        $(this).parent().find('ul').toggle();
        state = this.innerHTML[1];
        if (state === '+') {
          return this.innerHTML = ' -' + this.innerHTML.slice(2);
        } else {
          return this.innerHTML = ' +' + this.innerHTML.slice(2);
        }
      });
    };

    return SidebarDirective;

  })(Nodulator.Directive('sidebar'));

  SidebarDirective.Init();

}).call(this);
