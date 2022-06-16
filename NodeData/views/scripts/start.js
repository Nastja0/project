import Player from "./Player.js";
import {SetCardsView, add_cards} from './SetCardsView.js';

let player;

start_game();

//начало игры
function start_game() {
    console.log("fdsgbnm")
    const document_start = document.getElementById('start');
    const document_button_start = document_start.querySelector(".button-start");

    document_button_start.addEventListener('click', function () {
        const document_name = document_start.querySelector("input");
        if (document_name.value !== "") {
            const document_player = document.getElementById('player');
            /*
                        const document_map = document.getElementById('map');
            */
            player = new Player(document_name.value);
            document_player.querySelector('.name').textContent = player.name;
            document_start.style.display = 'none';
            document_player.style.display = 'flex';
            /*
                        document_map.style.display = 'flex';
            */
            start_set_cards();
        }
    });
}

//выбор первых карт или "сундук"
function start_set_cards(count) {
    let set_cards = new SetCardsView("Собери стартовый набор из 5 карт", count);
    add_cards(set_cards, player);
}