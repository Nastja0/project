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
        card.event = function () {
            player.income(card)
        }
        card.view.card.addEventListener('click', card.event);
        card.view.putInSet(inventory.inventory, 10);
    }
}

let exit_inventory = function (inventory) {
    for (let card of player.inventory) {
        card.view.card.removeEventListener('click', card.event);
    }
    inventory.inventory.innerHTML = '';
    inventory.modal.style.display = 'none';
}

/*прячем инвентарь*/
let hide_inventory = function (inventory) {
    inventory.inventoryImg.style.display = 'none';
}

/*показываем инвентарь*/
let show_inventory = function (inventory) {
    inventory.inventoryImg.style.display = 'flex';
}

export {InventoryView, get_inventory, exit_inventory, hide_inventory, show_inventory};
