// Escribe un programa que pida una frase y escriba cuantas vocales hay en la frase

// Función para contar vocales en una frase
// Convertir a minúsculas para comparación consistente
// Solicitar al usuario que ingrese una frase
// Contar las vocales en la frase ingresada

function isVowel(character) {
    return 'aeiouAEIOU'.includes(character);
}


function countVowels(sentence) {
    let counter = 0;
    let lowerCaseSentence = sentence.toLowerCase(); 
    
    for (let i = 0; i < lowerCaseSentence.length; i++) {
        let char = lowerCaseSentence[i];
        if (isVowel(char)) {
            counter++;
        }
    }
    
    return counter;
}


let sentence = prompt("Por favor, ingresa una frase:");


let vowelCount = countVowels(sentence);


console.log(`En la frase "${sentence}" hay ${vowelCount} vocales.`);


let resultElement = document.getElementById('vowelCount');
resultElement.textContent = `En la frase "${sentence}" hay ${vowelCount} vocales.`;
