export default class Arena {
    constructor() {
        this.modal = document.getElementById('arena');
        this.name = this.modal.querySelector('.name-game');
        this.name.textContent = 'Арена';
        this.arena = this.modal.querySelector('.arena');
    }
}
makeScrollBeautiful('.playerZone');
makeScrollBeautiful('.enemyCardsBlock');
let enter_arena = function (arena, player, enemy) {
    document.getElementById('inventory').setAttribute('display','none');//не работает
    arena.modal.style.display = 'flex';
    arena.modal.getElementsByClassName('enemyPicBlock')
        .item(0).getElementsByTagName('img').item(0).src=enemy.image;
    for (let card of player.inventory) {
            card.view.putInSet(arena.modal.querySelector('.playerZone'), 160, 240);
            card.view.putInSetBack(arena.modal.querySelector('.enemyCardsBlock'), 130, 140);
    }
    //setTimeout(exit_arena,1000,arena); // это прост чтоб пока смотреть другие арены
}


let exit_arena = function (arena) {
    // arena.arena.innerHTML = '';
    arena.modal.style.display = 'none';
}
export {enter_arena,exit_arena, Arena};

function makeScrollBeautiful(selector='.playerZone'){

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
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
    });

}

