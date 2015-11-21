var Parent = N('parent');

Parent.prototype.LevelUp = function () {
  this.Set({level: this.level + 1});
});

Parent.Field('level', 'int').Default(1);

var Child = Parent.Extend('child');

Child.Create().LevelUp().Log();
