//variables

const home = document.getElementById('home-score');
const guest = document.getElementById('guest-score');
const reseteo= document.getElementById('resetear');

function trespuntosh(){
    let puntos= home.innerHTML;
    let tres = parseInt(puntos) + 3;
    home.textContent= tres;
}
function trespuntosg(){
    let puntos= guest.innerHTML;
    let tres = parseInt(puntos) + 3;
    guest.textContent= tres;
}
function dospuntosh(){
    let puntos= home.innerHTML;
    let dos = parseInt(puntos) + 2;
    home.textContent= dos;
}
function dospuntosg(){
    let puntos= guest.innerHTML;
    let dos = parseInt(puntos) + 2;
    guest.textContent= dos;
}
function unpuntoh(){
    let puntos= home.innerHTML;
    let uno = parseInt(puntos) + 1;
    home.textContent= uno;
}
function unpuntog(){
    let puntos= guest.innerHTML;
    let uno = parseInt(puntos) + 1;
    guest.textContent= uno;
}

function reset(){
    home.innerHTML= 0;
    guest.innerHTML= 0;
}