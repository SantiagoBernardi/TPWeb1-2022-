"use strict"

document.querySelector(".img-secundaria1").addEventListener ("click", cambiar);
document.querySelector(".img-secundaria2").addEventListener ("click", cambiar);
document.querySelector(".img-secundaria3").addEventListener ("click", cambiar);
document.querySelector(".img-secundaria4").addEventListener ("click", cambiar);

function cambiar() {
    document.querySelector('#img-actual').src = this.src;
}