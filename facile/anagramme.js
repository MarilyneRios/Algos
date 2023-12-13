function filterAnagrams(word, array) {
    const anagrams = [];
    //split(""):  divise la chaîne de caractères 
    // join("") rassemble les éléments du tableau dans une nouvelle chaîne de caractères.
    const sortedWord = word.split("").sort().join("");
    
    for (const el of array) {
        const sortedEl = el.split("").sort().join("");
        if (sortedEl === sortedWord) {
            anagrams.push(el);
        }
    }
    
    anagrams.sort();
    
    return anagrams;
}

console.log(filterAnagrams("LEAST", ["STEAL", "STALE", "LANCE", "CRASH", "SLATE", "ROAST", "TESLA"]));

// Expected: ["SLATE","STALE","STEAL","TESLA"]

//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------

