const leveltree =document.querySelectorAll('.vertex');
console.log(leveltree)
let allowedNodes = ['1']
leveltree.forEach(el => {
    el.addEventListener("click", (e)=>{
        console.log(el.getAttribute('nextid'));
        let node = el;
        let id = node.getAttribute('id');
        if (allowedNodes.indexOf(id) === -1)
            return;
        allowedNodes = node.getAttribute('nextid');
        console.log(allowedNodes);
        let circle = el.getElementsByTagName('circle').item(0);
        circle.setAttribute('fill','#ff0000');
    });
})
