var Tile = function(x, y){
	var tile = [];
	var sprite = GAME.add.sprite(x*TILE_SIZE, y*TILE_SIZE, 'tile');
	sprite.inputEnabled = true;
	sprite.events.onInputDown.add(listener, tile);
	sprite.width = TILE_SIZE;
	sprite.height = TILE_SIZE;
    tile.sprite = sprite;
	tile.update = function(){
		

	}
	function listener(){
		if(GAME.selected!=null){
			//sprite.addChild();
			var sprite = GAME.add.sprite(this.sprite.x+(TILE_SIZE-CARD_INNER_SIZE)/2, this.sprite.y+(TILE_SIZE-CARD_INNER_SIZE)/2, GAME.selected.type);
			GRID.group.addChild(sprite);
			HAND.removeSelected(GAME.selected);
			GAME.selected=null;

		}
	}
	return tile;
}