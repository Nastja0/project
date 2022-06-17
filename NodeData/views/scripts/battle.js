export default class Arena {
    constructor() {
        this.modal = document.getElementById('arena');
        this.name = this.modal.querySelector('.name-game');
        this.name.textContent = 'Арена';
        this.card = made_enemy()
        this.arena = this.modal.querySelector('.arena');
    }
}
let enter_arena = function (arena, player, enemy) {
    arena.modal.style.display = 'flex';
    // console.log('QQQQ')
    // console.log(arena)
    // console.log(arena.card);
    // arena.card.style.height = 300;
    // arena.card.style.width = 200;
    // arena.card.style.top = 0;
    // arena.card.style.right = 0;
    // arena.card.name = enemy.name;
    // arena.card.image = enemy.image;
    // arena.card.type = '';
    // arena.card.money = '';
    // arena.card.descriptions = '';
    // arena.card.querySelector('.cardImage img').style.height = `${300 * 3 / 4}px`;
    // arena.card.querySelector('.cardImage img').style.width = `${200 * 3 / 4}px`;
    // arena.modal.appendChild(arena.card);
}

let exit_arena = function (arena) {
    // arena.arena.innerHTML = '';
    arena.modal.style.display = 'none';
}
let made_enemy =  function createFromTemplate() {
    const cardTemplate = document.getElementById('cardTemplate');
    return cardTemplate.cloneNode(true);
}
export {enter_arena,exit_arena, Arena};

