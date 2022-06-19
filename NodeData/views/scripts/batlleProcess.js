export function StartBattle(arena,player,enemy){
let cardHolder = enemy;
let target = player;
while (cardHolder.inventory.length > 0 && cardHolder.lives > 0){//player.inventory.length >0 && enemy.inventory.length > 0 || player.lives > 0 || enemy.lives > 0){
    if(arena.state === 'enemy'){
        let card = cardHolder.inventory[0];
        let del_card = cardHolder.inventory.indexOf(card);
        cardHolder.inventory.splice(del_card, 1);
        card.view.putInSet(arena.modal.querySelector('.arenaField'));
        actionHandler(cardHolder,target,card);
        arena.state = 'player';
    }
    if(arena.state ==='player'){

    }
}
if (enemy.lives <= 0 || enemy.inventory.length === 0)
    return 'Player Win';
else
    return 'Player Loose'
}

export function actionHandler(cardHolder,target,card){
    switch (card.type) {
        case 'attack':
            target.damage(card.attack);
            break;
        case 'heal':
            cardHolder.heal(card.heal);
            break;
        case 'shield':
            cardHolder.pickUpShild(card.shield,card.shieldLifeTime);
    }
}