    export default function StartBattle(arena,player,enemy){
    let cardHolder = player;
    let target = enemy;
    let temp = 0;
    while (cardHolder.inventory.length > 0 && cardHolder.lives > 0){//player.inventory.length >0 && enemy.inventory.length > 0 || player.lives > 0 || enemy.lives > 0){
        console.log(cardHolder.inventory);
        let card = cardHolder.inventory[0];
        let del_card = cardHolder.inventory.indexOf(card);
        cardHolder.inventory.splice(del_card, 1);
        card.view.putInSet(arena.modal.querySelector('.arenaField'));
        actionHandler(cardHolder,target,card);
        temp = cardHolder;
        cardHolder = target;
        target = temp;
    }
    if (enemy.lives <= 0 || enemy.inventory.length === 0)
        return 'Player Win';
    else
        return 'Player Loose'
}

function actionHandler(cardHolder,target,card){
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