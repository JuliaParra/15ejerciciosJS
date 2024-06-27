// Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a

// Prompt para que el usuario ingrese una frase
// Contar las letras 'a' en la frase ingresada
// Mostrar el resultado en la consola
// Mostrar el resultado en la pantalla


function countLetterA(sentence) {
    let counter = 0;
    let lowerCaseSentence = sentence.toLowerCase();
    
    for (let i = 0; i < lowerCaseSentence.length; i++) {
        if (lowerCaseSentence[i] === 'a') {
            counter++;
        }
    }
    return counter;
}


let sentence = prompt("Por favor, escribe una frase:");


let countA = countLetterA(sentence);


console.log(`La letra 'a' aparece ${countA} veces en la frase.`);

document.body.innerHTML = `<h1>La letra 'a' aparece ${countA} veces en la frase.</h1>`;


