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
        let f = new function (){
            player.income(card);
        }
        card.view.card.addEventListener('click', f);
        card.view.putInSet(inventory.inventory, 160, 240);
    }
}

let exit_inventory = function (inventory) {
    inventory.inventory.innerHTML = '';
    inventory.modal.style.display = 'none';
}

export {InventoryView, get_inventory, exit_inventory};
