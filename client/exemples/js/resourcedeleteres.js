Player.Delete(1).Log();

Player.Delete({name: 'test'}).Log();

Player.Delete([12, {name: 'test'}, 78]).Log();
