// Escribe un programa que pida una frase y escriba las vocales que aparecen

// Función para obtener las vocales únicas de una frase
// Solicitar al usuario que ingrese una frase

function isVowel(character) {
    return 'aeiouAEIOU'.includes(character);
}


function getVowels(sentence) {
    let foundVowels = [];
    for (let i = 0; i < sentence.length; i++) {
        let character = sentence[i];
        if (isVowel(character) && !foundVowels.includes(character.toLowerCase())) {
            foundVowels.push(character.toLowerCase());
        }
    }
    return foundVowels;
}


let sentence = prompt("Please enter a sentence:");


let vowels = getVowels(sentence);


if (vowels.length > 0) {
    console.log("Las vocales que aparecen en la frase son:");
    console.log(vowels.join(", "));
} else {
    console.log("No se encontraron vocales en la frase.");
}


let resultContainer = document.getElementById('result-container');
if (vowels.length > 0) {
    resultContainer.innerHTML = `<p>Las vocales que aparecen en la frase son: ${vowels.join(", ")}</p>`;
} else {
    resultContainer.innerHTML = `<p>No se encontraron vocales en la frase.</p>`;
}