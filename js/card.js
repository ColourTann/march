
var Card = function(){
	var card = [];
	var sprite = GAME.add.sprite(0, 0, 'card');
	sprite.inputEnabled = true;
	sprite.events.onInputDown.add(listener, this);
	sprite.width = CARD_SIZE;
	sprite.height = CARD_SIZE;
    card.sprite = sprite;
    card.type = CARD_IMAGES[GAME.rnd.integer()%CARD_IMAGES.length];
    var innerSprite = GAME.add.sprite((CARD_SIZE-CARD_INNER_SIZE)/2,(CARD_SIZE-CARD_INNER_SIZE)/2, card.type)
    sprite.addChild(innerSprite);
    card.innerSprite = innerSprite;
	card.update = function(){
	}

	function listener(){
			if(GAME.selected == card){
				GAME.selected.sprite.tint=0xffffff;
				GAME.selected=null;
				return;
			}
			sprite.tint = 0xff00ff; 
			if(GAME.selected != null){
				GAME.selected.sprite.tint=0xffffff;
			}
			GAME.selected=card;
	}
	return card;
}


