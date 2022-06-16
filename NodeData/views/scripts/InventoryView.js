class InventoryView {
    constructor() {
        this.modal = document.getElementById('inventory');
        this.name = this.modal.querySelector('.name-game');
        this.name.textContent = 'Инвентарь';
        this.inventory = this.modal.querySelector('.inventory');

        this.inventoryImg = document.querySelector('.inventoryImg');
    }
}

let get_inventory = function (inventory, player) {
    inventory.modal.style.display = 'flex';
    console.log(inventory.modal)
    for (let card of player.inventory) {
        card.view.putInSet(inventory.inventory, 160, 240);
    }
}

let exit_inventory = function (inventory) {
    inventory.inventory.innerHTML = '';
    inventory.modal.style.display = 'none';
}

export {InventoryView, get_inventory, exit_inventory};
