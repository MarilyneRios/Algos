function findLongestWord(words) {
    let longestWord = '';
    
       for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    
    return longestWord;
}


console.log(findLongestWord(["Adiós", "Goodbye", "Au revoir", "Auf wiedersehen"]));