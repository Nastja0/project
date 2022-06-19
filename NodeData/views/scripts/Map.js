import {Arena} from "./arena.js";
import {ShopView,get_shop} from "./ShopView.js";
import CreateEnemy from "./Enemy.js";
import {player,inventory,start_set_cards} from "./start.js";
import {hide_inventory, show_inventory} from './InventoryView.js'
const leveltree =document.querySelectorAll('.vertex');
let allowedNodes = ['1']
leveltree.forEach(el => {
    el.addEventListener("click", (e)=>{
        let node = el;
        let id = node.getAttribute('id');
        if (allowedNodes.indexOf(id) === -1)
            return;
        allowedNodes = node.getAttribute('nextid');
        let circle = el.getElementsByTagName('circle').item(0);
        circle.style.fill = '#ff0000';
        let type =node.getAttribute('type') ;
        if (type === 'enemy'){
            let name = node.getAttribute('enemy');
            let enemy = CreateEnemy(name);
            let arena = new Arena(player,enemy);
            console.log(arena);
            arena.enter_arena();
        }
        if (type === 'Chest'){
            hide_inventory(inventory);
            start_set_cards(2);
            show_inventory(inventory);
        }
        if (type === 'Shop'){
            let shop = new ShopView();
            get_shop(shop);
        }
    });
})

