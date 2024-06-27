

function wordexist(phrase) {
    
    const lowerCaseSentence = phrase.toLowerCase();
    
   
    const word = "english";
    
  
    return lowerCaseSentence.includes(word);
}

console.log(wordexist("abcEnglishdef")); // true
console.log(wordexist("abcnEglishsef")); // false





   



