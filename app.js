// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let guardarNombre = [];
let nombreElegido = '';

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    if (nombre == '') {
        alert('Por favor, inserte un nombre.');
    } else {
        guardarNombre.push(nombre);
        document.getElementById('amigo').value = '';
        generarListado();
    }
    console.log(guardarNombre);
}

function generarListado() {

    for (let i = 0; i < guardarNombre.length; i ++) {
        persona = guardarNombre[i];
    }
    console.log(persona);
    
    let opcion1 = '<li>' + persona + '</li>';
    let miLista1  = document.getElementById('listaAmigos');
    miLista1.innerHTML += opcion1;
}

function sortearAmigo() {

    if (guardarNombre.length === 0) {
        alert('Por favor, inserte un nombre.');
    } else {
        // índice aleatorio del array
        indice = Math.floor(Math.random() * guardarNombre.length);
        
        // generación del nombre según del índice del array
        nombreElegido = guardarNombre[indice];
    }
    console.log(indice);
    console.log(nombreElegido);
    
    let opcion2 = `<li> El amigo secreto es: ${nombreElegido} </li>`
    let miLista2  = document.getElementById('resultado');
    miLista2.innerHTML = '';
    miLista2.innerHTML += opcion2;
}
