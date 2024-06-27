// Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a


function countLetterA(sentence) {
    let count = 0;
    let lowerCaseSentence = sentence.toLowerCase();
    
    for (let i = 0; i < lowerCaseSentence.length; i++) {
        if (lowerCaseSentence[i] === 'a') {
            count++;
        }
    }
    return count;
}

let sentence = prompt("Please enter a sentence:");

let aCount = countLetterA(sentence);

console.log(`The letter 'a' appears ${aCount} times in the sentence.`);


