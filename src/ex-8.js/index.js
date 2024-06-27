function isVowel(character) {
    return 'aeiouAEIOU'.includes(character);
}

// Function to obtain unique vowels from a sentence
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

// Prompt the user to enter a sentence
let sentence = prompt("Please enter a sentence:");

// Obtain the vowels from the sentence
let vowels = getVowels(sentence);

// Display results in the console
if (vowels.length > 0) {
    console.log("Las vocales que aparecen en la frase son:");
    console.log(vowels.join(", "));
} else {
    console.log("No se encontraron vocales en la frase.");
}

// Display results on the screen
if (vowels.length > 0) {
    document.body.innerHTML = `<h1>Las vocales que aparecen en la frase son: ${vocales.join(", ")}</h1>`;
} else {
    document.body.innerHTML = `<h2>No se encontraron vocales en la frase.</h2>`;
}