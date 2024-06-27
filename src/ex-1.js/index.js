// Escribe un programa que escriba en la pantalla un texto de tipo <h1> que diga “Hello Javascript”

/*
* Conectar archivo javascript al html de destino
* Imprimir Hello Javascript! en nuestra ventana del navegador
* * definir el contenedor o espacio que va a ocupar el mensaje Hello JS
* * acceder al contenedor desde javascript
* * crear el mensaje
* * insertar en el contenedor
* * imprimirlo en pantalla
*/

document.addEventListener('DOMContentLoaded', (event) => {
    showHeading() });

function showHeading() {
   
    let heading = document.createElement('h1');
    
    heading.textContent = 'Hello Javascript';
    
    document.body.appendChild(heading);
}

