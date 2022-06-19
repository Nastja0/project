import {inventory} from "./start.js";
import {hide_inventory, show_inventory} from './InventoryView.js'
let cardHandlers = [];
export default class Arena {
    constructor(player, enemy) {
        this.modal = document.getElementById('arena');
        this.name = this.modal.querySelector('.name-game');
        this.name.textContent = 'Арена';
        this.player = player;
        this.enemy = enemy;
        this.arena = this.modal.querySelector('.arena');
        this.states = {
            PlayerTurn: PlayerTurnState,
            EnemyTurn: EnemyTurnState
        };
        this.state = new PlayerTurnState(this);
    }


    enter_arena () {
        hide_inventory(inventory);
        this.state = new PlayerTurnState(this);
        this.modal.style.display = 'flex';
        this.modal.getElementsByClassName('enemyPicBlock')
    .item(0).getElementsByTagName('img').item(0).src = this.enemy.image;
        for (let card of this.player.inventory) {
            let localHandler = cardHandler.bind(this,card,true);
            cardHandlers.push(localHandler);
            card.view.card.addEventListener('click',localHandler);
            card.view.putInSet(this.modal.querySelector('.playerZone'), 15);
        }
        for (let card of this.enemy.inventory) {
            card.view.card_back.style.display = 'block';
            card.view.putInSetBack(this.modal.querySelector('.enemyCardsBlock'), 26);
        }
        //setTimeout(this.exit_arena, 1000); // это прост чтоб пока смотреть другие арены
    }

    exit_arena = function () {
        // arena.arena.innerHTML = '';
        for (let card of this.player.inventory) {
            for (let handler of cardHandlers){
                card.view.card.removeEventListener('click',handler);
            }
        }
        this.modal.style.display = 'none';
        this.state = new PlayerTurnState(this);
        show_inventory(inventory);
    }
}

var cardHandler = function (card,e){
    this.state.MakeMove(card);
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
class State{
    constructor(arena) {
        this.cardHolder='';
        this.target='';
        this.arena = arena;
        this.actionHandler = actionHandler;
    }
    PlayerWin(){
        console.log('Player win!');
        this.arena.player.money += this.arena.enemy.money;
        this.arena.player.changing_money();
        this.arena.exit_arena();
    }
    PlayerLose(){
        console.log(this.target);
        console.log(this.cardHolder);
        console.log('Player loose!');
        alert('Game over!')
        location.reload();
        this.arena.exit_arena();
    }

    CanContinuePlay(){
        return this.cardHolder.lives > 0 && this.cardHolder.inventory.length > 0;
    }
}

class PlayerTurnState extends State{
    constructor(arena) {
        super(arena);
        this.cardHolder = arena.player;
        this.target = arena.enemy;
    }
    MakeMove(card){
        if (!this.CanContinuePlay())
        {
            this.PlayerLose();
            return;
        }
        this.arena.modal.querySelector('.arenaField').innerHTML='';
        card.view.putInSet(this.arena.modal.querySelector('.arenaField'), 13);
        let del_card = this.arena.player.inventory.indexOf(card);
        this.arena.player.inventory.splice(del_card, 1);
        actionHandler(this.cardHolder,this.target,card);
        if (this.PlayerDontKillByLastCard()){
            this.PlayerLose();
            return;
        }
        this.arena.state = new EnemyTurnState(this.arena);
    }

PlayerDontKillByLastCard(){
    return this.cardHolder.inventory.length === 0 && this.target.lives > 0;
}
}
class EnemyTurnState extends State{
    constructor(arena) {
        super(arena);
        this.cardHolder = arena.enemy;
        this.target = arena.player;
        this.MakeMove();
    }
    MakeMove(){
        if (!this.CanContinuePlay())
        {
            this.PlayerWin();
            return;
        }
        let card = this.cardHolder.inventory[0];
        card.view.card_back.style.display = 'none';
        let del_card = this.cardHolder.inventory.indexOf(card);
        this.cardHolder.inventory.splice(del_card, 1);
        this.arena.modal.querySelector('.arenaField').innerHTML='';
        card.view.putInSet(this.arena.modal.querySelector('.arenaField'), 13);
        actionHandler(this.cardHolder,this.target,card);
        if (this.target.lives <=0){
            this.PlayerLose();
            return;
        }
        if (this.cardHolder.inventory.length === 0){
            this.PlayerWin();
            return;
        }
        this.arena.state = new PlayerTurnState(this.arena);
    }
}



makeScrollBeautiful('.playerZone');
makeScrollBeautiful('.enemyCardsBlock');
export {Arena};
function makeScrollBeautiful(selector = '.playerZone') {

    let isDown = false;
    let startX;
    let scrollLeft;

    const slider = document.querySelector(selector);
    slider.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        slider.scrollLeft += evt.deltaY;
    });

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
    });

}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}