// Escribe un programa que pida una frase y escriba las vocales que aparecen

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
    console.log("The vowels found in the sentence are:");
    console.log(vowels.join(", "));
} else {
    console.log("No vowels were found in the sentence.");
}


