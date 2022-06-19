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
        this.modal.style.display = 'flex';
        this.modal.getElementsByClassName('enemyPicBlock')
    .item(0).getElementsByTagName('img').item(0).src = this.enemy.image;
        for (let card of this.player.inventory) {
            let handler = function (card,e){
                this.state.MakeMove(card);
            };

            let playerChose = handler.bind(this,card,true);
            card.view.card.addEventListener('click',playerChose);
            card.view.putInSet(this.modal.querySelector('.playerZone'), 160, 240);
        }
        for (let card of this.enemy.inventory) {
            card.view.putInSetBack(this.modal.querySelector('.enemyCardsBlock'), 130, 140);
        }
        //setTimeout(this.exit_arena, 1000); // это прост чтоб пока смотреть другие арены
    }

    exit_arena = function () {
        // arena.arena.innerHTML = '';
        this.modal.style.display = 'none';
    }
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
        this.arena.exit_arena()
    }
    PlayerLose(){
        console.log('Player loose!');
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
        console.log('Player');
        console.log(this.cardHolder.lives)
        if (!this.CanContinuePlay())
        {
            this.PlayerLose();
            return;
        }
        card.view.putInSet(this.arena.modal.querySelector('.arenaField'), 160, 240);
        let del_card = this.arena.player.inventory.indexOf(card);
        this.arena.player.inventory.splice(del_card, 1);
        actionHandler(this.cardHolder,this.target,card);
        if (this.PlayerDontKillByLastCard()){
            this.PlayerLose();
            return;
        }
        this.state = new EnemyTurnState(this.arena);
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
        console.log('Enemy');
        if (!this.CanContinuePlay())
        {
            this.PlayerWin();
            return;
        }
        let card = this.cardHolder.inventory[0];
        let del_card = this.cardHolder.inventory.indexOf(card);
        this.cardHolder.inventory.splice(del_card, 1);
        this.arena.modal.querySelector('.arenaField').innerHTML='';
        card.view.putInSet(this.arena.modal.querySelector('.arenaField'), 160, 240);
        actionHandler(this.cardHolder,this.target,card);
        if (this.target.lives <=0){
            this.PlayerLose();
            return;
        }
        if (this.cardHolder.inventory.length === 0){
            this.PlayerWin();
            return;
        }
        this.state = new PlayerTurnState(this.arena);
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

