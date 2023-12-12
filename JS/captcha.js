"use strict"

let valor1;
let valor2;
function generar() {
    valor1 = Math.floor(Math.random()*9);
    valor2 = Math.floor(Math.random()*9);
    document.getElementById("numero1").innerHTML = valor1;
    document.getElementById("numero2").innerHTML = valor2;
}

function enviar() {
    var result = document.getElementById("resultado").value;
    if (result == (valor1+valor2)) {
        document.getElementById("mensaje").innerHTML = "Exito, su formulario ha sido enviado";
    }
    else {
        document.getElementById("mensaje").innerHTML = "Error, porfavor intentelo de nuevo";
    }
}

let btng = document.getElementById("generar");
    btng.addEventListener("click", generar);
let btne = document.getElementById("enviar");
    btne.addEventListener("click", enviar);