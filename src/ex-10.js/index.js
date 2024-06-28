// Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales

// Verifica si un carácter dado es una vocal
// llevar el conteo de las apariciones de cada vocal
// Solicita al usuario que ingrese una frase
// obtener el conteo de cada vocal en la frase.

function isVowel(character) {
    return 'aeiouAEIOU'.includes(character);
}

function countVowels(sentence) {
    let vowelCount = {
        'a': 0,
        'e': 0,
        'i': 0,
        'o': 0,
        'u': 0
    };

    let lowercaseSentence = sentence.toLowerCase();

    for (let i = 0; i < lowercaseSentence.length; i++) {
        let char = lowercaseSentence[i];
        if (isVowel(char)) {
            vowelCount[char]++;
        }
    }

    return vowelCount;
}

let sentence = prompt("Por favor, ingresa una frase:");

let results = countVowels(sentence);

console.log(`En la frase "${sentence}" las vocales aparecen de la siguiente manera:`);
console.log(`- Vowel 'a': ${results['a']} times`);
console.log(`- Vowel 'e': ${results['e']} times`);
console.log(`- Vowel 'i': ${results['i']} times`);
console.log(`- Vowel 'o': ${results['o']} times`);
console.log(`- Vowel 'u': ${results['u']} times`);


let output = `<p>En la frase "${sentence}" las vocales aparecen de la siguiente manera:<br>`;
output += `- Vowel 'a': ${results['a']} times<br>`;
output += `- Vowel 'e': ${results['e']} times<br>`;
output += `- Vowel 'i': ${results['i']} times<br>`;
output += `- Vowel 'o': ${results['o']} times<br>`;
output += `- Vowel 'u': ${results['u']} times</p>`;

document.body.innerHTML = output;