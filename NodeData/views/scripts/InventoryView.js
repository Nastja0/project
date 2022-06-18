import {player} from "./start.js";

class InventoryView {
    constructor() {
        this.modal = document.getElementById('inventory');
        this.name = this.modal.querySelector('.name-game');
        this.name.textContent = 'Инвентарь';
        this.inventory = this.modal.querySelector('.inventory');

        this.inventoryImg = document.querySelector('.inventoryImg');
    }
}

let get_inventory = function (inventory) {
    inventory.modal.style.display = 'flex';
    for (let card of player.inventory) {
        card.view.card.addEventListener('click', () => {player.income(card)});
        card.view.putInSet(inventory.inventory, 160, 240);
    }
}

let exit_inventory = function (inventory) {
    for (let card of player.inventory) {
        card.view.card.removeEventListener('click', () => {player.income(card)});
    }
    inventory.inventory.innerHTML = '';
    inventory.modal.style.display = 'none';
}

export {InventoryView, get_inventory, exit_inventory};
