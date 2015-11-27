var Inventory = N('inventory');
var Item = N('item');

Inventory.HasMany(Item);

Item.Create().Catch(console.error); //Error

Inventory.Create()
  .Then(function (inventory) {
    return Item.Create({inventoryId: inventory}).Log();
  })
// {id: 1, inventoryId: 1, Inventory: {id: 1}}
  .Then(function () {
    Inventory.Fetch(1).Log();
  });
// {id: 1, Items: [{id: 1, inventoryId: 1}]}
