class Parent extends N 'parent'
  LevelUp: ->
    @Set level: @level + 1

Parent.Field('level', 'int').Default 1

Child = Parent.Extend 'child'

Child.Create().LevelUp().Log()
