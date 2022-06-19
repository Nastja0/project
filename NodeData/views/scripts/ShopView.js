import {inventory, player} from "./start.js";
import creat_rand_card from "./Card.js";
import {hide_inventory, show_inventory} from './InventoryView.js'

class ShopView {
    constructor() {
        this.modal = document.getElementById('shop');
        this.name = this.modal.querySelector('.name-game');
        this.name.textContent = 'Магазин';
        this.shop = this.modal.querySelector('.inventory');

        this.button = this.modal.querySelector('.button-shop');

        this.invent = [];
    }
}

let get_shop = function (shop) {
    hide_inventory(inventory);
    shop.modal.style.display = 'flex';
    for (let number = 0; number < 4; number++){
        let card = creat_rand_card();
        shop.invent.push(card);
        card.view.card.addEventListener('click', () => {player.purchase(card)});
        card.view.putInSet(shop.shop, 10);
    }
    shop.button.addEventListener('click', () => {exit_shop(shop)})
}

let exit_shop = function (shop) {
    for (let card of shop.invent) {
        card.view.card.removeEventListener('click', () => {player.purchase(card)});
    }
    shop.invent = [];
    shop.shop.innerHTML = '';
    shop.modal.style.display = 'none';
    show_inventory(inventory);
}

export {ShopView, get_shop, exit_shop};