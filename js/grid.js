var Grid = function(){
	var grid = [];
	var tiles = [];
    var group = GAME.add.group();
    grid.group = group;
    grid.width = TILES_ACROSS * TILE_SIZE;
    grid.height = TILES_DOWN * TILE_SIZE;
    for(var x=0; x<TILES_ACROSS; x++){
        for(var y=0; y<TILES_DOWN; y++){
        	var tile = new Tile(x, y);
            tiles.push(tile);
            group.addChild(tile.sprite);
        } 
    }
	grid.update = function(){
		
		
	}
	return grid;
}