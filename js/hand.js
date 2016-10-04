var Hand = function(){
	var hand = [];
	var cards = [];
    hand.cards= cards;
    var group = GAME.add.group();
    hand.group = group;
    
    hand.width = CARD_SIZE;
    hand.height = CARD_SIZE*3 + CARD_GAP*2;
    hand.resetCards = function(){        
        for(var i=0; i<3;i++){
            if(cards[i]!=null && cards[i].sprite!=null){
                cards[i].sprite.destroy();
            }
        }
        cards=[];
        for(var i=0;i<3;i++){
            var c = new Card();
            c.sprite.y=i*(CARD_SIZE+CARD_GAP);
            cards[i] = c;
            group.addChild(c.sprite);
        }
    }
    hand.removeSelected = function(card){
        var index = cards.indexOf(card);
        cards[index].sprite.destroy();
        var newCard= new Card();
        cards[index] = newCard;
        group.addChild(newCard.sprite);
        newCard.sprite.y=index*(CARD_SIZE+CARD_GAP);
    }
    hand.resetCards();
	return hand;
}