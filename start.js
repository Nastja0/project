import * as player from './class-player.js' ;

const button_start = document.querySelector(".button-start");
let name = document.querySelector("input");

button_start.addEventListener('click', function () {
    if (name.value !== "") {
        player.player = new Player(name)
        window.location.href = 'set-cards.html';
    }
});