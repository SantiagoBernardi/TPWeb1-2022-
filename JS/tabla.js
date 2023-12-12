"use strict"

const API = "https://62c63319a361f725129698a6.mockapi.io/api/v1/creadores/"

document.querySelector("#agregar").addEventListener("click", agregar1);
document.querySelector("#agregar3").addEventListener("click", agregar3);
document.querySelector("#limpiar").addEventListener("click", limpiar);

mostrar()
async function agregar1() {
    
    let canal = document.querySelector("#canal").value;
    let plataforma = document.querySelector("#plataforma").value;
    let contenido = document.querySelector("#contenido").value;

    let creador = {
        canal: canal,
        plataforma: plataforma,
        contenido: contenido
    }
    try {
        let res = await fetch (API, {
        "method": "POST",
        "headers": { "Content-type": "application/json"},
        "body": JSON.stringify(creador)
        })

        if (res.status == 201) {
            console.log("Creado!")
            mostrar();
        }
    }
    catch (error) {
        console.log(error)
    }
}

async function agregar3() {

    let canal = document.querySelector("#canal").value;
    let plataforma = document.querySelector("#plataforma").value;
    let contenido = document.querySelector("#contenido").value;

    let creador = {
        canal: canal,
        plataforma: plataforma,
        contenido: contenido
    }
    try {
        for (let j = 0; j < 3; j++) {
        let res = await fetch (API, {
        "method": "POST",
        "headers": { "Content-type": "application/json"},
        "body": JSON.stringify(creador)
        })

        if (res.status == 201) {
            console.log("Creado!")
            mostrar();
        }
    }
}
    catch (error) {
        console.log(error)
    }
}

async function mostrar() {

    let tabla = document.querySelector("#creador");
    tabla.innerHTML = `
        <tr>
            <th>Nombre</th>
            <th>Plataforma</th>
            <th>Tipo de contenido</th>
            <th>Opciones</th>
        </tr>
        `
    try {
        let res = await fetch(API);
        let creadores = await res.json();
        console.log(creadores);
        for (let creador of creadores) {
            console.log(creador.id)
            tabla.innerHTML +=  `
            <tr>
                <td>${creador.canal}</td>
                <td>${creador.plataforma}</td>
                <td>${creador.contenido}</td>
                <td><input type="button" id="${creador.id}" class="btn-eliminar" value="Eliminar"><input type="button" id="${creador.id}" class="btn-editar" value="Editar"></td>
            </tr>
            `;
            document.querySelectorAll(".btn-eliminar").forEach(btn => {
                btn.addEventListener("click", borrar)
                
            })
            document.querySelectorAll(".btn-editar").forEach(btn => {
                btn.addEventListener("click", editar)
                
            })
        }
    }
    catch (error) {
        console.log(error)
        }
}

async function borrar() {

    try {
        let res = await fetch(API+this.id, {
            "method": "DELETE"
        })
        if (res.status == 200) {
            console.log("Eliminado!")
            mostrar();
        }      
    }
    catch (error) {
        console.log(error)
        }
}

async function limpiar() {

    try {
        let res = await fetch(API);
        let creadores = await res.json();
        for (let creador of creadores) { 
            let res = await fetch(API+creador.id, {
                "method": "DELETE"
            })
        }
        console.log("Limpiado!")
        mostrar()
        }
        catch (error) {
            console.log(error)
            }
        }
      
async function editar () {
    
    let canal = document.querySelector("#canal").value;
    let plataforma = document.querySelector("#plataforma").value;
    let contenido = document.querySelector("#contenido").value;

    let creador = {
        canal: canal,
        plataforma: plataforma,
        contenido: contenido
    }
    try {
        let res = await fetch (API+this.id, {
        "method": "PUT",
        "headers": { "Content-type": "application/json"},
        "body": JSON.stringify(creador)
        })

            console.log("Editado!")
            mostrar();
    }
    catch (error) {
        console.log(error)
    }
      }
