function getPalindromes(words) {
    const palindromes = [];
    
    for (let word of words) {
        const spellWord = word.split('');
        const reverseSpellWord = spellWord.slice().reverse(); // Utilisation de slice() pour copier le tableau

        if (spellWord.join('').toLowerCase() === reverseSpellWord.join('').toLowerCase()) { // Comparaison des chaînes de caractères
            palindromes.push(word);
        }
    }
    
    return palindromes.sort(); // classé par ordre alphabetique
}
    

const examplePalindromes = ['HELLO', 'KAYAK', 'ANNA', 'TOTO', 'JAVASCRIPT','LOL', "MODEM"];
console.log(getPalindromes(examplePalindromes));
// Expected: ['ANNA', 'KAYAK', LOL']
