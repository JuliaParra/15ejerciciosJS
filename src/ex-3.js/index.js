
// Escribe un programa que pida el nombre del usuario con un input y escriba un texto que diga “Hola <nombre-de-usuario>”

// Solicitar el nombre del usuario
// Mostrar el saludo en la consola
// Mostrar el saludo en la pantalla

let nombre = prompt("Por favor, escribe tu nombre");

console.log(`Hola ${nombre}`);

document.getElementById('greeting').textContent = `Hola ${nombre}`;
