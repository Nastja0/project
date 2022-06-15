import Player from "./Player";

const document_start = document.getElementById('start');
const document_button_start = document_start.querySelector(".button-start");
const document_name = document_start.querySelector("input");
const document_player = document.getElementById('player');
const document_map = document.getElementById('map');
const document_set_cards = document.getElementById('set-cards');

let player;

document_button_start.addEventListener('click', function () {
    if (document_name.value !== "") {
        document_player.querySelector('.name').textContent = document_name.value;
        document_start.style.display = 'none';
        document_player.style.display = 'flex';
        document_map.style.display = 'flex';
        document_set_cards.style.display = 'flex'
        player = new Player(document_name.value);
        console.log(player);
    }
});