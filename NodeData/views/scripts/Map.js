import {enter_arena,exit_arena, Arena} from "./battle.js";
import Enemy from "./Enemy.js";
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
        console.log(node.getAttribute('type'));
        console.log(node);
        if (node.getAttribute('type') === 'enemy'){
            let arena = new Arena();
            let name = node.getAttribute('enemy');
            let enemy = new Enemy(name,`../image/${name}.png`)
            let player = document.getElementById('player');
            arena.modal.getElementsByClassName('enemyPicBlock')
                .item(0).getElementsByTagName('img').item(0).src=enemy.image;
            enter_arena(arena,player,enemy);
            //setTimeout(exit_arena,1000,arena);
        }
    });
})
