import {enter_arena,exit_arena, Arena} from "./arena.js";
import Enemy from "./Enemy.js";
import {player} from "./start.js";
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
        if (node.getAttribute('type') === 'enemy'){
            let name = node.getAttribute('enemy');
            let enemy = new Enemy(name,`../image/${name}.png`)
            enter_arena(new Arena(),player,enemy)
        }
    });
})

