Inventory = N 'inventory'
Item = N 'item'

Inventory.HasMany Item

Item.Create().Catch console.error #Error

Inventory.Create()
  .Then (inventory) -> Item.Create(inventoryId: inventory).Log()
# {id: 1, inventoryId: 1, Inventory: {id: 1}}
  .Then -> Inventory.Fetch(1).Log()
# {id: 1, Items: [{id: 1, inventoryId: 1}]}
