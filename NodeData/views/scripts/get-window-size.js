document.querySelector(".window").style.height = `${document.documentElement.clientHeight}px`;
document.querySelector(".window").style.width = `${document.documentElement.clientWidth}px`;

window.setInterval(function (){
    document.querySelector(".window").style.height = `${document.documentElement.clientHeight}px`;
    document.querySelector(".window").style.width = `${document.documentElement.clientWidth}px`;
}, 100)
