import Player from "./Player.js";
import {add_cards, SetCardsView} from './SetCardsView.js';
import {exit_inventory, get_inventory, InventoryView} from './InventoryView.js';
import {ShopView, get_shop, exit_shop} from "./ShopView.js";

export let player;
let inventory;
let numbInv = 0;

start_game();

//начало игры
function start_game() {
    console.log("game started")//"fdsgbnm"
    const document_start = document.getElementById('start');
    const document_button_start = document_start.querySelector(".button-start");

    document_button_start.addEventListener('click', function () {
        const document_name = document_start.querySelector("input");
        if (document_name.value !== "") {
            document_start.style.display = 'none';

            const document_player = document.getElementById('player');
            player = new Player(document_name.value);
            document_player.querySelector('.name').textContent = player.name;
            document_player.style.display = 'flex';

            const document_map = document.getElementById('map');
            document_map.style.display = 'flex';

            const document_arena = document.getElementById('arena');
            document_arena.style.display = 'none';

            creat_inventory();
            start_set_cards(5);
        }
    });
}

//выбор первых карт или "сундук"
function start_set_cards(count) {
    let set_cards = new SetCardsView("Собери стартовый набор из 5 карт", count);
    add_cards(set_cards, player);
}

//создание инвентаря
function creat_inventory() {
    console.log(player)
    const document_inventory = document.querySelector('.inventoryImg');
    document_inventory.style.display = 'block';
    inventory = new InventoryView();
    inventory.inventoryImg.addEventListener('click', choice_inventory);
}

//появление и исчезновение инвентаря
function choice_inventory() {
    console.log(player)
    if (numbInv % 2 === 0) {
        get_inventory(inventory, player);
    } else {
        exit_inventory(inventory);
    }
    numbInv = (numbInv + 1) % 2;
}


/*открытие магазина
let t = new ShopView();
get_shop(t);
*/


/*открытие сундука
сюда функцию закрытия инвентаря

start_set_cards(1);
сюда функцию отображение инвентаря
*/

