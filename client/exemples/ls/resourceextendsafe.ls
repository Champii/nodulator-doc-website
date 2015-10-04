Players.Fetch name: \test

  .then ->
    it.ExtendSafe {name: \test, protectedAssoc: \someValue}
    it.Save!

  .then -> # it is {name: \test} if 'protectedAssoc' is the name of an association
